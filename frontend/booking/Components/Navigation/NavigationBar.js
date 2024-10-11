import React from "react";
import { View, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import NavigationStyles from "../../Styles/NavigationStyles";
import logo from "../../Assets/logo.jpeg";
import { Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { setIsAuthenticated, setCustomer } from "../../redux/actions"

const NavigationBar = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Image source={logo} style={NavigationStyles.Icon} />
        <DrawerItemList {...props} />
        <Button 
          onClick={() => {
            dispatch(setIsAuthenticated(false));
            dispatch(setCustomer({email: null}));
          }}
        >
          Signout
        </Button>
      </DrawerContentScrollView>
    </View>
  );
};

export default NavigationBar;
