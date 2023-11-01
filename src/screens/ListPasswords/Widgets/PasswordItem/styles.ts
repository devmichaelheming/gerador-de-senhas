import styled from 'styled-components';
import { Pressable, Text } from 'react-native';

export const Container = styled(Pressable)`
  background-color: #0e0e0e;
  padding: 14px;
  width: 100%;
  margin-bottom: 14px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  color: #fff;
`;

export default {
  Container,
  Title,
};
