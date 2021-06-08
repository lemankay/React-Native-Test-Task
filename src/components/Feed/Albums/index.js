import React, {useState,useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';
import {Button} from 'react-native-paper';
import {Text, View, StyleSheet, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Album from './Album';
import Details from './Details';
import { TextInput } from 'react-native';
import CreateAlbum from './CreateAlbum';


export default function Albums() {
  


  return (
       <View >
 
            />  
    </View>

  
  );
}   
const GET_ALBUMS = gql`
  query($options:PageQueryOptions) {
    albums(options:$options) {
      data {
        id
        title
        user{
          name
        }
        photos{
          data{
            url
          }
        }
      }
    }
  }
`;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
},
  contact: {
    flexDirection: 'column',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginTop: 1,
    padding: 10,
    marginBottom: 5,
  },
  containerPagination: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000',
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10
  },
  backTextWhite: {
    color: '#FFF',
},
rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
},
rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
},
backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
},
backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
},
backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
},
});
