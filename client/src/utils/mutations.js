import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: !String1, $username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    user {
      _id
      firstName
      lastName
      username
      email
      password
    }
    token
  }
}
`;
//add skills back in

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
  mutation addRequest($requestText: String!) {
  addRequest(requestText: $requestText) {
    _id
    requestText
    requestAuthor
    createdAt
    skills {
      _id
      skillType
    }
  }
}
`;

export const ADD_SKILL = gql`
  mutation addSkill($skillId: ID!, $skillType: String!) {
  addSkill(skillId: $skillId, skillType: $skillType) {
    _id
    skillType
  }
}
`;

export const ADD_USER_SKILL = gql`
  mutation addUserSkill($userId: ID!, $skillType: String!) {
  addUserSkill(userId: $userId, skillType: $skillType) {
    _id
    skillType
  }
}
`;

export const REMOVE_REQUEST = gql`
  mutation removeRequest($requestId: ID!) {
  removeRequest(requestId: $requestId) {
    _id
    requestText
    requestAuthor
    createdAt
    skills {
      _id
      skillType
    }
  }
}

`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skillId: ID!) {
  removeSkill(skillId: $skillId) {
    _id
    skillType
  }
}
`;

export const REMOVE_USER_SKILL = gql`
mutation Mutation($userId: ID!, $skillId: String!) {
  removeUserSkill(userId: $userId, skillId: $skillId) {
    _id
    skillType
  }
}
`;