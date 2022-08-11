const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Skill {
    _id: ID
    skillType: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    skills: [Skill]!
    requests: [Request]!
  }

  type Request {
    _id: ID
    requestText: String
    requestAuthor: String
    createdAt: String
    skills: [Skill]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    requests(username: String): [Request]
    request(skillId: ID!): Request
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRequest(requestText: String!): Request
    addSkill(skillId: ID!, skillType: String!): Skill
    addUserSkill(userId: ID!, skillType: String!): Skill
    removeRequest(requestId: ID!): Request
    removeSkill(skillId: ID!): Skill
    removeUserSkill(userId: ID!, skillId: String!): Skill
  }
`;

module.exports = typeDefs;
