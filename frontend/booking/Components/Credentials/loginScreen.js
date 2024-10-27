import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CredentialStyles from '../../Styles/CredentialStyles';
import logo from '../../Assets/logo.jpeg';
import COLORS from '../../Constants/Constants';
import axios from 'axios';
import Error from '../Custom/Error';
import GeneralStyles from '../../Styles/GeneralStyles';
import { Video } from 'expo-av';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { setIsAuthenticated, setCustomer } from "../../redux/actions"

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isModalVisible, setModalVisible] = React.useState(true); 
  const [showMessage, setShowMessage] = React.useState(true);

  async function handleLogin() {
    try {
      const response = await axios.post(`http://localhost:8000/api/auth/authentication`, {
        email,
        password,
      });

      const { data } = response;
      
      dispatch(setIsAuthenticated(true));
      dispatch(setCustomer({...data.data}));      

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

  useFocusEffect(
    React.useCallback(() => {
      setShowMessage(true);
      setModalVisible(false); 

      const timer = setTimeout(() => {
        setShowMessage(false); 
        setModalVisible(true); 
      }, 0); 

      return () => clearTimeout(timer); 
    }, [])
  );

  return (
    <View onPress={Keyboard.dismiss}>
      {showMessage ? (
        <View style={GeneralStyles.fullPageContainer}>
          
        </View>
      ) : (
      <Modal
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType='slide'
      >
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
          <Text style={GeneralStyles.mainTitle}>Login</Text>
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
        </View>
        <View style={CredentialStyles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={CredentialStyles.button}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={GeneralStyles.GeneralContainer}>
          <Text style={GeneralStyles.textOverLink}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => {
            setShowMessage(true);
            navigation.navigate('Sign Up');
            resetFields();
          }}>
            <Text style={CredentialStyles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        
        </View>

      </SafeAreaView>
      </Modal>)}
      </View>
   
  )

};

export default LoginScreen;
