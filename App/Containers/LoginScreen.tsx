import React from 'react';
import { View, Text, Button } from 'react-native';

import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import AuthActions, { AuthSelectors } from '../Redux/AuthRedux';

function LoginScreen() {
    const dispatch = useDispatch();
    // you can use selector or state
    const userInfo = useSelector(AuthSelectors.getUserInfo);
    const { user } = useSelector((state: RootStateOrAny) => state.auth);

    return (
        <View>
            <Text>{userInfo.name}</Text>
            <Text>{user.gender}</Text>

            <Button title="Get user info" onPress={() => dispatch(AuthActions.loginRequest())} />
        </View>
    );
}

export default LoginScreen;
