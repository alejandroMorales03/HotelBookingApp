import React, { useState } from "react";
import { Modal, TouchableOpacity, Text, View, Image, Button } from "react-native";
import Calendar from "../Custom/Calendar";
import HomePageStyles from "../../Styles/HomePageStyles";
import poolIcon from '../../Assets/pool.png';
import gymIcon from '../../Assets/gym.png';
import serviceIcon from '../../Assets/service.png';
import oceanViewIcon from '../../Assets/ocean.png';
import petFriendlyIcon from '../../Assets/pet.png';
import calendarIcon from '../../Assets/calendar.png';

const HotelFiltering = ({
  visible,
  setModalVisible,
  pool,
  setPool,
  gym,
  setGym,
  service,
  setService,
  oceanView,
  setOceanView,
  petFriendly,
  setPetFriendly,
  onApplyFilters,
  HotelLookup, // Add this prop
  query, // Add this prop
  isCalendarModalVisible,
  setCalendarModalVisible,
  dates,
  setDates
}) => {
  const isAnyFilterActive = pool || gym || service || oceanView || petFriendly;

  const toggleFilter = (filterSetter) => {
      filterSetter(prev => {
          const newValue = !prev;
          HotelLookup(query); // Call HotelLookup to refresh suggestions
          return newValue;
      });
  };

  const deselectAll = () => {
      setPool(false);
      setGym(false);
      setService(false);
      setOceanView(false);
      setPetFriendly(false);
      HotelLookup(query); // Refresh suggestions after deselecting all
  };


  return (
      <Modal visible={visible} transparent={true} animationType="slide">
          <View style={HomePageStyles.overlay}>
              <View style={HomePageStyles.filterContainer}>
                  <Text style={HomePageStyles.homeSmallTitle}>Customize your Experience</Text>
                  <View style={HomePageStyles.optionsContainer}>
                      <TouchableOpacity
                          style={pool ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                          onPress={() => toggleFilter(setPool)}
                      >
                          <Image source={poolIcon} style={HomePageStyles.iconButton} />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={gym ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                          onPress={() => toggleFilter(setGym)}
                      >
                          <Image source={gymIcon} style={HomePageStyles.iconButton} />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={service ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                          onPress={() => toggleFilter(setService)}
                      >
                          <Image source={serviceIcon} style={HomePageStyles.iconButton} />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={oceanView ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                          onPress={() => toggleFilter(setOceanView)}
                      >
                          <Image source={oceanViewIcon} style={HomePageStyles.iconButton} />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={petFriendly ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                          onPress={() => toggleFilter(setPetFriendly)}
                      >
                          <Image source={petFriendlyIcon} style={HomePageStyles.iconButton} />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={isCalendarModalVisible ? HomePageStyles.onButtonContainer : HomePageStyles.offButtonContainer}
                          onPress={() => setCalendarModalVisible(true)}
                      >
                          <Image source={calendarIcon} style={HomePageStyles.iconButton} />
                      </TouchableOpacity>
                  </View>
                  <View>
                    <Calendar
                     isModalVisible={isCalendarModalVisible}
                     setModalVisible={setCalendarModalVisible}
                     dates={dates}
                     setDates={setDates}>
                    </Calendar>
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
                      onPress={() => {
                          if (isAnyFilterActive) {
                              onApplyFilters();
                          }
                          setModalVisible(false);
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


export default HotelFiltering;
