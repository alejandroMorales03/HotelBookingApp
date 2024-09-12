import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import GeneralStyles from '../Styles/GeneralStyles';
import logo from '../Assets/logo.jpg';
import COLORS from '../Constants/Constants';
import axios from 'axios';
import Error from './Custom/Error';
import TypingEffect from './Custom/TypingEffect';


const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmedPassword, setConfirmedPassword] = React.useState('');
  const [error, setError] = React.useState('');

  // This method is used to handle communication between frontend and backend.
  async function handleSignUp() {
    try {
      const response = await axios.post(`http://192.168.0.6:8000/api/auth/signup`, {
        email,
        firstName,
        lastName,
        password,
        confirmedPassword,
      });

      navigation.navigate("Login");
    } catch (err) {
      console.error('Error during sign-up:', err.response ? err.response.data.message : err.message);
      setError(err.response ? err.response.data.message : 'Sign-up failed. Please try again.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={GeneralStyles.fullPageContainer}>
        <View style={GeneralStyles.logoContainer}>
          <Image source={logo} style={GeneralStyles.logo} />
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <Text style={GeneralStyles.mainTitle}>Sign Up</Text>
          {error ?
            <Error errorText={error} style={GeneralStyles.error} /> :
            <TypingEffect
              style={GeneralStyles.complimentaryText}
              text="The vacation of your dreams is just a few clicks away!"
              speed={100}
            />
          }
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <View style={GeneralStyles.fieldCredential}>
            <TextInput
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
              style={GeneralStyles.textInput}
              placeholderTextColor={COLORS.Grey}
              autoCapitalize="none"
            />
          </View>
          <View style={GeneralStyles.fieldCredential}>
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
              style={GeneralStyles.textInput}
              placeholderTextColor={COLORS.Grey}
              autoCapitalize="none"
            />
          </View>
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
          <View style={GeneralStyles.fieldCredential}>
            <TextInput
              placeholder="Confirm Password"
              value={confirmedPassword}
              onChangeText={setConfirmedPassword}
              style={GeneralStyles.textInput}
              placeholderTextColor={COLORS.Grey}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={GeneralStyles.buttonContainer}>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={GeneralStyles.button}>Plan Your Stay!</Text>
          </TouchableOpacity>
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <Text style={GeneralStyles.textInLinkBottom}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={GeneralStyles.link}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignupScreen;
