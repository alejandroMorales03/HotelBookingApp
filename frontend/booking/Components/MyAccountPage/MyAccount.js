import React from "react";
import { useSelector } from "react-redux";

import { View, Text } from "react-native";
import { Button } from 'react-bootstrap/';


const MyAccount = ({ navigation }) => {

    const { customer } = useSelector(state => state.userReducer);
    const { 
        firstName, 
        lastName, 
        email
    } = customer;

    const name = firstName + " " + lastName;

    return (
        <View>
            <Text>
                My Account
            </Text>
            <Text>
                Name: {name}
            </Text>
            <Text>
                Email: {email}
            </Text>
            <Button 
                onClick={() => navigation.navigate('Change Password')}
            >
                Change Password
            </Button>
        </View>
    );
};

export default MyAccount;
