import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootContainer from './Containers/RootContainer';
import createStore from './Redux';

import RootNavigationContainer from './Navigators/RootNavigationContainer';

const { store, persistor } = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
        <RootNavigationContainer />
      </PersistGate>
    </Provider>
  );
}
