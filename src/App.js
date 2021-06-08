import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import { offsetLimitPagination,relayStylePagination } from "@apollo/client/utilities";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from './screens/Feed';
import FaqPage from './screens/FaqPage';
import UserPage from './screens/UserPage';


const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          data: offsetLimitPagination()
        },
      },
    },
  })

});





export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </ApolloProvider>
  );
}


