import React,{createContext, useState} from 'react';



export const ProductType = createContext()

const ProductType = (productstype) => {
    const [ProductType, setProductType] = useState({productstype})
    return (
        <div>
            
        </div>
    )
}

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

export default ProductType

