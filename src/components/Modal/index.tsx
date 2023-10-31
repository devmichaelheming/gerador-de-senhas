import React, { FC, ReactElement } from 'react';
import { Text } from 'react-native';
// import S from "./styles";

interface ModalProps {
  value: string;
}

const Modal = ({ value }: ModalProps) => {
  return (
    // <S.Container>
    <Text>{value}</Text>
    // </S.Container>
  );
};

export default Modal;
