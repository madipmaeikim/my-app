import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function AuthStackScreen() {
  return React.createElement(
    Stack.Navigator,
    null,
    React.createElement(Stack.Screen, { name: "Login", component: LoginScreen }),
    React.createElement(Stack.Screen, { name: "Register", component: RegisterScreen })
  );
}

export default AuthStackScreen;
