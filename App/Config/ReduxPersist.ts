import AsyncStorage from '@react-native-community/async-storage';

export const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
