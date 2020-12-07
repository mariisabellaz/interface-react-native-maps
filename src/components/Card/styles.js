import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 0;

  border-radius: 8px;
  background-color: #fff;
  padding-bottom: ${19 + getBottomSpace()}px;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  height: 68px;

  align-items: center;
  justify-content: space-between;

  padding: 14px 16px;
  background: #f7f7f7;

  border-bottom-width: 1px;
  border-top-width: 0;
  border-bottom-color: #efeff4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  flex-direction: column;
  margin: 0 14px;
`;

export const Thumbnail = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;

  resize-mode: contain;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: left;

  line-height: 20px;
  color: #242e42;
`;

export const Rating = styled.Text`
  font-size: 15px;
  text-align: left;

  line-height: 18px;
  margin-left: 5px;
  color: #c8c7cc;
`;

export const BubbleButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.last ? 22 : 0)}px;

  background-color: ${(props) =>
    props.type === 'message' ? '#4252ff' : '#4ce5b1'};
`;

export const Wrapper = styled.View`
  padding: 14px 16px;
  flex: 1;
`;

export const CarRequest = styled.View`
  flex-direction: row;
  margin: 15px 0 24px;

  justify-content: space-around;
  align-items: center;
`;

export const DescriptionItems = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const AddressInformation = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #efeff4;

  padding-bottom: 24px;
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  text-align: center;
  text-transform: uppercase;

  line-height: 16px;
  margin-bottom: 5px;
  color: #c8c7cc;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;

  line-height: 18px;
  color: #242e42;
`;

export const Location = styled.Text`
  font-size: 17px;
  text-align: left;
  text-transform: capitalize;

  line-height: 20px;
  margin-left: 14px;
  color: #242e42;
`;

export const LocationWrapper = styled.View`
  justify-content: flex-start;
  align-items: center;

  flex-direction: row;
`;

export const Line = styled.View`
  border: 0.7px solid #efeff4;
  flex: 1;
  margin-left: 14px;
`;
