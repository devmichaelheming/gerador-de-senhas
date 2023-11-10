import Slider from '@react-native-community/slider';
import { useState, useEffect } from 'react';
import ModalContent from '~/screens/Home/Widgets/Modal';
import { Modal } from 'react-native';

import S from './styles';
import CheckBox, { CheckBoxOptionProps } from '~/components/CheckBox';
import { OptionsFeedbackSecurityProps } from './Model';

const optionsCharacters: CheckBoxOptionProps[] = [
  {
    value: 1,
    label: 'ABC',
  },
  {
    value: 2,
    label: 'abc',
  },
  {
    value: 3,
    label: '123',
  },
  {
    value: 4,
    label: '#*&',
  },
];

const optionsFeedbackSecurity: OptionsFeedbackSecurityProps[] = [
  {
    id: 1,
    title: 'FRACA',
    color: '#f5203e',
  },
  {
    id: 2,
    title: 'BOA',
    color: '#f1c80b',
  },
  {
    id: 3,
    title: 'FORTE',
    color: '#43ed9c',
  },
  {
    id: 4,
    title: 'MUITO FORTE',
    color: '#11aa19',
  },
];

export default function Home() {
  const [size, setSize] = useState(8);
  const [password, setPassword] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [selected, setSelected] = useState<Array<CheckBoxOptionProps>>([
    {
      value: 1,
      label: 'ABC',
    },
  ]);
  const [feedbackSecurityPassword, setFeedbackSecurityPassword] = useState(
    {} as OptionsFeedbackSecurityProps
  );

  const handleGeneratePassword = () => {
    let charsetToUse = '';

    // Verifica as opções selecionadas e adiciona os caracteres correspondentes ao charsetToUse
    if (selected.some((option) => option.label === 'ABC')) {
      charsetToUse += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (selected.some((option) => option.label === 'abc')) {
      charsetToUse += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (selected.some((option) => option.label === '123')) {
      charsetToUse += '1234567890';
    }
    if (selected.some((option) => option.label === '#*&')) {
      charsetToUse += '!@#$%^&*()-_+=<>?/[]{}|,.;:';
    }

    if (charsetToUse === '') {
      // Se nenhuma opção estiver selecionada, use o charset padrão
      charsetToUse =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    }

    let passwordGenerate = '';

    for (let i = 0, n = charsetToUse.length; i < size; i++) {
      passwordGenerate += charsetToUse.charAt(Math.floor(Math.random() * n));
    }

    setPassword(passwordGenerate);
    setIsModal(true);
  };

  const handleBack = () => {
    setIsModal(false);
    setPassword('');
  };

  const handleClose = () => {
    setIsModal(false);
    setPassword('');
    setSize(8);
    setSelected([
      {
        value: 1,
        label: 'ABC',
      },
    ]);
  };

  useEffect(() => {
    if (size === 6) {
      setFeedbackSecurityPassword(optionsFeedbackSecurity[0]);
    }

    if (size >= 8) {
      setFeedbackSecurityPassword(optionsFeedbackSecurity[1]);
    }

    if (size >= 10) {
      setFeedbackSecurityPassword(optionsFeedbackSecurity[2]);
    }

    if (size >= 12) {
      setFeedbackSecurityPassword(optionsFeedbackSecurity[3]);
    }
  }, [size]);

  return (
    <S.Container>
      <S.Image source={require('../../assets/logo.png')} />

      <S.Title>{size} Caracteres</S.Title>

      <S.Area>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ccc"
          minimumTrackTintColor="#392DE9"
          thumbTintColor="#f39c37"
          value={size}
          onValueChange={(e) => setSize(Number(e.toFixed(0)))}
        />
      </S.Area>

      <S.FeedbackSecurity {...feedbackSecurityPassword}>
        <S.TextFeedback>{feedbackSecurityPassword.title}</S.TextFeedback>
      </S.FeedbackSecurity>

      <S.ContentCheckBox>
        <S.TitleCheck>Caracteres utilizados:</S.TitleCheck>

        <CheckBox
          options={optionsCharacters}
          value={selected}
          setValue={setSelected}
          multiple
        />
      </S.ContentCheckBox>

      <S.Button onPress={handleGeneratePassword}>
        <S.TitleButton>Gerar senha</S.TitleButton>
      </S.Button>

      <Modal visible={isModal} animationType="fade" transparent>
        <ModalContent
          value={password}
          handleClose={handleClose}
          handleBack={handleBack}
        />
      </Modal>
    </S.Container>
  );
}
