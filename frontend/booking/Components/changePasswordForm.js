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


const ChangePasswordForm = ({navigation}) => {

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  async function handleChangePassword() {
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      const response = await axios.post(`http://10.0.0.20:8081/api/auth/signup`, {
        password})
      resetFields();  
      console.log('Password changed successfully!'); // Placeholder for actual logic
    }
  }
}

function resetFields(){
    setPassword(''),
    setConfirmPassword('')
  }

  return (
    <View style={GeneralStyles.fieldCredential}>
      <TextInput
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={GeneralStyles.textInput}
        placeholderTextColor={COLORS.Grey}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={GeneralStyles.textInput}
        placeholderTextColor={COLORS.Grey}
        autoCapitalize="none"
      />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      
      <TouchableOpacity onPress={handleChangePassword}>
        <Text style={{ color: COLORS.Primary }}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );


export default ChangePasswordForm;
