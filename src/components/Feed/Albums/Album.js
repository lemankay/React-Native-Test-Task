import {gql, useLazyQuery} from '@apollo/client';
import React from 'react'
import { View, Image, TouchableOpacity,Text,StyleSheet } from 'react-native';



export default function Album({title, albumId, clickCallback,user,photos}) {
    const [getAlbum] = useLazyQuery(GET_ALBUM, {
      variables: { id: albumId },
      onCompleted({ album }) {
        clickCallback(album);
      },
    })
    return (
        <TouchableOpacity onPress={()=> getAlbum()} >
          <View style={styles.rowFront}>
               <Image
            style={{width: 50, height: 50, borderRadius: 10, margin: 10}}
            source={{uri: photos.data[0].url}}
          />  
          <View>
                 <Text> {albumId}</Text>
                 <Text> {title}</Text>
                <Text> {user.name}</Text>
          </View>


     
          </View>
      
     
        </TouchableOpacity>
    )
}
const GET_ALBUM = gql`
  query($id:ID!){
    album(id:$id) {
          id
         title
         user{
           name
         }
         photos {
           data {
             url
           }
         }
    }
  }
`;

const styles = StyleSheet.create({
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
  iconStyle: {
    paddingTop: 2,
    fontSize: 25,
    marginRight: 1,
  },
  rowFront: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
   // justifyContent: 'center',
    height: 80,
},
});
