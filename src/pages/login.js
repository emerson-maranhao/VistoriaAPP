import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import EdtUsername from '../components/login/EdtUsername';
import EdtPassword from '../components/login/EdtPassword';
import BtnLogin from '../components/login/BtnLogin';

const Login = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.materialMessageTextboxStack}>
      <EdtUsername style={styles.materialMessageTextbox} />
      <EdtPassword style={styles.materialMessageTextbox1} />
    </View>
    <BtnLogin
      style={styles.materialButtonViolet}
      onPress={() => navigation.navigate('Home')}
    />
    <StatusBar
      animated={false}
      hidden={false}
      backgroundColor="rgba(63,81,181,1)"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  materialMessageTextbox: {
    top: 0,
    left: 1,
    height: 86,
    position: 'absolute',
    right: 1,
  },
  materialMessageTextbox1: {
    top: 85,
    left: 0,
    height: 86,
    position: 'absolute',
    right: 0,
  },
  materialMessageTextboxStack: {
    height: 171,
    marginTop: 239,
    marginLeft: 15,
    marginRight: 13,
  },
  materialButtonViolet: {
    height: 43,
    borderRadius: 46,
    marginTop: 32,
    marginLeft: 73,
    marginRight: 73,
  },
});

Login.navigationOptions = {
  title: 'Login',
};

export default Login;
