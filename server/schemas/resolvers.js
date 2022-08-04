// currently working on this - DO NOT EDIT
const { AuthenticationError } = require('apollo-server-express');
const { User, Request, Skill } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('skills');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('skills');
    },
    requests: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Request.find(params).sort({ createdAt: -1 });
    },
    request: async (parent, { requestId }) => {
      return Request.findOne({ _id: requestId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('skills');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addRequest: async (parent, { requestText }, context) => {
      if (context.user) {
        const request = await Request.create({
          requestText,
          requestAuthor: context.user.username,
          skillType,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { requests: request._id } }
        );

        return request;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // add additional skill requirements to request
    addSkill: async (parent, { requestId, skillType }, context) => {
      if (context.user) {
        return Request.findOneAndUpdate(
          { _id: requestId },
          {
            $addToSet: {
              skills: { skillType, requestAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // update skill set on user profile
    addUserSkill: async (parent, { userId, skillType }, context) => {
        if (context.user) {
          return User.findOneAndUpdate(
            { _id: userId },
            {
              $addToSet: {
                skills: { skillType },
              },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    removeRequest: async (parent, { requestId }, context) => {
      if (context.user) {
        const request = await Request.findOneAndDelete({
          _id: requestId,
          requestAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { requests: request._id } }
        );

        return request;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // remove skill from request
    removeSkill: async (parent, { requestId, skillId }, context) => {
      if (context.user) {
        return Request.findOneAndUpdate(
          { _id: requestId },
          {
            $pull: {
              skills: {
                _id: skillId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // remove skill from user profile
    removeUserSkill: async (parent, { userId, skillId }, context) => {
        if (context.user) {
          return User.findOneAndUpdate(
            { _id: userId },
            {
              $pull: {
                skills: {
                  _id: skillId,
                },
              },
            },
            { new: true }
          );
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  },
};

module.exports = resolvers;
