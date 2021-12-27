import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($user: UserInput) {
    loginUser(user: $user) {
      username
      email
      password
    }
  }
`;
