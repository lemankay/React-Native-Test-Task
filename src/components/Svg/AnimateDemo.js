import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Easing } from 'react-native'

export default class AnimateDemo extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{
              rotate: this.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
              })
            }]
          }}
        //  source={require('./reactjs.png')}
        />
      </View>
    )
  }
}
