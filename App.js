// App.js
import React from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import firebaseApp from './src/firebase';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </View>
  );
};

export default App;
