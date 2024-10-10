import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, TextInput} from "react-native";
import HomePageStyles from "../../../Styles/HomePageStyles";
import axios from "axios";
import GeneralStyles from "../../../Styles/GeneralStyles";
import RoomFilterScreen from "./RoomFilterScreen"; // Adjust the import path as necessary
import logo from '../../../Assets/logo.jpeg'
import filter from '../../../Assets/filter.jpg'
const RoomScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [minibar, setMiniBar] = useState(false);
  const [service, setRoomServ] = useState(false);
  const [tv, setTv] = useState(false);
  const [bathtub, setBath] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [isAnyFilterActive, setIsAnyFilterActive] = useState(false);
  const [guests, setGuests] = useState(1);
  const [beds, setBeds] = useState(1);

  useEffect(() => {
    setIsAnyFilterActive(
      wifi || minibar || service || tv || bathtub || balcony || guests > 1 || beds > 1
    );
  }, [wifi, minibar, service, tv, bathtub, balcony, guests, beds]);

  useEffect(() => {
    setBeds(Math.ceil(guests / 2));
  }, [guests]);

  const deselectAll = () => {
    setWifi(false);
    setMiniBar(false);
    setRoomServ(false);
    setTv(false);
    setBath(false);
    setBalcony(false);
    setGuests(1);
    setBeds(1);
  };
  const sun = "Sunshine"
  const RoomFilterHandler = async () => {
    try {
      const response = await axios.post(
        `http://192.168.0.17:8000/api/user-home/rooms-list`, 
        {
          sun,
          beds,
          bathtub,
          tv,
          guests,
          minibar,
          wifi,
          balcony,
          service,
        }
      );
      console.log("Filters applied successfully:", response.data);
    } catch (err) {
      console.error("Error during room filtering:", err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <View style={HomePageStyles.homeFullPage}>
      <View style={HomePageStyles.topContainer}>
        
        <TouchableOpacity style={GeneralStyles.userIconContainer}>
          <Image source={logo} style={GeneralStyles.Icon} />
        </TouchableOpacity>

        

          <TouchableOpacity style={GeneralStyles.filterIconContainer} onPress={() => setModalVisible(true)}>
            <Image source={filter} style={GeneralStyles.Icon} />
          </TouchableOpacity>
        

      </View>
      
      <RoomFilterScreen
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        wifi={wifi}
        setWifi={setWifi}
        minibar={minibar}
        setMiniBar={setMiniBar}
        service={service}
        setRoomServ={setRoomServ}
        tv={tv}
        setTv={setTv}
        bathtub={bathtub}
        setBath={setBath}
        balcony={balcony}
        setBalcony={setBalcony}
        guests={guests}
        setGuests={setGuests}
        beds={beds}
        setBeds={setBeds}
        isAnyFilterActive={isAnyFilterActive}
        deselectAll={deselectAll}
        RoomFilterHandler={RoomFilterHandler}
      />
    </View>
  );
};

export default RoomScreen;
