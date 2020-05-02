import React from 'react';
import {Provider} from 'react-redux';
import RootContainer from './Containers/RootContainer';
import createStore from './Redux';

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}
