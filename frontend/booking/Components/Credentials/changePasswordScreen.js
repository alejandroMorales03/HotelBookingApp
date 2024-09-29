import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import GeneralStyles from '../../Styles/GeneralStyles';
import logo from '../../Assets/logo.jpeg';
import COLORS from '../../Constants/Constants';
import axios from 'axios';
import Error from '../Custom/Error';
import TypingEffect from '../Custom/TypingEffect';
import CredentialStyles from '../../Styles/CredentialStyles';

const ChangePasswordScreen = ({navigation}) => {

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  async function handleChangePassword() {
    if (password !== confirmPassword) {
      console.error('Error during password change: Passwords do not match!');
      setError('Password and confirmation password are not the same. Please try again.');
    } 
    else 
    {
      try {
      const response = await axios.post(`http://localhost:8000/api/user-preferences/change-password`, {
        password})
      resetFields(); 
      console.log("Password changed successfully");
      }

      catch (err) {
        console.error('Error during password change:', err.response ? err.response.data.message : err.message);
        setError(err.response ? err.response.data.message : 'Failed to change password. Please try again.');
      }
    }
  }

  function resetFields(){
    setPassword(''),
    setConfirmPassword('')
  }

  return (
    <SafeAreaView style={GeneralStyles.fullPageContainer}>
      <View style={CredentialStyles.changePasswordContainer}>
        {/* View to display logo */}
        <View style={CredentialStyles.logoContainer}>
            <Image source={logo} style={CredentialStyles.logo} />
        </View>

        {/*View that contains main title of form - Change Password*/}
        <View style={CredentialStyles.GeneralContainer}>
            <Text style={GeneralStyles.mainTitle}>Change Password Page</Text>
            {error? 
                <Error errorText={error} style={CredentialStyles.error} /> :
                <></>
            }
        </View>

        {/*View that contains New Password text container*/}
        <View style={CredentialStyles.GeneralContainer}>
            <View style={CredentialStyles.fieldCredential}>
              <TextInput
                placeholder="New Password"
                value={password}
                onChangeText={setPassword}
                style={CredentialStyles.textInput}
                placeholderTextColor={COLORS.Grey}
                autoCapitalize="none"
              />
            </View>
        </View>

        {/*View that contains New Password text container */}
        <View style={CredentialStyles.GeneralContainer}>
            <View style={CredentialStyles.fieldCredential}>
              <TextInput
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={CredentialStyles.textInput}
                placeholderTextColor={COLORS.Grey}
                autoCapitalize="none"
              />
            </View>
        </View>

        {/*View that contains button that calls handlePasswordChange*/}
        <View style={CredentialStyles.buttonContainer}>
            <TouchableOpacity onPress={handleChangePassword}>
              <Text style={CredentialStyles.button}>Click to change password!</Text>
            </TouchableOpacity>
          </View>
      </View>
      

      </SafeAreaView>
  );

}



export default ChangePasswordScreen;
