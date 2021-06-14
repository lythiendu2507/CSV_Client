import React from 'react';
import Link from 'next/link'
import MainLayout, { mainLayoutNamespacesRequired } from '../../components/Modules/MainLayout';
import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Button, Container,makeStyles, createStyles, Theme,Paper, Hidden, withWidth, Typography } from '@material-ui/core/';

import {GET_PRODUCTS} from '../../graphql/getProducts/getProducts'
import {GET_PRODUCT} from '../../graphql/getProducts/getProduct.query'

const Products = ({product}) => {
  console.log(product)
    return (
        <MainLayout>

            <h1>{product.name}</h1>
           
        </MainLayout>
    );
};

// export async function getStaticProps(content) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${content.params.id}`)
//     const todo = await res.json();
//     return {
//         props:{
//             todo,
//         },
//     }
// }


export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache()
      })
  
      const {data} = await client.query({
        query: GET_PRODUCTS
      })
    const paths = data.products.map((product) =>({
        params:{
          id: product.id
        }
    }))
    return {paths, fallback:false}
   
}


export async function getStaticProps({params}) {
    const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache()
    })
    const {data} = await client.query({
      query: GET_PRODUCTS,
    })
    const dataProduct = data.products.filter((dataproduct) => dataproduct.id === params.id)
    return {
        props: {
          product: dataProduct[0]
        }
    }
}

// export async function getServerSideProps(content) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${content.params.id}`)
//     const todo = await res.json();
//     return {
//         props:{
//             todo,
//         }
//     }
// }



export default Products;