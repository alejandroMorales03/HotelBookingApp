import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import GeneralStyles from '../Styles/GeneralStyles';
import logo from '../Assets/logo.jpeg';
import TypingEffect from './Custom/TypingEffect';
import COLORS from '../Constants/Constants';
import Error from './Custom/Error'; // Ensure Error component is correctly imported

const VerificationScreen = ({ route, navigation }) => {
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const { email } = route.params || {};

  
  
  async function handleSendCode(){
    try{
      const response = await axios.post('http://172.21.22.15:8000/api/auth/request-code', {
        code,
        email,
      });


    }catch(err){

    }
  }
  async function handleVerification() {
    try {
      const response = await axios.post('http://172.21.22.15:8000/api/auth/verify-code', {
        code,
        email,
      });
      resetFields();
      navigation.navigate('Login'); 
    } catch (err) {
      console.error('Error during verification:', err.response ? err.response.data.message : err.message);
      setCodeButtonText('Resend Code')
      setError(err.response ? err.response.data.message : 'Verification failed. Please try again.');
    }
  }
  function resetFields(){
    setError(''),
    setCode('');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={GeneralStyles.fullPageContainer}>
        <View style={GeneralStyles.logoContainer}>
          <Image source={logo} style={GeneralStyles.logo} />
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <Text style={GeneralStyles.customMediumTitle}>Verify Your Information</Text>
          {error ? (
            <Error errorText={error} style={GeneralStyles.error} />
          ) : (
            <TypingEffect
              style={GeneralStyles.complimentaryText}
              text="Almost there! Please check your email and enter the verification code to confirm your account!"
              speed={100}
            />
          )}
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <TextInput
            placeholder="Verification Code"
            value={code}
            onChangeText={setCode}
            style={GeneralStyles.textInput}
            placeholderTextColor={COLORS.Grey}
            autoCapitalize="none"
          />
        </View>
        
        <View style={GeneralStyles.GeneralContainer}>
          <View style={GeneralStyles.buttonContainer}>
            <TouchableOpacity onPress={handleVerification}>
              <Text style={GeneralStyles.button}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={GeneralStyles.link}>
            <TouchableOpacity onPress={() => handleSendCode}>
              <Text style={GeneralStyles.link}>Resend Code</Text>
            </TouchableOpacity>
          </View>
          
          
          
          <View style={GeneralStyles.link}>
            <TouchableOpacity onPress={() => {
              resetFields();
              navigation.navigate('Sign Up')}
            }>
              <Text style={GeneralStyles.link}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default VerificationScreen;
