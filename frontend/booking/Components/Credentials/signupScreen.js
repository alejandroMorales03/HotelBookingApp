import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CredentialStyles from '../../Styles/CredentialStyles';
import logo from '../../Assets/logo.jpeg';
import COLORS from '../../Constants/Constants';
import axios from 'axios';
import Error from '../Custom/Error';
import TypingEffect from '../Custom/TypingEffect';
import GeneralStyles from '../../Styles/GeneralStyles';
import { StyleSheet } from 'react-native';
import {Video} from 'expo-av'




const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmedPassword, setConfirmedPassword] = React.useState('');
  const [error, setError] = React.useState('');


  async function handleSignUp() {
    try {

      const response = await axios.post(`http://10.108.80.30:8000/api/auth/signup`, {
        email,
        firstName,
        lastName,
        password,
        confirmedPassword,
      });
      resetFields(),

      navigation.navigate("Verification", {email});
    } catch (err) {
      console.log('Error during sign-up:', err.response ? err.response.data.message : err.message);
      setError(err.response ? err.response.data.message : 'Sign-up failed. Please try again.');
    }
  }

  function resetFields(){
    setError('')
    setEmail(''),
    setFirstName(''),
    setLastName(''),
    setPassword(''),
    setConfirmedPassword('')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={CredentialStyles.fullPageContainer}>
      <Video
          source={require('../../Assets/beach.mp4')}
          style={StyleSheet.absoluteFill} 
          resizeMode="cover"
          isLooping 
          shouldPlay
        />
        <View style={CredentialStyles.logoContainer}>
          <Image source={logo} style={CredentialStyles.logo} />
        </View>
        <View style={CredentialStyles.GeneralContainer}>
          <Text style={CredentialStyles.mainTitle}>Sign Up</Text>
          
          
          {error ?
            <Error errorText={error} style={CredentialStyles.error} /> :
            <Text
              style={CredentialStyles.complimentaryText}>
              The vacation of your dreams is just a few clicks away!
              </Text>
          }
        </View>
        <View style={CredentialStyles.GeneralContainer}>
          <View>
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              style={CredentialStyles.textInput}
              placeholderTextColor={COLORS.neutral.White}
              autoCapitalize="none"
            />
          </View>
          <View style={CredentialStyles.fieldCredential}>
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              style={CredentialStyles.textInput}
              placeholderTextColor={COLORS.neutral.White}
              autoCapitalize="none"
            />
          </View>
          <View style={CredentialStyles.fieldCredential}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={CredentialStyles.textInput}
              placeholderTextColor={COLORS.neutral.White}
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
              placeholderTextColor={COLORS.neutral.White}
              autoCapitalize="none"
            />
          </View>
          <View style={CredentialStyles.fieldCredential}>
            <TextInput
              placeholder="Confirm Password"
              value={confirmedPassword}
              onChangeText={setConfirmedPassword}
              style={CredentialStyles.textInput}
              placeholderTextColor={COLORS.neutral.White}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={CredentialStyles.buttonContainer}>
          <TouchableOpacity onPress={
            handleSignUp}>
            <Text style={CredentialStyles.button}>Plan Your Stay!</Text>
          </TouchableOpacity>
        </View>
        <View style={CredentialStyles.GeneralContainer}>
          <Text style={CredentialStyles.textOverLink}>Have an account?</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Login')
            resetFields()}
          }>
            <Text style={CredentialStyles.linkText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
  );
};

export default SignupScreen;
