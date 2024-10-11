import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

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
                Name: {name}
            </Text>
            <Text>
                Email: {email}
            </Text>
            <Text 
                onClick={() => navigation.navigate('Change Password')}
            >
                Change Password
            </Text>
        </View>
    );
};

export default MyAccount;
