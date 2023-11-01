import React from 'react';

import S from './styles';

interface PasswordItemProps {
  data: string;
  removePassword: (id: string) => Promise<void>;
}

const PasswordItem = ({ data, removePassword }: PasswordItemProps) => {
  return (
    <S.Container onLongPress={() => removePassword(data)}>
      <S.Title>{data}</S.Title>
    </S.Container>
  );
};

export default PasswordItem;
