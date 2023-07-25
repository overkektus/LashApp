import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Formik } from 'formik';
import { ApplicationScreenProps } from 'LashApp/@types/navigation';
import { useSignupMutation } from 'LashApp/src/services/modules/auth/api';
import { signupSchema } from './signupSchema';
import EmailInput from 'LashApp/src/components/Inputs/EmailInput';
import PasswordInput from 'LashApp/src/components/Inputs/PasswordInput';

interface ISignupState {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = ({ navigation }: ApplicationScreenProps) => {
  const [signUp, { isLoading }] = useSignupMutation();

  const handleSignupSubmit = async (values: ISignupState) => {
    try {
      const data = await signUp(values).unwrap();
      console.log(data);
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('error');
    }
  };

  return (
    <SafeAreaView>
      <Text variant="displayLarge">Create your Account</Text>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={handleSignupSubmit}
        validationSchema={signupSchema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <View>
            <EmailInput
              value={values.email}
              error={touched.email && !!errors.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            <PasswordInput
              value={values.password}
              error={touched.password && !!errors.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            <PasswordInput
              placeholder="Confirm password"
              value={values.confirmPassword}
              error={touched.confirmPassword && !!errors.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
            />
            <Button
              mode="contained"
              onPress={handleSubmit as any}
              loading={isLoading}
            >
              Sign up
            </Button>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Signup;
