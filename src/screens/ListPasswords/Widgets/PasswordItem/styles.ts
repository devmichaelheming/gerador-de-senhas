import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  background-color: #0e0e0e;
  padding: 14px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  color: #fff;
`;

export const RemoveContent = styled(TouchableOpacity)`
  color: #fff;
`;

export const Description = styled(Text)`
  color: #000;
  padding: 0 0px 8px 8px;
  font-size: 16px;
`;

export default {
  Container,
  Title,
  RemoveContent,
  Description,
};
