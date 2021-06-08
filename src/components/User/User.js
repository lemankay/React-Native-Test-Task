import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {Text, View,Image,StyleSheet,} from 'react-native';

export default function User() {


}
const styles = StyleSheet.create({
    contact: {
      flex:1,
      flexDirection: 'column',
      flexShrink: 2,
      justifyContent: 'space-around',
      marginTop: 1,
      padding: 10,
      marginBottom: 5,
    },
    containerPagination: {
      flex:1,
      flexDirection: 'column',
      paddingVertical:15,
    },
    h1: {
      fontFamily: 'AvenirNext-DemiBold',
      fontSize: 18,
      alignSelf: 'center',
      textAlign: 'center',
      color: '#000',
    },
  });
const GET_USER = gql`
  {
    user(id: 1) {
    id
    username
    email
    website
    company{
      name
    }
    phone
    address {
     city
    }
    albums{
      data{
          title
        photos{
          data{
            thumbnailUrl
          }
        }
      }
    }
  }
  }
`;


