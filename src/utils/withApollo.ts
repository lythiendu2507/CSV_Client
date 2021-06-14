import {ApolloClient, InMemoryCache, DefaultOptions} from '@apollo/client'
import {onError} from '@apollo/client/link/error';
import {withApollo} from 'next-apollo'

const defaultOptions :DefaultOptions = {
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
    }

}

const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions

  })

export default withApollo(apolloClient)