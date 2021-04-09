import React from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details({ album, setAlbumDetails }) {
  return (
    <View style={{flex:1,flexDirection:"row",  paddingVertical: 15,}} >
      
           
            <Image
            style={{width: 100, height: 100, borderRadius: 10, margin: 10}}
            source={{uri: album.photos.data[0].url}}
          />  
          <View>
              <Text> {album.title}</Text>  
              <Text> {album.user.name}</Text>   
                  <TouchableOpacity onPress={()=> setAlbumDetails(null)}   >
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="black"
            size={20}
          />     
      </TouchableOpacity> 
          </View>
     
        
          
       
    </View>
  );
}


