import React from 'react';

import { Card,  Typography } from '@material-ui/core';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

import { GET_PRODUCTSTYPE } from '../../../graphql/getTypeProducts/getTypeProducts'


const TypeProduct = (productstype) => {

  return (
      <div className="productstype_mobile productstype">
      <div className="products container mobile-content my-3 my-sm-5">
        <div className="d-flex flex-nowrap justify-content-between">
          <div className="flex-grow-1 w-100">
            <div className="px-2 px-sm-0 mb-2"></div>
            <div className=" products__cards mb-3 text-center pb-5 pt-5">
              {productstype.productstype.producttypes.map((producttype) => (
                
                  <Card key={producttype.id}>

                    <Typography component="h2">
                      {producttype.name}
                    </Typography>
                  </Card>
                
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    
   
  );
};

export async function getServerSideProps(context) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_PRODUCTSTYPE
  })


  return {
    props: {
      productstype: data
    }
  }
}



export default TypeProduct;