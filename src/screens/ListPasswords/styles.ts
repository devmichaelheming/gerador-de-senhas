import styled from 'styled-components';
import { View, Text, FlatList } from 'react-native';

export const Header = styled(View)`
  background-color: #392de9;
  padding: 58px 14px 14px 14px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Content = styled(View)`
  flex: 1;
  padding: 0 14px;
`;

export const List = styled(FlatList)`
  flex: 1;
  padding-top: 14px;
`;

export const EmptyContent = styled(View)`
  flex: 1;
  padding-top: 18px;
  align-items: center;
  justify-content: center;
`;

export const EmptyTitle = styled(Text)`
  font-size: 20px;
  color: #969696;
`;

export default {
  Header,
  Title,
  Content,
  List,
  EmptyContent,
  EmptyTitle,
};
