import React from 'react';
import { Text, StatusBar } from 'react-native';
import {Container, Calc, AreaButton, GreyButton} from './styles';

const App = () => {
  return (
    <Container>
      <StatusBar backgroundColor={"#000"} />
      <Calc>0</Calc>
      <AreaButton>
        <GreyButton>
          <Text>AC</Text>
        </GreyButton>
        <GreyButton>
          <Text>AC</Text>
        </GreyButton>
        <GreyButton>
          <Text>AC</Text>
        </GreyButton>
      </AreaButton>
    </Container>
  );
};

export default App;