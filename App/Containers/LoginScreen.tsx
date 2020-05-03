import React from 'react';
import {View, Text, Button} from 'react-native';

import {useSelector, RootStateOrAny, useDispatch} from 'react-redux';

import AuthActions, {AuthSelectors} from '../Redux/AuthRedux';

function LoginScreen() {
  const dispatch = useDispatch();
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  const {token} = useSelector((state: RootStateOrAny) => state.auth);
  const {user} = useSelector((state: RootStateOrAny) => state.auth);

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.gender}</Text>

      <Button
        title="Get user info"
        onPress={() => dispatch(AuthActions.loginRequest())}
      />
    </View>
  );
}

export default LoginScreen;
