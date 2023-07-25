import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Formik } from 'formik';
import { Button, Text } from 'react-native-paper';
import { useLoginMutation } from 'LashApp/src/services/modules/auth/api';
import { ApplicationScreenProps } from 'LashApp/@types/navigation';
import EmailInput from 'LashApp/src/components/Inputs/EmailInput';
import PasswordInput from 'LashApp/src/components/Inputs/PasswordInput';
import { loginSchema } from './loginSchema';
// import GoogleIcon from 'LashApp/src/assets/google-icon.svg';

interface ILoginState {
  email: string;
  password: string;
}

const Login = ({ navigation }: ApplicationScreenProps) => {
  const [logIn, { isLoading }] = useLoginMutation();

  const handleLoginSubmit = async (values: ILoginState) => {
    try {
      const data = await logIn(values).unwrap();
      Alert.alert(data.token);
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('error');
    }
  };

  return (
    <SafeAreaView className="flex flex-column h-full mx-5 justify-evenly">
      <View className="flex content-center align-middle py-10 ">
        <Text variant="displayMedium">Login to you Account</Text>
      </View>
      <View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLoginSubmit}
          validationSchema={loginSchema}
        >
          {({ handleSubmit, handleChange, handleBlur, values }) => (
            <View>
              <EmailInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <View className="mt-4">
                <PasswordInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
              </View>
              <Button
                mode="contained"
                onPress={handleSubmit as any}
                loading={isLoading}
                className="mt-4"
              >
                Sign in
              </Button>
            </View>
          )}
        </Formik>
        <Button
          mode="text"
          // onPress={handleSubmit as any}
          loading={isLoading}
        >
          Forgot the password?
        </Button>
      </View>
      <View>
        {/* <GoogleIcon /> */}
        {/* <GoogleIcon /> */}
        {/* <GoogleIcon /> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
