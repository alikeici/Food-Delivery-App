
import React from 'react';

import Onboarding from './Screens/Onboarding/Onboarding.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login/Login.js';
import Register from "./Screens/Register/Register.js"

import Drawertab from './Navigation/Drawertab.js';

import 'react-native-gesture-handler'

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={Drawertab} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>



  );
}