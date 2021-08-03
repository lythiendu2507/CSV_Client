import React from 'react';
import Link from 'next/link'
import { Card,  Typography } from '@material-ui/core';
import { useQuery, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { createStyles, Theme, Paper, Hidden, withWidth } from '@material-ui/core/';
import MainLayout, { mainLayoutNamespacesRequired } from '../../components/Modules/MainLayout';
import ProductsType from '../../components/Modules/TypeProduct/TypeProduct'
import { GET_PRODUCTS } from '../../graphql/getProducts/getProducts'
import { GET_PRODUCTSTYPE } from '../../graphql/getTypeProducts/getTypeProducts'

const Products = ({ products }) => {
  
  return (
    // <MainLayout>
    <MainLayout maxWidth="sm" className="products__products" >
      {/* <ProductsType/> */}
      
      <div className="products container mobile-content my-3 my-sm-5">
        <div className="d-flex flex-nowrap justify-content-between">
          <div className="products__sidebar pr-4 d-none d-sm-block">
            <div>hello</div>
          </div>
          <div className="flex-grow-1 w-100">
            <div className="px-2 px-sm-0 mb-2"></div>
            <div className=" products__cards mb-3 text-center pb-5 pt-5">
              {products.map((product) => (
                <Link href={`/products/${product.id}`}>
                  <Card key={product.id}>

                    <Typography component="h2">
                      {product.name}
                    </Typography><Typography component="h2">
                      {product.old_price}
                    </Typography>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
    // </MainLayout>
  );
};

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
      products: data.products
    }
  }
}



export default Products;