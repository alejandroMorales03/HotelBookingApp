import React from "react";
import { Modal, TouchableOpacity, Text, View, Image } from "react-native";
import HomePageStyles from "../../../Styles/HomePageStyles";
import wifiIcon from "../../../Assets/wifi.png";
import minibarIcon from "../../../Assets/minibar.png";
import tvIcon from "../../../Assets/tv.png";
import bathIcon from "../../../Assets/bath.png";
import balconyIcon from "../../../Assets/balcony.png";
import guestsIcon from "../../../Assets/guests.png";
import increaseIcon from "../../../Assets/increase.png";
import decreaseIcon from "../../../Assets/decrease.png";
import bedIcon from "../../../Assets/bed.png";

const RoomFilterScreen = ({
  visible,
  onClose,
  wifi,
  setWifi,
  minibar,
  setMiniBar,
  tv,
  setTv,
  bathtub,
  setBath,
  balcony,
  setBalcony,
  guests,
  setGuests,
  beds,
  setBeds,
  isAnyFilterActive,
  deselectAll,
  RoomFilterHandler,
}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={HomePageStyles.overlay}>
        <View style={HomePageStyles.filterContainer}>
          <Text style={HomePageStyles.homeSmallTitle}>
            Customize your Experience
          </Text>
          <View style={HomePageStyles.optionsContainer}>
            <TouchableOpacity
              style={wifi ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
              onPress={() => setWifi(!wifi)}
            >
              <Image source={wifiIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={minibar ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
              onPress={() => setMiniBar(!minibar)}
            >
              <Image source={minibarIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={tv ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
              onPress={() => setTv(!tv)}
            >
              <Image source={tvIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={bathtub ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
              onPress={() => setBath(!bathtub)}
            >
              <Image source={bathIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={balcony ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
              onPress={() => setBalcony(!balcony)}
            >
              <Image source={balconyIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>

            <View style={HomePageStyles.onButtonContainer}>
              <Image source={guestsIcon} style={HomePageStyles.iconButton} />
            </View>
            <View style={HomePageStyles.numericalSettingsContainer}>
              <TouchableOpacity onPress={() => setGuests(guests === 1 ? 8 : guests - 1)}>
                <Image source={decreaseIcon} style={HomePageStyles.numericalButton} />
              </TouchableOpacity>
              <Text style={HomePageStyles.numericalFilterText}>{guests}</Text>
              <TouchableOpacity onPress={() => setGuests(guests === 8 ? 1 : guests + 1)}>
                <Image source={increaseIcon} style={HomePageStyles.numericalButton} />
              </TouchableOpacity>
            </View>
            <View style={HomePageStyles.onButtonContainer}>
              <Image source={bedIcon} style={HomePageStyles.iconButton} />
            </View>
            <View style={HomePageStyles.numericalSettingsContainer}>
              <TouchableOpacity onPress={() => setBeds(beds === 1 ? 4 : Math.ceil(guests / 2))}>
                <Image source={decreaseIcon} style={HomePageStyles.numericalButton} />
              </TouchableOpacity>
              <Text style={HomePageStyles.numericalFilterText}>{beds}</Text>
              <TouchableOpacity onPress={() => setBeds(beds === 4 ? Math.ceil(guests / 2) : beds + 1)}>
                <Image source={increaseIcon} style={HomePageStyles.numericalButton} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={HomePageStyles.filterButtonsBottomContainer}>
          <TouchableOpacity
            style={isAnyFilterActive ? HomePageStyles.applyButtonContainer : HomePageStyles.deselectButtonContainer}
            onPress={deselectAll}
          >
            <Text style={HomePageStyles.textButton}>Deselect All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={HomePageStyles.applyButtonContainer}
            onPress={async () => {
              if (isAnyFilterActive) {
                await RoomFilterHandler();
              }
              onClose(); 
            }}
          >
            <Text style={HomePageStyles.textButton}>
              {isAnyFilterActive ? "Apply" : "Back"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RoomFilterScreen;
