/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import BaseInput, { BaseInputProps } from './BaseInput';
import { TextInput } from 'react-native-paper';

interface Props extends BaseInputProps {}

const EmailInput: React.FC<Props> = ({
  placeholder,
  value,
  leftIcon,
  onChangeText,
  onBlur,
}) => {
  return (
    <BaseInput
      inputMode="email"
      placeholder={placeholder}
      value={value}
      leftIcon={leftIcon}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

EmailInput.defaultProps = {
  leftIcon: <TextInput.Icon icon="email" color="#9d9d9d" />,
  placeholder: 'Email',
};

export default EmailInput;
