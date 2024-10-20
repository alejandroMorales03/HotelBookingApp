import React, { useState } from 'react';
import CredentialStyles from '../../Styles/CredentialStyles';
import GeneralStyles from '../../Styles/GeneralStyles';
import COLORS, { SIZES } from '../../Constants/Constants';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const ForgotPassword = () => {
  
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');

  const validateEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
  };

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    if (validateEmail(email)) {
      setError(''); 
      console.log('Email submitted:', email); 
    } else {
      
      setError('Please enter a valid email address');
    }
  };

  return (
    <View style={CredentialStyles.fullPageContainer}>
      <View style={CredentialStyles.GeneralContainer}>
        {/* Title */}
        <Text style={GeneralStyles.mainTitle}>Forgot Password</Text>
        
        {/* Email input field */}
        <TextInput
          style={CredentialStyles.textInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={handleEmailChange}
          placeholderTextColor={COLORS.neutral.White}
        />

        {/* Error message displayed if email validation fails */}
        {error && <Text style={CredentialStyles.error}>{error}</Text>}

        {/* Submit button */}
        <TouchableOpacity style={CredentialStyles.buttonContainer} onPress={handleSubmit}>
          <Text style={CredentialStyles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;