import Head from 'next/head'
import React,{useState} from 'react';
import Link from 'next/link'
import { Card, Typography } from '@material-ui/core';
import styles from '../styles/Home.module.css'
import MainLayout from '../components/Modules/MainLayout'
import { ApolloClient, InMemoryCache, ApolloProvider, useApolloClient, defaultOptions, useQuery } from '@apollo/client'
import Products from './products/index'
import { GET_PRODUCTSTYPE } from '../graphql/getTypeProducts/getTypeProducts'
import { GET_PRODUCTS } from '../graphql/getProducts/getProducts';
import TypeProduct from '../components/Modules/TypeProduct/TypeProduct'
export default function Home(props) {

  const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions

  })
  console.log(props.data);
  
  return (
    
    <ApolloProvider client={apolloClient}>

      <MainLayout maxWidth="sm" className="products__products" />
      {/* <Products/> */}
      <TypeProduct props={props}/>
      {props.data.products.map((product) => (
        <Link href={`/products/${product.id}`}>
          <Card key={product.id}>

            <Typography component="h2">
              {product.name}
            </Typography>
            {/* <Typography component="h2">
              {product.products.map((t)=>(
                <Link href={`/products/${t.id}`}>
                  <Card key={toString.id}>

                    <Typography component="h2">
                     {t.name}
                    </Typography><Typography component="h2">
                      {t.price}
                     </Typography>
                      </Card>
                      </Link>
              ))}
            </Typography> */}
          </Card>
        </Link>
      ))}
      {/* {productstype.productstype.producttypes.map((products) => (
        {products.products.map((product) =>(
          <Link href={`/products/${product.id}`}>
          <Card key={product.products.id}>

            <Typography component="h2">
              {product.products.name}
              </Typography><Typography component="h2">
              {product.products.price}
            </Typography>
          </Card>
        </Link>

        ))}
        
      ))}
       */}
    </ApolloProvider>
  )
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  
  const { data } = await client.query([
    {query: GET_PRODUCTS},
    {query: GET_PRODUCTSTYPE}
  ])
  return {
    props: data
  }
}
