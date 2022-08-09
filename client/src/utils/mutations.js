import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const ADD_LOGIN = gql`
  mutation createLogin($email: String!, $password: String!) {
    createLogin(email: $email, password: $password) {
      _id
      email
      password
    }
  }
`;

export const ADD_REQUEST = gql`
  mutation createRequest($requestText: String!) {
    createRequest(requestText: $requestText) {
      _id
    }
  }
`;

export const ADD_SKILL = gql`
  mutation createSkill($skillId: ID!, $skillType: String!) {
    createSkill(skillId: $skillId, skillType: $skillType) {
      _id
    }
  }
`;

export const ADD_USER_SKILL = gql`
  mutation createUserSkill($userId: ID!, $skillType: String!) {
    createUserSkill(userId: $userId, skillType: $skillType) {
      _id
    }
  }
`;

export const REMOVE_REQUEST = gql`
  mutation removeRequest($requestId: ID!) {
    removeRequest(requestId: $requestId) {
      _id
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skillId: ID!) {
    removeSkill(skillId: $skillId) {
      _id
    }
  }
`;

export const REMOVE_USER_SKILL = gql`
  mutation removeUserSkill($userId: ID!, $skillId: String!) {
    removeUserSkill(userId: $userId, skillId: $skillId) {
      _id
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!, 
    $email: String!, 
    $password: String!
    ) {
      addUser(
      username: $username, 
      email: $email, 
      password: $password
      ) {
        token
        user {
          _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login(
    $email: String!, 
    $password: String!
    ) {
      login(email: $email, 
      password: $password
      ) {
        token
        user {
          _id
        }
      }
    }
`;