import { GET_PRODUCT } from './getProduct.query';
import {gql} from '@apollo/client'

export const productCardQueryProps = `
  id
  name
  price`


export const GET_PRODUCTS = gql `
    query getProducts{
        products{
            ${productCardQueryProps}
        }
    }
`