
import { useMutation, gql } from "@apollo/client";

import React, { useState } from "react";
import {Text, StyleSheet, View, TextInput} from 'react-native';


  return (
  <>

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
