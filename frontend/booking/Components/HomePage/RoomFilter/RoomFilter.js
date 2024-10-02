import React, { useEffect } from "react";
import { Modal, TouchableOpacity, Text, View, Image } from "react-native";
import HomePageStyles from "../../../Styles/HomePageStyles";
import wifiIcon from '../../../Assets/wifi.png'
import minibarIcon from '../../../Assets/minibar.png'
import serviceIcon from '../../../Assets/service.png'
import tvIcon from '../../../Assets/tv.png'
import bathIcon from '../../../Assets/bath.png'
import balconyIcon from '../../../Assets/balcony.png'
import guestsIcon from '../../../Assets/guests.png'
import increaseIcon from '../../../Assets/increase.png'
import decreaseIcon from '../../../Assets/decrease.png'
import bedIcon from '../../../Assets/bed.png'
import COLORS from "../../../Constants/Constants";



const RoomFilter = ({ visible, onClose }) => {
  const [wifi, setWifi] = React.useState(false);
  const [minibar, setMiniBar] = React.useState(false);
  const [service, setRoomServ] = React.useState(false);
  const [tv, setTv] = React.useState(false);
  const [bathtub, setBath] = React.useState(false);
  const [balcony, setBalcony] = React.useState(false);
  const [isAnyFilterActive, setIsAnyFilterActive] = React.useState(false);
  const [guests, setGuests] = React.useState(1);
  const [beds, setBeds] = React.useState(1);


  useEffect(() => {
    if (wifi || minibar || service || tv || bathtub || balcony) {
      setIsAnyFilterActive(true);
    } else {
      setIsAnyFilterActive(false);
    }
  }, [wifi, minibar, service, tv, bathtub, balcony]);

  useEffect(() => {
    setBeds(Math.ceil(guests / 2)); // Default number of beds based on guests
  }, [guests]);

  // Handle increase in bed count
  const increaseBeds = () => {
    setBeds((prevBeds) => {
      if (prevBeds >= 4) {
        return Math.ceil(guests / 2); // Reset to default if beds exceed 4
      }
      return prevBeds + 1; // Increase the bed count
    });
  };

  // Handle decrease in bed count
  const decreaseBeds = () => {
    setBeds((prevBeds) => {
      if (prevBeds > Math.ceil(guests / 2)) {
        return prevBeds - 1; // Decrease bed count
      }
      return prevBeds; // Do not decrease below the default
    });
  };


  const deselectAll = () => {
    setWifi(false);
    setMiniBar(false);
    setRoomServ(false);
    setTv(false);
    setBath(false);
    setBalcony(false);
  };

  



 

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={HomePageStyles.overlay}>
        <View style={HomePageStyles.filterContainer}>
          <Text style={HomePageStyles.homeSmallTitle}>
            Customize your Experience
          </Text>
          <View style={HomePageStyles.optionsContainer}>
              <TouchableOpacity style={wifi? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                onPress={()=>{setWifi(!wifi)}}>
                <Image source = {wifiIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              <TouchableOpacity style={minibar? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                onPress={()=>{setMiniBar(!minibar)}}>
                <Image source = {minibarIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              <TouchableOpacity style={service? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                onPress={()=>{setRoomServ(!service)}}>
                <Image source = {serviceIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              <TouchableOpacity style={tv? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                onPress={()=>{setTv(!tv)}}>
                <Image source = {tvIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              <TouchableOpacity style={bathtub? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                onPress={()=>{setBath(!bathtub)}}>
                <Image source = {bathIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              <TouchableOpacity style={balcony? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                onPress={()=>{setBalcony(!balcony)}}>
                <Image source = {balconyIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>

              <View style={HomePageStyles.onButtonContainer}>
                <Image source={guestsIcon} style={HomePageStyles.iconButton}/>
                <Text style={HomePageStyles.textButton}>{guests}</Text>
              </View>
              <TouchableOpacity style={HomePageStyles.increaseButtonContainer}
                onPress={()=>{setGuests(guests === 8? 1 : guests + 1)}}>
                <Image source = {increaseIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              <TouchableOpacity style={HomePageStyles.decreaseButtonContainer}
                onPress={()=>{setGuests(guests === 1? 8 : guests - 1)}}>
                <Image source = {decreaseIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>


              <View style={HomePageStyles.onButtonContainer}>
                <Image source={bedIcon} style={HomePageStyles.iconButton}/>
                <Text style={HomePageStyles.textButton}>{beds}</Text>
              </View>
              <TouchableOpacity style={HomePageStyles.increaseButtonContainer}
                onPress={()=>{setBeds(beds === 4? Math.ceil(guests / 2) : beds + 1)}}>
                <Image source = {increaseIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              <TouchableOpacity style={HomePageStyles.decreaseButtonContainer}
                onPress={() => {
                  setBeds(beds === 1 
                    ? 4 
                    : (beds > Math.ceil(guests / 2) ? beds - 1 : Math.ceil(guests / 2))
                  );
                }}>
                <Image source = {decreaseIcon} style={HomePageStyles.iconButton}/>
              </TouchableOpacity>
              
              

         
              
            
          </View>

          
        </View>
        <View style={HomePageStyles.filterButtonsBottomContainer}>
          <TouchableOpacity style={isAnyFilterActive? HomePageStyles.applyButtonContainer : HomePageStyles.deselectButtonContainer}
            onPress={deselectAll} >
            <Text style={HomePageStyles.textButton}>Deselect All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomePageStyles.applyButtonContainer} onPress={onClose}>
            <Text style={HomePageStyles.textButton}>{isAnyFilterActive? "Apply" : "Back"}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </Modal>
  );
};

export default RoomFilter;
