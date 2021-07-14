import Head from 'next/head'
import React, { useState } from 'react';
import Link from 'next/link'
import { Card, Typography, Container } from '@material-ui/core';
import styles from '../styles/Home.module.css'
import MainLayout from '../components/Modules/MainLayout'
import { ApolloClient, InMemoryCache, ApolloProvider, useApolloClient, defaultOptions, useQuery } from '@apollo/client'
import Products from './products/index'
import { GET_PRODUCTSTYPE } from '../graphql/getTypeProducts/getTypeProducts'
import { GET_PRODUCTS } from '../graphql/getProducts/getProducts';
import TypeProduct from '../components/Modules/TypeProduct/TypeProduct'
import Product from './products/index'

export default function Home({ products }) {

  const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions

  })
  const [producttype, setProducttype] = useState([]);
 

  return (

    <ApolloProvider client={apolloClient}>

      <MainLayout maxWidth="sm" className="products__products" />
      

      <Container>

        <div  className= "product__cards mb-3 my-4">
        <TypeProduct/>
        <div className="products container mobile-content my-3 my-sm-5">
        <div className="d-flex flex-nowrap justify-content-between">
          {/* <div className="products__sidebar pr-4 d-none d-sm-block">
            <div>Sản phẩm</div>
          </div> */}
          <div className="flex-grow-1 w-100">
            <div className="px-2 px-sm-0 mb-2"></div>
            <div className=" products__cards mb-3 text-center pb-5 pt-5">
              {products.products.map((product) => (
                <Link href={`/products/${product.id}`}>
                  <Card key={product.id}>

                    <Typography component="h2">
                      {product.name}
                    </Typography><Typography component="h2">
                      {product.price}
                    </Typography>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
        {/* {products.products.map((product) => (
          <Link href={`/products/${product.id}`}>
            <Card key={product.id} >
            <div className="product-card-container">
              
                {product.name}
              
                {product.price}
              </div>
            </Card>
          </Link>

        ))} */}
        </div>
      </Container>


    </ApolloProvider>
  )
}

export async function getServerSideProps(context) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_PRODUCTS
  })


  return {
    props: {
      products: data
    }
  }
}
