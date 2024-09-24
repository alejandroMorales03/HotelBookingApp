import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../Components/loginScreen';
import SignupScreen from '../Components/signupScreen';
import VerificationScreen from '../Components/verificationScreen';
import changePasswordForm from '../Components/changePasswordForm';


const Stack = createStackNavigator();

const CredentialsStack = () => (
  <Stack.Navigator
    initialRouteName="ChangePassword"
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.ScaleFromCenterAndroid,
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Sign Up" component={SignupScreen} />
    <Stack.Screen name="Verification" component={VerificationScreen}/>
    <Stack.Screen name="ChangePassword" component={changePasswordForm}/> 
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer independent={true}>
    <CredentialsStack />
  </NavigationContainer>
);

export default App;
