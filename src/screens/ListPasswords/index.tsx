import React, { FC, ReactElement, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '~/hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';
import PasswordItem from './Widgets/PasswordItem';
import ModalConfirmation from './Widgets/ModalConfirmation';
import { Modal, View } from 'react-native';

import S from './styles';
import { ListPasswordsProps } from '../Home/Model';

const ListPasswordsPage: FC = (): ReactElement => {
  const { getItem, removeItem } = useStorage();
  const focused = useIsFocused();
  const [listPasswords, setListPasswords] = useState<Array<ListPasswordsProps>>(
    []
  );
  const [passwordDelete, setPasswordDelete] = useState('');

  const handleDeletePassword = async () => {
    if (passwordDelete !== '') {
      const passwords = await removeItem('@pass', passwordDelete);

      setListPasswords(passwords);
      handleClose();
    }
  };

  const handleClose = () => {
    setPasswordDelete('');
  };

  useEffect(() => {
    const renderPasswords = async () => {
      const renderList: Array<ListPasswordsProps> = await getItem('@pass');

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
        {listPasswords.length > 0 ? (
          <S.List
            data={listPasswords}
            keyExtractor={(item) => String(item.password)}
            renderItem={({ item }) => (
              <>
                <PasswordItem
                  data={item}
                  setPasswordDelete={setPasswordDelete}
                />

                <Modal
                  visible={passwordDelete !== ''}
                  animationType="fade"
                  transparent
                >
                  <ModalConfirmation
                    handleClose={handleClose}
                    value={item}
                    handleDeletePassword={() => handleDeletePassword()}
                  />
                </Modal>
              </>
            )}
          />
        ) : (
          <S.EmptyContent>
            <S.EmptyTitle>Não há senhas no momento.</S.EmptyTitle>
          </S.EmptyContent>
        )}
      </S.Content>
    </SafeAreaView>
  );
};

export default ListPasswordsPage;
