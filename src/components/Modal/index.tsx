import React from 'react';
import S from './styles';
import * as Clipboard from 'expo-clipboard';
import useStorage from '~/hooks/useStorage';

interface ModalProps {
  value: string;
  handleClose: () => void;
}

const Modal = ({ value, handleClose }: ModalProps) => {
  const { saveItem } = useStorage();

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(value);
    await saveItem('@pass', value);

    alert('Senha salva com sucesso!');
    handleClose();
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Senha gerada</S.Title>

        <S.ContentPassword onLongPress={handleCopyPassword}>
          <S.PasswordValue>{value}</S.PasswordValue>
        </S.ContentPassword>

        <S.Footer>
          <S.ButtonBack onPress={handleClose}>
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
