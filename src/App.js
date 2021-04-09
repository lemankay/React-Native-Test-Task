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


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Feed" tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="folder-multiple-image" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FaqPage"
        component={FaqPage}
        options={{
          tabBarLabel: 'Faq Page',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserPage"
        component={UserPage}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




export default function App() {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </ApolloProvider>
  );
}


