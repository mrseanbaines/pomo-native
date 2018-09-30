import React from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';
import styled from 'styled-components';
import arciform from './assets/fonts/arciform.ttf';

const Container = styled(View)`
  flex: 1;
  background-color: #ff6b81;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)`
  font-family: arciform;
  font-size: 64px;
  color: #fff;
  text-align: center;
  margin: 10px;
`;

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
      <Container>
        {fontLoaded ? (
          <StyledText>
            pomo
          </StyledText>
        ) : null}
      </Container>
    );
  }
}
