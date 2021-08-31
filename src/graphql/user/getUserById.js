import { gql } from '@apollo/client';



export const GET_USERBYID = gql`
   query user($id: ID!) {
    user(id: $id) {
      name
      createAt
      products{
        id
        name
        sale_price
        old_price
        discription
        createAt
      }
      carts{
      id
      product{
        name
        sale_price
        old_price
        discription
        createAt
      }
      
      
    }

    }
  }
`