import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 45px;

  background: #242e42;
  border-radius: 8px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  line-height: 20px;
  text-align: center;

  font-size: 17px;
  font-weight: bold;
`;
