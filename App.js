import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/stack/MainStack'; // Vérifiez ce chemin

const App = () => {
  return React.createElement(
    NavigationContainer,
    null,
    React.createElement(MainStack, null)
  );
};

export default App;