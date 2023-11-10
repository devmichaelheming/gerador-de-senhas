import React, { useState } from 'react';
import S from './styles';
import * as Clipboard from 'expo-clipboard';
import useStorage from '~/hooks/useStorage';
import { Platform } from 'react-native';

interface ModalProps {
  value: string;
  handleClose: () => void;
  handleBack: () => void;
}

const Modal = ({ value, handleClose, handleBack }: ModalProps) => {
  const { saveItem } = useStorage();
  const [description, setDescription] = useState('');

  const handleCopyPassword = async () => {
    const payload = {
      description: description,
      password: value,
    };

    await Clipboard.setStringAsync(value);
    await saveItem('@pass', payload);

    alert('Senha salva com sucesso!');
    handleClose();
  };

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <S.Content>
        <S.Title>Senha gerada</S.Title>

        <S.ContentPassword onLongPress={handleCopyPassword}>
          <S.PasswordValue>{value}</S.PasswordValue>
        </S.ContentPassword>

        <S.LabelDescription>Descrição da senha:</S.LabelDescription>

        <S.InputDescription
          selectTextOnFocus
          placeholder="Informa a descrição da senha"
          placeholderTextColor="#ccc"
          onChangeText={(newValue: string) => {
            setDescription(newValue);
          }}
        />

        <S.Footer>
          <S.ButtonBack onPress={handleBack}>
            <S.TitleButtonBack>Voltar</S.TitleButtonBack>
          </S.ButtonBack>

          <S.ButtonSave onPress={handleCopyPassword}>
            <S.TitleButtonSave>Salvar senha</S.TitleButtonSave>
          </S.ButtonSave>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default Modal;
