import { gql } from '@apollo/client';

export const LoginData = {
  login: {
    token: String

  }
}

export const LoginUserInput = {
  username: String,
  password: String
}

export const LoginVars = {
  inputs: LoginUserInput
}

export const LOGIN_USER = gql`
  mutation login($inputs: LoginUserInput!) {
    login(inputs: $inputs) {
      token
    }
  }
`
