import React from 'react';
import { ListPasswordsProps } from '~/screens/Home/Model';
import S from './styles';

interface ModalProps {
  value: ListPasswordsProps;
  handleClose: () => void;
  handleDeletePassword: () => void;
}

const Modal = ({ value, handleClose, handleDeletePassword }: ModalProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Deseja realmente excluir a senha {value.description}?</S.Title>

        <S.Footer>
          <S.ButtonBack onPress={handleClose}>
            <S.TitleButtonBack>Não</S.TitleButtonBack>
          </S.ButtonBack>

          <S.ButtonSave onPress={() => handleDeletePassword()}>
            <S.TitleButtonSave>Sim</S.TitleButtonSave>
          </S.ButtonSave>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default Modal;
