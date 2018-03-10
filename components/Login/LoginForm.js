import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text, KeyboardAvoidingView, StatusBar, Switch } from 'react-native';

export default class LoginForm extends Component {

  state = {
    switchValue: true
  }

  _handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
  }));

  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder="Username"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />
        <TextInput
          placeholder="Password"
          style={styles.input}
          returnKeyType="go"
          secureTextEntry
          ref={(input) => this.passwordInput = input}
          />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('HelloWorld')} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.switchContainer}>
          <Text style={{fontSize: 20}}>
            <Switch
              onValueChange={this._handleToggleSwitch}
              value={this.state.switchValue}
              style={{marginTop: 5}}
              onTintColor={'#f1c40f'}
            />
            <Text style={{marginLeft: 200, color: this.state.switchValue ? '#f1c40f' : 'white', fontWeight: this.state.switchValue ? '700' : '100'}}>  Remember</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    alignItems: 'center',
    width: 175,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 5
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 15
  },
  switchContainer: {
    alignItems: 'center',
    width: 200,
    margin: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  signUp: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 25
  }
})
