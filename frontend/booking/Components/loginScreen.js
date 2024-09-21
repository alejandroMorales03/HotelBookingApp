import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard, Fragment } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import GeneralStyles from '../Styles/GeneralStyles';
import logo from '../Assets/logo.jpeg';
import COLORS from '../Constants/Constants';
import axios from 'axios';
import Error from './Custom/Error';


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  async function handleLogin() {
    console.log("handleSignUp")
    try {
      const response = await axios.post(`http:/172.21.22.15:8000/api/auth/authentication`, {
        email,
        password,
      });
      //here to go guarded route
      resetFields();
    } catch (err) {
      console.error('Error during login:', err.response ? err.response.data.message : err.message);
      setError(err.response ? err.response.data.message : 'Login failed. Please try again.');
    }
  }

  function resetFields(){
    setError(''),
    setEmail(''),
    setPassword('')
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={GeneralStyles.fullPageContainer}>
        <View style={GeneralStyles.logoContainer}>
          <Image source={logo} style={GeneralStyles.logo} />
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <Text style={GeneralStyles.mainTitle}>Login</Text>
          {error? 
              <Error errorText={error} style={GeneralStyles.error} /> :
              <></>
          }
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <View style={GeneralStyles.fieldCredential}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={GeneralStyles.textInput}
              placeholderTextColor={COLORS.Grey}
              autoCapitalize="none"
            />
          </View>
          <View style={GeneralStyles.fieldCredential}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={GeneralStyles.textInput}
              placeholderTextColor={COLORS.Grey}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={GeneralStyles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={GeneralStyles.button}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <Text style={GeneralStyles.textInLinkBottom}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => {
            resetFields();
            navigation.navigate('Sign Up')}
          }>
            <Text style={GeneralStyles.link}>Sign Up</Text>
          </TouchableOpacity>
        
        </View>

      </SafeAreaView>
      </TouchableWithoutFeedback>
   
  )

};

export default LoginScreen;
