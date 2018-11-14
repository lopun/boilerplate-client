import gql from "graphql-tag";

export const EMAIL_SIGN_UP = gql`
  mutation emailSignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $age: Int!
  ) {
    EmailSignUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      age: $age
    ) {
      ok
      error
      token
    }
  }
`;
