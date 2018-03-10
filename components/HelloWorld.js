import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class HelloWorld extends Component {
  static navigationOptions = {
    title: "Let's Begin!",
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
    this.props.navigation.navigate('Instructions')
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
        config={config}
        style={styles.container}
        >
        <Text style={styles.text}>Swipe up to start connecting!</Text>
        <Ionicons style={{marginTop: 200}}name="md-arrow-dropup-circle" size={100} color="white" />
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 170
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
