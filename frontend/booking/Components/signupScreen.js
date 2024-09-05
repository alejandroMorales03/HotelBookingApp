import React from 'react';
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import GeneralStyles from '../Styles/GeneralStyles';
import logo from '../Assets/logo.jpg'
import TypingEffect from './Items/TypingEffect';
import COLORS from '../Constants/Constants';

const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [confimaPassword, setConfirmPassword] = React.useState('');
  

  //This method is used to handle communication between frontend and backend.
  function handleSignUp() {
    navigation.navigate("Login");
  }

  return (
    //Use this space to customize the user experience
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={GeneralStyles.fullPageContainer}>

        <View style={GeneralStyles.logoContainer}>
          <Image source={logo} style={GeneralStyles.logo}/>
        </View>

          <View style={GeneralStyles.GeneralContainer}>
              <Text style={GeneralStyles.mainTitle}>Sign Up</Text>
          
              <TypingEffect
                style={GeneralStyles.complimentaryText}
                text="The vacation of your dreams is just a few clicks away!"
                speed={100} 
              />
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
                  value={confimaPassword}
                  onChangeText={setConfirmPassword}
                  style={GeneralStyles.textInput}
                  placeholderTextColor={COLORS.Grey}
                  secureTextEntry
                  autoCapitalize="none"
                />
             </View>
          </View>

        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignupScreen;