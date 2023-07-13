import { ApolloClient, InMemoryCache } from '@apollo/client';
import {environment} from '../../../environment'

export function createApollo(): ApolloClient<any> {
  return new ApolloClient({
    uri: environment.apiUrl,
    cache: new InMemoryCache(),
  });
}