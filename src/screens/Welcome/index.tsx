import { ApplicationScreenProps } from 'LashApp/@types/navigation';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const Welcome = ({ navigation }: ApplicationScreenProps) => {
  return (
    <SafeAreaView className="flex h-full mx-5 justify-evenly">
      <View>
        <Text variant="displayMedium">Let's you in</Text>
      </View>
      <View className="gap-3 ">
        <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
          Continue with Facebook
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
          Continue with Google
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
          Continue with Apple
        </Button>
      </View>
      <View className="flex">
        <Text className="self-center">or</Text>
        <Button mode="contained" onPress={() => navigation.navigate('Login')}>
          Sign in with password
        </Button>
        <View className="flex-row items-center self-center">
          <Text>Don't have an account?</Text>
          <Button mode="text" onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
