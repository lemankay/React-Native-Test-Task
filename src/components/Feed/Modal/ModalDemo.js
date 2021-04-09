import React, {useState} from 'react';
import { Text, View, TextInput} from 'react-native';

const LoginForm = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Text> Login Form </Text>
      <View>
        <TextInput placeholder="Enter Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
    </View>
  );
};

export default LoginForm;

import React, { useState} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import LoginForm from './Login';

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Button title="Click here to login" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}>
        <View>
          <LoginForm />
          <View>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ModalDemo;