import * as React from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Albums from '../components/Feed/Albums/index.js';
import Posts from '../components/Feed/Posts';

const Tab = createMaterialTopTabNavigator();

export default function Feed() {
  return (
      <>
      <View style={{justifyContent: 'center', alignItems: 'center',backgroundColor:"#f0efef"}}>
        <Text style={{color:"#000", fontSize:20, marginTop:20, fontWeight: 'bold'}}>FEED</Text>
       </View>
    <Tab.Navigator   tabBarOptions={{
     //  activeTintColor: '#000',
       labelStyle: { fontSize: 15 },
      style: { backgroundColor: '#f0efef' },
  }}>
      <Tab.Screen name="Albums" component={Albums} options={{ tabBarLabel: 'Albums' }} />
      <Tab.Screen name="Posts" component={Posts} />
    </Tab.Navigator>
 
    </>
  );
}
