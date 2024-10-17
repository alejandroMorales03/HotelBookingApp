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
        <View style={NavigationStyles.flexContainer}>
          <View style={NavigationStyles.userIconContainer}>
            <Image source={logo} style={NavigationStyles.Icon} />
          </View>
        </View>
        <DrawerItemList {...props} />
        <View style={NavigationStyles.flexContainer}>
          <Button 
            onClick={() => {
              dispatch(setIsAuthenticated(false));
              dispatch(setCustomer({email: null}));
            }}
            style={NavigationStyles.button}
          >
            Signout
          </Button>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default NavigationBar;
