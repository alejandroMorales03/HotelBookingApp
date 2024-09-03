import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text } from 'react-native';
import LoginScreen from '../Components/loginScreen';
import SignupScreen from '../Components/signupScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login or Signup to see our great offers!</Text>
            <Button
                title="Login"
                onPress={() =>
                    navigation.navigate('Login')
                }
            />
            <Button
                title="Signup"
                onPress={() =>
                    navigation.navigate('Signup')
                }
            />
        </View>
    );
};

export default function App() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Hotel Booking App' }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                />
            </Stack.Navigator>
        </>
    );
}