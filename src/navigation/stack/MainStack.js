import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home/HomeScreen';
import ClientListScreen from '../../screens/clients/ClientListScreen';

const Stack = createStackNavigator();

function MainStack() {
  return React.createElement(
    Stack.Navigator,
    null,
    React.createElement(Stack.Screen, { name: "Home", component: HomeScreen }),
    React.createElement(Stack.Screen, { name: "Clients", component: ClientListScreen })
  );
}

export default MainStack;
