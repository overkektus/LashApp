import { ApplicationScreenProps } from 'LashApp/@types/navigation';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const Welcome = ({ navigation }: ApplicationScreenProps) => {
  return (
    <SafeAreaView>
      <Text variant="displayLarge">Let's you in</Text>
      <View>
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
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Sign in with password
      </Button>
      <View className="bg-black">
        <Text>Don't have an account?</Text>
        <Button mode="text" onPress={() => navigation.navigate('Signup')}>
          Sign up
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
