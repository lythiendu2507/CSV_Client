import { gql } from '@apollo/client';




export const ADD_PRODUCT = gql`
  mutation createProduct($name:String!,$old_price: String!, $sale_price: String!,
    $discription: String!, $producttypeId: ID!, $userId: ID!,$image_256:String) {
    createProduct(name:$name,old_price:$old_price,
    sale_price:$sale_price,discription:$discription,
      producttypeId: $producttypeId,userId:$userId, image_256:$image_256)
  {
    id
    name
    discription
    createAt
  }
  }
`
