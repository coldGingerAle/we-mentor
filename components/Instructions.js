import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Instructions extends Component {
  static navigationOptions = {
    title: "Instructions",
    headerStyle: {
      backgroundColor: '#3498db',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }

  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    const { params } = this.props.navigation.state;
    const attribute = params ? params.attribute : null;

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={styles.container}
        >
        <Text style={styles.text}>Swipe up if you would like the attribute in your mentor.</Text>
        <Text style={styles.text}>Otherwise, swipe down.</Text>
        <Text style={styles.text}>Tap to connect.</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Attribute')} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    margin: 10
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
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    alignItems: 'center',
    width: 175,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 30
  },
})
