import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Containers/LoginScreen';

type AuthStackProps = {
  LoginScreen: undefined;
};

const Stack = createStackNavigator<AuthStackProps>();
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
export default AuthStack;
