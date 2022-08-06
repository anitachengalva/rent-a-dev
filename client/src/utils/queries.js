import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

//do i need this if i have a "me" query
export const QUERY_USER = gql`
  query user($username: String!) {
    matchups(username: $username) {
      _id
      username
      email
      password
      skills
      requests
    }
  }
`;

export const QUERY_REQUEST = gql`
  query tech {
    tech {
      _id
      requestText
      requestAuthor
      createdAt
      skills
    }
  }
`;

export const QUERY_REQUESTS = gql`
  query tech {
    tech {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      skills
    }
  }
`;
