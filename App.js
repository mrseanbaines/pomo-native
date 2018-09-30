import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import arciform from './assets/fonts/arciform.ttf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6b81',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'arciform',
    fontSize: 64,
    color: '#fff',
    textAlign: 'center',
    margin: 10,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({ arciform });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    return (
      <View style={styles.container}>
        {fontLoaded ? (
          <Text style={styles.text}>
            pomo
          </Text>
        ) : null}
      </View>
    );
  }
}
