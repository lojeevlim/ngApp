import { ApolloClient, InMemoryCache } from '@apollo/client';
import {environment} from '../../../environment'
import { ApolloClientOptions } from '@apollo/client';

// Define the createApollo function to return ApolloClientOptions<any>
export const createApollo = (): ApolloClientOptions<any> => {
  return {
    uri: environment.apiUrl,
    cache: new InMemoryCache(),
    connectToDevTools: true,  // Optional, enables Apollo DevTools
  };
};
