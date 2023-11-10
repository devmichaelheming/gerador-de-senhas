import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  row-gap: 8px;
`;

export const OptionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Touchable = styled(TouchableOpacity)`
  height: 26px;
  width: 26px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #000;
`;

export const OptionText = styled(Text)`
  margin-left: 12px;
  font-size: 18px;
  color: #555;
`;

export default {
  Container,
  OptionContainer,
  Touchable,
  OptionText,
};
