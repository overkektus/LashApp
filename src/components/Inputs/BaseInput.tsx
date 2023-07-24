import React from 'react';
import {
  InputModeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { TextInput } from 'react-native-paper';

export interface BaseInputProps {
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputMode?: InputModeOptions;
  error?: boolean;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const BaseInput: React.FC<BaseInputProps> = ({
  placeholder,
  value,
  leftIcon,
  rightIcon,
  secureTextEntry,
  error,
  inputMode,
  onChangeText,
  onBlur,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      mode="outlined"
      inputMode={inputMode}
      outlineStyle={{ borderRadius: 10 }}
      style={{ backgroundColor: '#fafafa' }}
      value={value}
      secureTextEntry={secureTextEntry}
      left={leftIcon}
      right={rightIcon}
      error={error}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

BaseInput.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  placeholder: '',
  secureTextEntry: false,
  inputMode: 'text',
  error: false,
  onBlur: () => {},
};

export default BaseInput;
