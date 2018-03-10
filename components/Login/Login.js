import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginForm from './LoginForm';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#3498db',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./logo.png')}
            style={styles.logo}
            />
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigation={this.props.navigation} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 50
  },
  title: {
    color: "#FFF",
    marginTop: 10,
    opacity: 0.9
  },
  formContainer: {
    marginBottom: 70
  }
})
