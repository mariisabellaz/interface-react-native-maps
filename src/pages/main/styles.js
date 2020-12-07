import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ios: 60, android: 40})};
  left: 20px;
  
  width: 50px;
  height: 50px;
  
  align-items: center;
  justify-content: center;
  
  background-color: #FFFFFF;
  border-width: 2px;
  border-color: #FFFFFF;
  border-radius: 25px;
`;
