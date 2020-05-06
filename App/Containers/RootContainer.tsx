import React from 'react';
import { View, StatusBar } from 'react-native';

export default function RootContainer() {
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </View>
  );
}
