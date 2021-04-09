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
  /************************************************************** */
  // const [dataPag, setDataPag] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [pageCurrent, setpageCurrent] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const {data, loading, error} = useQuery(GET_ALL_POSTS);

  if (loading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error :</Text></View>;

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setDataPag(dataPag.concat(data));
  //     }, 3000);
   
  //   setIsLoading(false);
  //   return () => {};
  // }, [pageCurrent]);

  const ItemSeparator = () => (
    <View
      style={{
        height: 0.3,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );
  const album = ({item}) => {
    return (
      <View key={item.id} style={styles.containerPagination}>
        <Text style={{fontSize:15,marginVertical:10}}>{item.user.name}</Text>
        <Text style={{fontSize:20}}>Title: </Text>
        <Text style={{fontSize:15,marginBottom:5}}>{item.title}</Text>      
      </View>
    );
  };
  // const renderFooter = () => {
  //   return isLoading ? (
  //     <View style={styles.loader}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   ) : null;
  // };
  // const handleLoadMore = () => {
  //   console.log('handleLoadMore');
  //   setpageCurrent(pageCurrent + 1);
  //   setIsLoading(true);
  // };
  return (
    <SafeAreaView style={styles.contact}>       
      <FlatList
        data={data.posts.data}
        renderItem={album}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item, index) => index.toString()}
     //   ListFooterComponent={renderFooter}
     //   onEndReached={handleLoadMore}
    //    onEndReachedThreshold={0}
      />
    </SafeAreaView>
  );
}
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
const GET_ALL_POSTS = gql`
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


