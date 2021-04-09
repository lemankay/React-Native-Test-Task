import * as React from 'react';
import { Text,TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Faq({navigation}) {
    return(
    
      <View style={{ flex: 1 }}>
         <TouchableOpacity   onPress={() => {navigation.navigate('Authorization_Issues')}}> 
             <View style={{ flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }} >
                 <Text style={{ fontSize: 20,margin:20 }} >Authorization issues</Text>
                <MaterialCommunityIcons style={{ marginRight:20 }} name="chevron-right" color="#000" size={20} />        
             </View>
         </TouchableOpacity>  

           <TouchableOpacity  onPress={() => {navigation.navigate('The_first_steps')}} >
             <View style={{ flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }} >
             <Text style={{ fontSize: 20,margin:20 }} >The first steps</Text>
             <MaterialCommunityIcons style={{ marginRight:20 }} name="chevron-right" color="#000" size={20} />
             </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => {navigation.navigate('Payment')}} >
            <View style={{ flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }} >
             <Text style={{ fontSize: 20,margin:20 }} >Payment</Text>
             <MaterialCommunityIcons style={{ marginRight:20 }} name="chevron-right" color="#000" size={20} />
             </View>
           </TouchableOpacity>
        </View>
       
    )
    
  }
 export default Faq;