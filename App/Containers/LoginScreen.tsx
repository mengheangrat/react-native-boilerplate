import React from 'react';
import {View, Text, Button} from 'react-native';

import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';

import AuthActions, {AuthSelectors} from '../Redux/AuthRedux';

function LoginScreen() {
  const dispatch = useDispatch();
  const tokenSelector = useSelector(AuthSelectors.getToken);
  const {token} = useSelector((state: RootStateOrAny) => state.auth);

  return (
    <View>
      <Text>{token}</Text>
      <Text>{tokenSelector}</Text>

      <Button
        title="Change Token"
        onPress={() => dispatch(AuthActions.loginRequest('newpppptoken'))}
      />
    </View>
  );
}

export default LoginScreen;
