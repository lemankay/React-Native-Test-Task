
import { useMutation, gql } from "@apollo/client";

import React, { useState } from "react";
import {Text, StyleSheet, View, TextInput} from 'react-native';

import {Button} from 'react-native-paper';

export default function CreateAlbum() {

  const [title, setTitle] = useState("");

  const [createAlbum] = useMutation(CREATE_ALBUM, {
    onCompleted(data) {
      console.log("creado", data);
    },
  });

  return (
  <>
    <TextInput 
      placeholder="Add Albums.."
      value={title}
      onChangeText={(textValue)=>setTitle(textValue)}
      />
    <Button onPress={()=>{
        createAlbum({ variables: { title: title, userId: 1 }, }); setTitle("");
       } 
      }        
      style={{paddingVertical: 8, marginVertical: 20, marginHorizontal: 20}}
      icon="camera"
      mode="contained">
      Add album
    </Button>  
</>

  );
}
const CREATE_ALBUM = gql`
mutation CreateAlbum($title:String!, $userId:ID!){
  createAlbum(input:{title: $title, userId: $userId}){
    id
    title
  }
}
`