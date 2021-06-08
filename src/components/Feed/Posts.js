import React from 'react';
import {useQuery, gql} from '@apollo/client';
import { Button} from 'react-native-paper';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  //ActivityIndicator,
} from 'react-native';


export default function Posts() {
`
  {
    posts{
  data{
    id
    user{
      id
      name
    }
    title
  }
}
  }
`;


