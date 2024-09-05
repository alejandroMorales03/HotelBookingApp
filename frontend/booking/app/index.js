import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../Components/loginScreen';
import SignupScreen from '../Components/signupScreen';

const Stack = createStackNavigator();

const CredentialsStack = () => (
  <Stack.Navigator
    initialRouteName="Sign Up"
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.ModalSlideFromBottomIOS,
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Sign Up" component={SignupScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer independent={true}>
    <CredentialsStack />
  </NavigationContainer>
);

export default App;
