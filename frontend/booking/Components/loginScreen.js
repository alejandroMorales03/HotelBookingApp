import React from 'react';
import { View, Text, Button, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {

  

  function handleSignUp(){
    //This method is used to handle communication between frontend and backend.
    navigation.navigate("Sign Up")
  }

  return(
    //Use this space to customize the user experience
    <View>
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )

};

export default LoginScreen;
