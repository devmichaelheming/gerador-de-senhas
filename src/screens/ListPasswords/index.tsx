import React, { FC, ReactElement, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '~/hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';

import S from './styles';
import PasswordItem from './Widgets/PasswordItem';

const ListPasswordsPage: FC = (): ReactElement => {
  const { getItem, removeItem } = useStorage();
  const [listPasswords, setListPasswords] = useState<Array<string>>([]);
  const focused = useIsFocused();

  const handleDeletePassword = async (id: string) => {
    const passwords = await removeItem('@pass', id);

    setListPasswords(passwords);
  };

  useEffect(() => {
    const renderPasswords = async () => {
      const renderList: Array<string> = await getItem('@pass');

      setListPasswords(renderList);
    };

    renderPasswords();
  }, [focused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Header>
        <S.Title>Minhas senhas</S.Title>
      </S.Header>

      <S.Content>
        <S.List
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
            />
          )}
        />
      </S.Content>
    </SafeAreaView>
  );
};

export default ListPasswordsPage;
