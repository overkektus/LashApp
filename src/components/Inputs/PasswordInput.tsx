/* eslint-disable react/default-props-match-prop-types */
import React, { useState } from 'react';
import BaseInput, { BaseInputProps } from './BaseInput';
import { TextInput } from 'react-native-paper';

interface Props extends BaseInputProps {}

const PasswordInput: React.FC<Props> = ({
  placeholder,
  value,
  leftIcon,
  className,
  onChangeText,
  onBlur,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const handleEyePress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const eyeIcon = (
    <TextInput.Icon icon="eye" color="#9d9d9d" onPress={handleEyePress} />
  );

  const eyeOffIcon = (
    <TextInput.Icon icon="eye-off" color="#9d9d9d" onPress={handleEyePress} />
  );

  return (
    <BaseInput
      placeholder={placeholder}
      value={value}
      leftIcon={leftIcon}
      rightIcon={secureTextEntry ? eyeOffIcon : eyeIcon}
      secureTextEntry={secureTextEntry}
      className={className}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

PasswordInput.defaultProps = {
  leftIcon: <TextInput.Icon icon="lock" color="#9d9d9d" />,
  placeholder: 'Password',
};

export default PasswordInput;
