import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import GeneralStyles from '../Styles/GeneralStyles';
import logo from '../Assets/logo.jpeg';
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
      const response = await axios.post(`http://localhost:8000/api/user-preferences/change-password`, {
        password})
      resetFields(); 
      console.log("Reached 1") ;
      console.log('Password changed successfully!'); 
    }
  }

  function resetFields(){
    setPassword(''),
    setConfirmPassword('')
  }

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('My Account')}>
        <Text>Back</Text>
      </TouchableOpacity>
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
    </View>
  );

}



export default ChangePasswordForm;
