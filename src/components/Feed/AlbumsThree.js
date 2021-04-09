import React from 'react';
import { Button} from 'react-native-paper';
import {
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { graphql } from '@apollo/client/react/hoc';
import {gql} from '@apollo/client';
import {ListItem} from 'react-native-elements';

const Albums = graphql(
  gql`
    query($page: Int, $limit: Int) {
      albums(options: {paginate: {page: $page, limit: $limit}}) {
        data {
              user {
                name
              }
              photos {
                data {
                  id
                  title
                  thumbnailUrl
                }
              }
                meta {
              totalCount
            } 
        } 
      }
    }
  `,
    {
      options: () => ({
        notifyOnNetworkStatusChange: true,
        variables: {
          page: 1,
          limit: 1,
        },
      }),
    },
  
)(FeedList);
 export default Albums;
/********************************************* */
function FeedList({data}) {
  // if (data.networkStatus === 1) {
  //   return <ActivityIndicator style={styles.loading} />;
  // }
  // if (data.error) {
  //   return <Text>Error: {data.error.message}</Text>;
  // }

  return (
    <>
    <Button
    style={{paddingVertical:8,marginVertical:20,marginHorizontal:20}}
    icon="camera"
    mode="contained">
    Add album
</Button>
    <FlatList
      data={data.albums}
      // refreshing={data.networkStatus === 4}
      // onRefresh={() => data.refetch()}
      // onEndReachedThreshold={0.5}
      onEndReached={() => {
        data.fetchMore({
          variables: {page: data.albums.length + 1},
          updateQuery: (previousResult, {fetchMoreResult}) => {
            if (!fetchMoreResult || fetchMoreResult.albums.length === 0) {
              return previousResult;
            }
            return {
              albums: previousResult.albums.concat(fetchMoreResult.albums,
              ),
            };
          },
        });
      }}
      renderItem={({item}) => {
        return (
          item.data.photos.data.map(elem=>{     
            return(
              <View key={elem.id} style={styles.containerPagination}>
                  <Image
                        style={{width:100,height:100,borderRadius:50,marginRight:15}}
                        source={{uri:elem.thumbnailUrl }}
                    />
                  <View>
                     <Text style={{fontSize:18}}> {item.data.user.name}</Text>
                     <Text style={{fontSize:18}}>{elem.id}</Text>
                     <Text style={{fontSize:18}}>{elem.title}</Text>
                  </View>  
             </View>
                    
       )}
     )
          
        );
      }}
    />
    </>
  );
}
/********************************************** */


const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 20,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#1c1717',
  },
  loading: {
    margin: 50,
  },
  fullApp: {
    margin: 20,
    textAlign: 'center',
  },
  containerPagination: {
    flex:1,
    flexDirection: 'row',
    paddingVertical:15,
  },
});
