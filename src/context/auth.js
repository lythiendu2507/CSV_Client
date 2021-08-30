import { useState, useContext, createContext } from "react";
import cookies from 'js-cookie';

import { ApolloClient, InMemoryCache, ApolloProvider, useApolloClient, 
        defaultOptions, useQuery, HttpLink ,gql} 
from '@apollo/client'
import router, { useRouter } from 'next/router'



const authContext =createContext()




export function AuthProvider({children}){
    const auth = useProviderAuth()
    return <authContext.Provider value ={auth}>
        <ApolloProvider client={auth.createApolloClient()}>
     
        {children}
        
       
        
        </ApolloProvider>
    </authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}


function useProviderAuth(){
     const [authToken , setAuthToken] = useState(null)

     const getAuthHeaders = () =>{
         if(!authToken) return null

         return {
             authorization: `Bearer ${authToken}`
         }
     }

     function createApolloClient() {
        const link = new HttpLink({
          uri: 'http://localhost:4000/graphql',
          headers: getAuthHeaders(),
        }) 
      
        return new ApolloClient({
          link,
          cache: new InMemoryCache(),
        })
      }

    const signIn =  async ({email,password}) =>{
        const client = createApolloClient()
        const LoginMutation =gql` 
            mutation LoginMutation($email: String!,$password: String!){
                login(email: $email, password: $password){
                    token
                    id
                }
            }
            `
        const result = await client.mutate({
            mutation: LoginMutation,
            variables:{email, password}
        })

        if(result?.data?.login?.token)
        {
            setAuthToken(result.data.login.token)
            cookies.set('token', result.data.login.token)
            cookies.set('userId', result.data.login.id)
            router.push('/')
        }
    }

    return {
        createApolloClient,
        signIn,
    }
}
 