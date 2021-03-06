import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@home/Home';
import Registration from '@registration/Registration';
import Details from '@details/Details';

import { HOME_SCREEN, REGISTRATION_SCREEN, DETAIL_SCREEN } from '@resources/Constants'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name={HOME_SCREEN} component={Home} />
        <Stack.Screen name={REGISTRATION_SCREEN} component={Registration} />
        <Stack.Screen name={DETAIL_SCREEN} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
