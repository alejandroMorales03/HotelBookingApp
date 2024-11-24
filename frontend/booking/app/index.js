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
import RoomScreen from '../Components/HomePage/RoomScreen';
import Reservations from '../Components/ReservationsPage/Reservations';
import MyAccount from '../Components/MyAccountPage/MyAccount';
import ChangePasswordForm from '../Components/changePasswordForm';
import { Store } from '../redux/store';
import { useSelector, useDispatch } from "react-redux";
import HotelHome from "../Components/HomePage/HotelHome"

import logo from "../Assets/logo.jpeg";

import NavigationBar from '../Components/Navigation/NavigationBar';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const UnauthorizedStack = ({}) => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen name="Login">
     {props => <LoginScreen {...props} />}
    </Stack.Screen>
    <Stack.Screen name="Sign Up" component={SignupScreen}>
    </Stack.Screen>
    {/* <Stack.Screen name="Verification" component={VerificationScreen}>
    </Stack.Screen> */}
    <Stack.Screen name="Verification">
     {props => <VerificationScreen {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
);

const AuthorizedStack = ({}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
      initialRouteName: "HotelHome"
    }}
  >
    
    <Stack.Screen name="MainDashboard">
        {() => (
          <Drawer.Navigator 
            drawerContent={props => <NavigationBar {...props}  />}
          >
            <Drawer.Screen 
              name="HotelScreen" 
              component={HotelScreen}
              options={{ 
                title: null,
                drawerLabel: 'HotelScreen'
              }}
            />
            <Drawer.Screen 
              name="My Account" 
              component={MyAccount}
              options={{ 
                title: null,
                drawerLabel: 'My Account'
              }}
            />
            <Drawer.Screen 
              name="Reservations" 
              component={Reservations}
              options={{ 
                title: null,
                drawerLabel: 'Reservations'
              }}
            />
            <Drawer.Screen 
              name="Change Password" 
              component={ChangePasswordForm}
              options={{ 
                title: null,
                drawerLabel: 'Change Password',
                drawerItemStyle: { display: 'none' }
              }}
            />
            <Drawer.Screen 
              name="Room Screen" 
              component={RoomScreen}
              options={{ 
                title: null,
                drawerLabel: 'Room Screen',
                drawerItemStyle: { display: 'none' }
              }}
            />
            <Drawer.Screen 
            name="Hotel Home" 
            component={HotelHome}
            options={{ 
              title: null,
              drawerLabel: 'Hotel Home',
            }}
          />
            
          </Drawer.Navigator>
        )}
      </Stack.Screen>
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

export default App;
