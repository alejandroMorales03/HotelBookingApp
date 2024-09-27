import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../Components/Credentials/loginScreen';
import SignupScreen from '../Components/Credentials/signupScreen';
import VerificationScreen from '../Components/Credentials/verificationScreen';
import Home from '../Components/HomePage/Home';

const Stack = createStackNavigator();

const CredentialsStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Sign Up" component={SignupScreen} />
    <Stack.Screen name="Verification" component={VerificationScreen} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer independent={true}>
    <CredentialsStack />
  </NavigationContainer>
);

export default App;
