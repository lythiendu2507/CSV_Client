import { gql } from '@apollo/client';




export const SIGN_USER = gql`
  mutation signup($email:String!,$name: String!, $password: String!,$phone: String!) {
    signup( email:$email, name: $name,password: $password, phone: $phone) {
      token
    }
  }
`
