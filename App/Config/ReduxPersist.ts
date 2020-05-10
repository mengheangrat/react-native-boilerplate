import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['auth'],
};

export default persistConfig;
