import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import CredentialStyles from '../../Styles/CredentialStyles';
import logo from '../../Assets/logo.jpeg'
import TypingEffect from '../Custom/TypingEffect';
import COLORS from '../../Constants/Constants';
import Error from '../Custom/Error'; // Ensure Error component is correctly imported
import { Video } from 'expo-av';
import { StyleSheet } from 'react-native';
import GeneralStyles from '../../Styles/GeneralStyles';

const VerificationScreen = ({ route, navigation }) => {
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');
  const { email } = route.params || {};

  
  
  async function handleSendCode(){
    try{
      const response = await axios.post('http://localhost:8000/api/auth/request-code', {
        code,
        email,
      });


    }catch(err){

    }
  }
  async function handleVerification() {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/verify-code', {
        code,
        email,
      });
      resetFields();
      navigation.navigate('Home'); 
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
    <View onPress={Keyboard.dismiss}>
      <View style={CredentialStyles.fullPageContainer}>
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
          <Text style={GeneralStyles.customMediumTitle}>Verify Your Information</Text>
          {error ? (
            <Error errorText={error} style={CredentialStyles.error} />
          ) : (
            <Text style={CredentialStyles.complimentaryText}>Please enter the verification code</Text>
          )}
        </View>
        <View style={CredentialStyles.GeneralContainer}>
          <TextInput
            placeholder="Verification Code"
            value={code}
            onChangeText={setCode}
            style={CredentialStyles.textInput}
            placeholderTextColor={COLORS.neutral.White}
            autoCapitalize="none"
          />
        </View>
        
        <View style={CredentialStyles.GeneralContainer}>
          <View style={CredentialStyles.buttonContainer}>
            <TouchableOpacity onPress={handleVerification}>
              <Text style={CredentialStyles.button}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleSendCode}>
              <Text style={CredentialStyles.linkText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
          
          
          
          <View style={CredentialStyles.link}>
            <TouchableOpacity onPress={() => {
              resetFields();
              navigation.navigate('Sign Up')}
            }>
              <Text style={CredentialStyles.linkText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default VerificationScreen;
