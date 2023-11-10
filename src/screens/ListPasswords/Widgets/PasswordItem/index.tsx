import React, { Dispatch, SetStateAction } from 'react';
import { Ionicons } from '@expo/vector-icons';

import S from './styles';
import { ListPasswordsProps } from '~/screens/Home/Model';
import { View } from 'react-native';
interface PasswordItemProps {
  data: ListPasswordsProps;
  setPasswordDelete: Dispatch<SetStateAction<string>>;
}

const PasswordItem = ({ data, setPasswordDelete }: PasswordItemProps) => {
  return (
    <View style={{ marginTop: 12 }}>
      <S.Description>{data?.description}</S.Description>

      <S.Container>
        <S.Title>{data?.password}</S.Title>

        <S.RemoveContent onPress={() => setPasswordDelete(data.password)}>
          <Ionicons size={24} color="#ffffffd4" name="close" />
        </S.RemoveContent>
      </S.Container>
    </View>
  );
};

export default PasswordItem;
