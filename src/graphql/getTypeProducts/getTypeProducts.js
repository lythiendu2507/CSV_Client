
import {gql} from '@apollo/client'



export const GET_PRODUCTSTYPE = gql `
query getTypeProducts{

    producttypes{
            id
            name
            products{
                 id
                 name
                 old_price
      }
        }
}
    
`