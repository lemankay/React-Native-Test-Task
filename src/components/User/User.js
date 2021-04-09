import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {Text, View,Image,StyleSheet,} from 'react-native';

export default function User() {

  const {data, loading, error} = useQuery(GET_USER);

  if (loading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error :</Text></View>;
  return (
<View style={styles.contact}>     
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:"#000", fontSize:20, marginTop:20}}>PROFILE</Text>
     </View>

       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
          <View  style={{marginVertical:5}}>
              <Text style={{fontSize:30,marginTop:5}}>{data.user.email}</Text>
              <Text style={{fontSize:20,marginBottom:5}}>{data.user.username}</Text> 
        </View>
     
                <Image
                    style={{width:100,height:100,borderRadius:50}}
                    source={{uri:"https://via.placeholder.com/150/92c952" }}
                />

       
   </View>
    
      
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
        <Text style={{fontSize:20,marginVertical:10}}>Email</Text>
        <Text style={{fontSize:15,marginBottom:5}}>{data.user.email}</Text> 
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,marginVertical:10}}>Website</Text>
        <Text style={{fontSize:15,marginBottom:5}}>{data.user.website}</Text> 
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,marginVertical:10}}>Company Name</Text>
        <Text style={{fontSize:15,marginBottom:5}}>{data.user.company.name}</Text> 
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,marginVertical:10}}>Phone</Text>
        <Text style={{fontSize:15,marginBottom:5}}>{data.user.phone}</Text> 
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:20,marginVertical:10}}>Address</Text>
        <Text style={{fontSize:15,marginBottom:5}}>{data.user.address.city}</Text> 
      </View> 
    </View>
  );
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


