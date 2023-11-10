import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import S from './styles';

export interface CheckBoxOptionProps {
  value: number;
  label: string;
}

interface CheckBoxProps {
  options: Array<CheckBoxOptionProps>;
  value: Array<CheckBoxOptionProps>;
  setValue: Dispatch<SetStateAction<Array<CheckBoxOptionProps>>>;
  multiple?: boolean;
}

const CheckBox = ({
  options,
  value,
  setValue,
  multiple = false,
}: CheckBoxProps) => {
  const handleToggle = (op: CheckBoxOptionProps) => {
    let index = value.findIndex((i) => i.value === op.value);
    let arraySelecteds: Array<CheckBoxOptionProps> = [...value];

    if (index !== -1) {
      arraySelecteds.splice(index, 1);
    } else {
      multiple ? arraySelecteds.push(op) : (arraySelecteds = [op]);
    }

    setValue(arraySelecteds);
  };

  useEffect(() => {}, [value]);

  return (
    <S.Container>
      {options.map((op) => (
        <S.OptionContainer key={op.value}>
          <S.Touchable
            onPress={() => handleToggle(op)}
            style={{
              backgroundColor:
                value.findIndex((i) => i.value === op.value) !== -1
                  ? '#000'
                  : '#FFF',
            }}
          >
            {value.findIndex((i) => i.value === op.value) !== -1 ? (
              <Entypo size={20} name="check" color={'#FFF'} />
            ) : null}
          </S.Touchable>

          <S.OptionText>{op.label}</S.OptionText>
        </S.OptionContainer>
      ))}
    </S.Container>
  );
};

export default CheckBox;
