import React from 'react';
import { Modal, TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomePageStyles from '../../Styles/HomePageStyles';
import { Video } from 'expo-av';
import { StyleSheet } from 'react-native';


const RoomFilter = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}     
      transparent={true}    
      animationType="slide" 
    >
      <SafeAreaView style={HomePageStyles.filterFullPage}>
      <Video
          source={require('../../Assets/dancing.mp4')}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          isLooping
          shouldPlay
          
        />
            <View style={HomePageStyles.filterContainer}>
                <View style={HomePageStyles.overlay}></View>
                <Text style={HomePageStyles.homeSmallTitle}>Customize your Experience</Text>

                <View style={HomePageStyles.filterButtonContainer}>
                    <TouchableOpacity style={HomePageStyles.onButtonContainer}>
                            <Text style={HomePageStyles.button}>Wifi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HomePageStyles.offButtonContainer}>
                            <Text style={HomePageStyles.button}>Mini Bar</Text>
                     </TouchableOpacity>
                </View>

                <View style={HomePageStyles.filterButtonsBottomContainer}>
                    <TouchableOpacity style={HomePageStyles.deselectButtonContainer}>
                            <Text style={HomePageStyles.button}>Deselect All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={HomePageStyles.applyButtonContainer}>
                            <Text style={HomePageStyles.button}>Apply</Text>
                     </TouchableOpacity>
                </View>
            </View>
        
      </SafeAreaView>
    </Modal>
  );
};

export default RoomFilter;
