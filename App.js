import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
    state = {
      fontLoaded: false
    };

  async componentDidMount() {
    await Font.loadAsync({
      'arciform': require('./assets/fonts/arciform.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
  {
    this.state.fontLoaded ? (
      <Text style={styles.text}>
        pomo
      </Text>
    ) : null
  }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6b81',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "arciform",
    fontSize: 64,
    color: '#fff',
    textAlign: "center",
    margin: 10
  },
});
