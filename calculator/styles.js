import  styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000;
  flex: 1;
`;

export const Calc = styled.Text`
  color: #fff;
  font-size: 120px;
  text-align: right;
  margin-top: 150px;
  margin-right: 30px;
  margin-bottom: 30px;
`;

export const AreaButton = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const GreyButton = styled.TouchableOpacity`
  background-color: #a5a5a5;
  margin-left: 20px;
  width: 78px;
  height: 78px;
  border-radius: 100px;
  justify-content: center;
`;

export const OrangeButton = styled.TouchableOpacity`
  background-color: #FE9E09;
  margin-left: 20px;
  width: 78px;
  height: 78px;
  border-radius: 100px;
  justify-content: center;
`;

export const DarkButton = styled.TouchableOpacity`
  background-color: #333333;
  margin-left: 20px;
  width: 78px;
  height: 78px;
  border-radius: 100px;
  justify-content: center;
`;

export const LargeButton = styled.TouchableOpacity`
  background-color: #333333;
  margin-left: 20px;
  padding-left: 33px;
  width: 176px;
  height: 78px;
  border-radius: 100px;
  justify-content: center;
  align-items: flex-start;
`;

export const WhiteText = styled.Text`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  color: #fff;
`;

export const DarkText = styled.Text`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`;