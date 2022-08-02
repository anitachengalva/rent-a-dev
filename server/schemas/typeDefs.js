const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
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

  type Skill {
    _id: ID
    skillType: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    skills(username: String): [Skill]
    skill(skillId: ID!): Skill
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRequest(requestText: String!): Request
    addSkill(skillId: ID!, skillType: String!): Skill
    removeRequest(requestId: ID!): Request
    removeSkill(skillId: ID!): Skill
  }
`;

module.exports = typeDefs;