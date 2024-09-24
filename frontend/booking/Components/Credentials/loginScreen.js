import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard, Fragment } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CredentialStyles from '../../Styles/CredentialStyles';
import logo from '../../Assets/logo.jpeg';
import COLORS from '../../Constants/Constants';
import axios from 'axios';
import Error from '../Custom/Error';
import Home from '../HomePage/Home';
import GeneralStyles from '../../Styles/GeneralStyles';



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  async function handleLogin() {
    try {
      const response = await axios.post(`http:/172.21.22.15:8000/api/auth/authentication`, {
        email,
        password,
      });
      
     
      navigation.navigate('Home');
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
        <View style={CredentialStyles.logoContainer}>
          <Image source={logo} style={CredentialStyles.logo} />
        </View>
        <View style={CredentialStyles.GeneralContainer}>
          <Text style={CredentialStyles.mainTitle}>Login</Text>
          {error? 
              <Error errorText={error} style={CredentialStyles.error} /> :
              <></>
          }
        </View>
        <View style={CredentialStyles.GeneralContainer}>
          <View style={CredentialStyles.fieldCredential}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={CredentialStyles.textInput}
              placeholderTextColor={COLORS.Grey}
              autoCapitalize="none"
            />
          </View>
          <View style={CredentialStyles.fieldCredential}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={CredentialStyles.textInput}
              placeholderTextColor={COLORS.Grey}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={CredentialStyles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={CredentialStyles.button}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={CredentialStyles.GeneralContainer}>
          <Text style={CredentialStyles.textInLinkBottom}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Sign Up'),
            resetFields()}
          }>
            <Text style={CredentialStyles.link}>Sign Up</Text>
          </TouchableOpacity>
        
        </View>

      </SafeAreaView>
      </TouchableWithoutFeedback>
   
  )

};

export default LoginScreen;
