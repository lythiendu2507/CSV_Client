import { gql } from '@apollo/client';




export const ADD_PRODUCT = gql`
  mutation createProduct($name:String!,$old_price: String!, $sale_price: String!,
    $discription: String!, $producttypeId: ID!, $userId: ID!) {
    createProduct(name:$name,old_price:$old_price,
    sale_price:$sale_price,discription:$discription,
      producttypeId: $producttypeId,userId:$userId)
  {
    id
    name
    discription
    createAt
  }
  }
`
