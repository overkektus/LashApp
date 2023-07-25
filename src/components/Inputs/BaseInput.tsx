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
  className?: string;
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
  className,
  onChangeText,
  onBlur,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      mode="outlined"
      inputMode={inputMode}
      outlineStyle={{ borderRadius: 10, borderWidth: 0 }}
      style={{ backgroundColor: '#fafafa' }}
      value={value}
      secureTextEntry={secureTextEntry}
      left={leftIcon}
      right={rightIcon}
      error={error}
      className={className}
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
  className: '',
  onBlur: () => {},
};

export default BaseInput;
