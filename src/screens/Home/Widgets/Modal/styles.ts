import styled from 'styled-components';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

export const Container = styled(KeyboardAvoidingView)`
  background-color: 'rgba(24,24,24, 0.6)';
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(View)`
  background-color: #fff;
  width: 85%;
  padding: 24px 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Title = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const ContentPassword = styled(Pressable)`
  background-color: #0e0e0e;
  width: 90%;
  padding: 14px 0;
  border-radius: 8px;
`;

export const PasswordValue = styled(Text)`
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

export const Footer = styled(View)`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18px;
`;

export const ButtonBack = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  padding: 12px 0;
`;

export const ButtonSave = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  background-color: #392de9;
  padding: 12px 0;
  border-radius: 8px;
`;

export const TitleButtonSave = styled(Text)`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: 600;
`;

export const TitleButtonBack = styled(Text)`
  font-size: 18px;
  color: #000;
  text-align: center;
  font-weight: 600;
`;

export const InputDescription = styled(TextInput)`
  height: 35px;
  border-bottom-width: 1px;
  border-color: #262626;
  width: 90%;
  border-radius: 6px;
  padding-left: 10px;
`;

export const LabelDescription = styled(Text)`
  width: 90%;
  font-size: 14px;
  color: #000;
  font-weight: bold;
  margin-top: 20px;
  padding-left: 8px;
`;

export default {
  Container,
  Content,
  Title,
  ContentPassword,
  PasswordValue,
  Footer,
  ButtonBack,
  ButtonSave,
  TitleButtonBack,
  TitleButtonSave,
  InputDescription,
  LabelDescription,
};
