// @flow

import React, { Component } from 'react';
import {
  Modal,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import type Route from './Route';

import ExampleCalculator from './ExampleCalculator';
import ExampleTouch from './ExampleTouch';
import ExampleComplexView from './ExampleComplexView';

type Props = {
  navigator: typeof Navigator,
  route: Route,
}

type State = {
  modalVisible: boolean,
}

export default class Home extends Component <void, Props, State> {
  props: Props;

  state: State = {
    modalVisible: false,
  };

  static title(route: Route){
    return (
      <Text style={styles.title}>{route.title}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigator.push({ title: 'Calculator', component: ExampleCalculator})}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Example 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigator.push({ title: 'Touch', component: ExampleTouch})}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Example 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({modalVisible: true})}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Example 3</Text>
        </TouchableOpacity>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({modalVisible: false})}
        >
          <ExampleComplexView
            onPressExit={() => this.setState({modalVisible: false})}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 80,
  },
  button: {
    backgroundColor: 'lightgray',
    borderRadius: 6,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 40,
  }
});
