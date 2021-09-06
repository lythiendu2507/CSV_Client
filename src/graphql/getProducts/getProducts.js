import { GET_PRODUCT } from './getProduct.query';
import {gql} from '@apollo/client'

export const productCardQueryProps = `
  id
  name
  old_price
  sale_price
  discription
  createAt
  image_256
  user{
      name
  }
  `


export const GET_PRODUCTS = gql `
    query getProducts{
        products{
            ${productCardQueryProps}
        }
    }
`