import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Attribute extends Component {
  static navigationOptions = {
    title: "Choose Attributes",
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
      infoArray: [
        "UI/UX",
        "Speaks Another Language",
        "Women",
        "Product Manager",
        "Artificial Intelligence",
        "In person meetings"
      ],
      flow: 0
    };
  }

  onSwipeUp(gestureState) {
    this.setState({flow: this.state.flow + 1});
  }

  onSwipeDown(gestureState) {
    this.setState({flow: this.state.flow + 1});
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
        <Text style={styles.text}>{this.state.infoArray[this.state.flow] || "Mentors pending."}</Text>
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
    padding: 20
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
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
