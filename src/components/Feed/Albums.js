import React, {useState, useEffect} from 'react';
import {useQuery, gql, useLazyQuery} from '@apollo/client';
import {Button} from 'react-native-paper';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator ,
  Animated
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);


/*************************************************** */
function FeedData({data,onLoadMore}) {

  const [isLoading, setIsLoading] = useState(false);

  const ItemSeparator = () => (
    <View
      style={{
        height: 4,
        backgroundColor: '#544545',
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );
  class Album extends React.PureComponent {
    render() {  
      return (
         this.props.item.photos.data.map((elem) => {
      return (
        <View key={elem.id} style={styles.containerPagination}>
         {/* <Image
            style={{width: 30, height: 30, borderRadius: 10, marginRight: 15}}
            source={{uri: elem.thumbnailUrl}}
          />    */}
          <View>
             {/* <Text style={{fontSize: 18}}> {this.props.item.user.name}</Text>   */}
            <Text style={{fontSize: 18}}>{elem.id}</Text>
             {/* <Text style={{fontSize: 18}}>{elem.title}</Text>   */}
          </View>
        </View>
      );
    })    
    ) 
  }
  }
 class PanGesture extends React.Component {
  // renderLeftActions = (progress, dragX) => {
  //   const trans = dragX.interpolate({
  //     inputRange: [0, 50, 100, 101],
  //     outputRange: [-20, 0, 0, 1],
  //   });
  //   return (
  //     <RectButton style={styles.leftAction} onPress={this.close}>
  //       <Animated.Text
  //         style={[
  //           styles.actionText,
  //           {
  //             transform: [{ translateX: trans }],
  //           },
  //         ]}>
  //         Archive
  //       </Animated.Text>
  //     </RectButton>
  //   );
  // };
  
  //   updateRef = ref => {
  //     this._swipeableRow = ref;
  //   };
  //   close = () => {
  //     this._swipeableRow.close();
  //   };
    render() {
      return (
        <SwipeListView
        data={data}
        renderItem={ (data, rowMap) => <Album  item={this.props.item}/> }
        renderHiddenItem={ (data, rowMap) => (
         <View style={styles.rowBack}>
             <Text>Left</Text>
             <Text>Right</Text>
         </View>
     )}
     leftOpenValue={75}
     rightOpenValue={-75}
        /> 
        // <Swipeable
        // ref={this.updateRef}
        // friction={2}
        // leftThreshold={30}
        // renderLeftActions={this.renderLeftActions}>
        // <Album  item={this.props.item}/>
        // </Swipeable>
      );
    }
}
  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };


  const handleLoadMore = () => {
    console.log("handleLoadMore");  
    onLoadMore();
    setIsLoading(true)

  };
  const getItemLayout = (data, index) => {
    return (
      {
        length: 20,
        offset: 50 * index,
        index
      }    
    );
  }
  return (
    <SafeAreaView style={styles.contact}>
      <Button               
        style={{paddingVertical: 8, marginVertical: 20, marginHorizontal: 20}}
        icon="camera"
        mode="contained">
        Add album
      </Button>    
   
         <FlatList
           ItemSeparatorComponent={ItemSeparator}
         data={data}
         refreshing={data.networkStatus === 4}
         onRefresh={() => data.refetch()}
         getItemLayout={(data, index) => getItemLayout(data, index)}
   
        renderItem={ ({item})=><PanGesture item={item} />}
         keyExtractor={(item,index) => index.toString()}
         ListFooterComponent={renderFooter}
         onEndReachedThreshold={0.5}
         onEndReached={handleLoadMore}
    
       
         
       />   
    </SafeAreaView>
  );
}

export default function Albums() {
  const {loading, data, fetchMore} = useQuery(GET_ALL_ALBUMS,{
       variables:{
    options:{
      paginate:{
        page:0,
        limit:1,
      }
    }
  },
  notifyOnNetworkStatusChange: true,
  } 
    );
   const onLoadMore=() => {
    fetchMore({
      variables:{
        options:{
          paginate:{
            page:1,
            limit:1,
          }
        }
      },
    updateQuery: (previousResult, { fetchMoreResult, variables }) => {
      return {
        ...previousResult,
         data: [...previousResult.data, ...fetchMoreResult.data],
      };
    },
    
   })
  } 
  if (loading) return <View><Text>Loading...</Text></View>;

  return (
    <FeedData
       data={data.albums.data }
       onLoadMore={onLoadMore}
    />
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

});
const GET_ALL_ALBUMS = gql`
  query($options:PageQueryOptions){
    albums(options:$options) {
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
      }
    }
  }
`;

