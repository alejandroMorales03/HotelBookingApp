import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../Components/Credentials/loginScreen';
import SignupScreen from '../Components/Credentials/signupScreen';
import VerificationScreen from '../Components/Credentials/verificationScreen';
import ChangePasswordScreen from '../Components/Credentials/changePasswordScreen';
import Home from '../Components/HomePage/Home';
import COLORS from '../Constants/Constants';

const Stack = createStackNavigator();

const CredentialsStack = () => (
  <Stack.Navigator
    initialRouteName="Change Password"
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Sign Up" component={SignupScreen} />
    <Stack.Screen name="Change Password" component={ChangePasswordScreen}/> 
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer independent={true}>
    <CredentialsStack />
  </NavigationContainer>
);

export default App;
