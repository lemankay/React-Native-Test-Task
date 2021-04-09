import Svg, { Circle } from 'react-native-svg';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="40"
            stroke="#2162cc"
            strokeWidth="20"
            fill="none"
          />
        </Svg>
      </View>
    );
  }
}