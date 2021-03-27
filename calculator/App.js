import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  Container, 
  Calc, 
  AreaButton, 
  GreyButton, 
  OrangeButton,
  DarkButton,
  LargeButton,
  WhiteText, 
  DarkText
} from './styles';

const App = () => {
  const [ num, setNum ] = useState("0");

  return (
    <Container>
      <StatusBar backgroundColor={"#000"} />
      <Calc>{num}</Calc>

      <AreaButton>
        <GreyButton onPress={() => {
          setNum(0);
        }}>
          <DarkText>AC</DarkText>
        </GreyButton>

        <GreyButton>
          <DarkText> +/- </DarkText>
        </GreyButton>

        <GreyButton>
          <DarkText>%</DarkText>
        </GreyButton>

        <OrangeButton>
          <WhiteText>/</WhiteText>
        </OrangeButton>
      </AreaButton>

      <AreaButton>
        <DarkButton>
          <WhiteText onPress={() => {
          setNum([num + '7']);
        }}>7</WhiteText>
        </DarkButton>

        <DarkButton>
          <WhiteText onPress={() => {
          setNum([num + '8']);
        }}>8</WhiteText>
        </DarkButton>

        <DarkButton>
          <WhiteText onPress={() => {
          setNum([num + '9']);
        }}>9</WhiteText>
        </DarkButton>

        <OrangeButton>
          <WhiteText>X</WhiteText>
        </OrangeButton>
      </AreaButton>

      <AreaButton>
        <DarkButton onPress={() => {
          setNum([num + '4']);
        }}>
          <WhiteText>4</WhiteText>
        </DarkButton>

        <DarkButton onPress={() => {
          setNum([num + '5']);
        }}>
          <WhiteText>5</WhiteText>
        </DarkButton>

        <DarkButton onPress={() => {
          setNum([num + '6']);
        }}>
          <WhiteText>6</WhiteText>
        </DarkButton>

        <OrangeButton>
          <WhiteText>-</WhiteText>
        </OrangeButton>
      </AreaButton>

      <AreaButton>
        <DarkButton onPress={() => {
          setNum([num + '1']);
        }}>
          <WhiteText>1</WhiteText>
        </DarkButton>

        <DarkButton onPress={() => {
          setNum([num + '2']);
        }}>
          <WhiteText>2</WhiteText>
        </DarkButton>

        <DarkButton onPress={() => {
          setNum([num + '3']);
        }}>
          <WhiteText>3</WhiteText>
        </DarkButton>

        <OrangeButton>
          <WhiteText>+</WhiteText>
        </OrangeButton>
      </AreaButton>

      <AreaButton>
        <LargeButton onPress={() => {
          setNum([num + '0']);
        }}>
          <WhiteText>0</WhiteText>
        </LargeButton>

        <DarkButton>
          <WhiteText>,</WhiteText>
        </DarkButton>

        <OrangeButton>
          <WhiteText>=</WhiteText>
        </OrangeButton>
      </AreaButton>
    </Container>
  );
};

export default App;