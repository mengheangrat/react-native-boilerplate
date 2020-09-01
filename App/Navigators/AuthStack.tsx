import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Containers/WelcomeScreen';

type AuthStackProps = {
    WelcomeScreen: undefined;
};

const Stack = createStackNavigator<AuthStackProps>();

function AuthStack(): JSX.Element {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
    );
}
export default AuthStack;
