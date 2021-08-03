import {gql} from '@apollo/client'


export const GET_PRODUCT = gql `
    query product($id: String!)
    {
        product(id:$id)
        {
            id
            name
            old_price
        }
    }
`