import styled from 'styled-components/native';
import { View, Image as ImageLogo, Text, TouchableOpacity } from 'react-native';
import { OptionsFeedbackSecurityProps } from './Model';

export const Container = styled(View)`
  flex: 1;
  background-color: #f3f3ff;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(ImageLogo)`
  margin-bottom: 35px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Area = styled(View)`
  margin: 14px 0;
  width: 80%;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #392de9;
  width: 80%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 18px;
`;

export const TitleButton = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`;

export const TitleCheck = styled(Text)`
  font-weight: 600;
  font-size: 16px;
  color: #262626;
  padding-bottom: 8px;
`;

export const ContentCheckBox = styled(View)`
  width: 80%;
  padding: 14px 0 22px 0;
`;

export const FeedbackSecurity = styled(View)<OptionsFeedbackSecurityProps>`
  width: 80%;
  background-color: ${({ color }) => color};
  padding: 6px 0px;
  border-radius: 4px;
  align-items: center;
`;

export const TextFeedback = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export default {
  Container,
  Image,
  Title,
  Area,
  TitleButton,
  Button,
  TitleCheck,
  ContentCheckBox,
  FeedbackSecurity,
  TextFeedback,
};
