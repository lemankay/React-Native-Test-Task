// Read the blog post for the full explanation!
// https://dev-blog.apollodata.com/loading-data-into-react-natives-flatlist-9646fa9a199b

// Attach initial data to the Feed component with a GraphQL query
// We're using the GitHunt example app server here: http://api.githunt.com/
const PAGE_SIZE = 20;

const FeedWithData = graphql(
  gql`
    query Feed($pageSize: Int!, $offset: Int!) {
      feed (type: TOP, limit: $pageSize, offset: $offset) {
        repository {
          name
          owner { login }
          stargazers_count
        }
    
        postedBy { login }
      }
    }
  `,
  {
    options: {
      notifyOnNetworkStatusChange: true,
      variables: { offset: 0, pageSize: PAGE_SIZE },
    },
  }
)(Feed);

function FeedList({ data }) {
  if (data.networkStatus === 1) {
    return <ActivityIndicator style={styles.loading} />;
  }

  if (data.error) {
    return <Text>Error: {data.error.message}</Text>;
  }

  return (
    <FlatList
      data={data.feed}
      refreshing={data.networkStatus === 4}
      onRefresh={() => data.refetch()}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        // The fetchMore method is used to load new data and add it
        // to the original query we used to populate the list
        data.fetchMore({
          variables: { offset: data.feed.length + 1 },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            // Don't do anything if there weren't any new items
            if (!fetchMoreResult || fetchMoreResult.feed.length === 0) {
              return previousResult;
            }

            return {
              // Concatenate the new feed results after the old ones
              feed: previousResult.feed.concat(fetchMoreResult.feed),
            };
          },
        });
      }}
      renderItem={({ item }) => {
        const badge = {
          value: `☆ ${item.repository.stargazers_count}`,
          badgeContainerStyle: { right: 10, backgroundColor: '#56579B' },
          badgeTextStyle: { fontSize: 12 },
        };

        return (
          <ListItem
            hideChevron
            title={`${item.repository.owner.login}/${item.repository.name}`}
            subtitle={`Posted by ${item.postedBy.login}`}
            badge={badge}
            containerStyle={{ backgroundColor: 'white' }}
          />
        );
      }}
    />
  );
}



function Feed({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHunt FlatList</Text>
      <FeedList data={data} />
      <Text style={styles.fullApp}>See the full app at www.githunt.com</Text>
    </View>
  );
}

export default App = () => {
 const createClient =() =>{
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
        uri: 'http://api.githunt.com/graphql',
        cache: new InMemoryCache(),
 
    });
  }

 
    return (
      <ApolloProvider client={createClient()}>
        <FeedWithData />
      </ApolloProvider>
    );
  
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 20,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#eee',
  },
  loading: {
    margin: 50,
  },
  fullApp: {
    margin: 20,
    textAlign: 'center',
  },
});

// Imports at the bottom so we don't get distracted with them
import React from 'react';

import {
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';


import { graphql } from '@apollo/client/react/hoc';
import {  gql,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  } from '@apollo/client';


import { ListItem } from 'react-native-elements'; // 0.18.5
