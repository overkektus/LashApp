// import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  // Main: NavigatorScreenParams<MainParamsList>;
  Main: undefined;
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
