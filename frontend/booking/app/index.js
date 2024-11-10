import './gesture-handler';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../Components/Credentials/loginScreen';
import SignupScreen from '../Components/Credentials/signupScreen';
import VerificationScreen from '../Components/Credentials/verificationScreen';
import HotelScreen from '../Components/HomePage/HotelScreen';
import RoomScreen from '../Components/HomePage/Rooms/RoomScreen';
import CheckoutScreen from '../Components/HomePage/Checkout';

const Stack = createStackNavigator();

  const UnauthorizedStack = ({}) => (
  <Stack.Navigator
    initialRouteName="Checkout Screen"
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name="Login">
     {props => <LoginScreen {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Sign Up" component={SignupScreen} />
    <Stack.Screen name="Verification" component={VerificationScreen} />
    <Stack.Screen name="Hotel Screen" component={HotelScreen} />
    <Stack.Screen name="Room Screen" component={RoomScreen}/>
    <Stack.Screen name="Checkout Screen" component={CheckoutScreen}/>
  </Stack.Navigator>
);

const AppContent = () => {
  const { isAuthenticated, customer } = useSelector(state => state.userReducer);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated)
  }, [isAuthenticated]);

  useEffect(() => {
    console.log("customer", customer)
  }, [customer]);

  return(
      <NavigationContainer independent={true}>
        {
          !isAuthenticated ? (
            < UnauthorizedStack />
          ) : (
            <AuthorizedStack />
          )
        }

    </NavigationContainer>
  );
}

const App = () => {
  return (      
    <Provider store={Store}>
      <AppContent />
    </Provider> 
  )
};

// export default App;
export default UnauthorizedStack;
