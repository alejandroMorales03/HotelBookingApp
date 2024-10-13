import React, { useEffect } from "react";
import { Modal, TouchableOpacity, Text, View, Image, FlatList } from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";
import GeneralStyles from "../../Styles/GeneralStyles";
import wifiIcon from "../../Assets/wifi.png";
import minibarIcon from "../../Assets/minibar.png";
import serviceIcon from "../../Assets/service.png";
import tvIcon from "../../Assets/tv.png";
import bathIcon from "../../Assets/bath.png";
import balconyIcon from "../../Assets/balcony.png";
import guestsIcon from "../../Assets/guests.png";
import increaseIcon from "../../Assets/increase.png";
import decreaseIcon from "../../Assets/decrease.png";
import bedIcon from "../../Assets/bed.png";
import sampleImage from '../../HotelPictures/item-3.jpeg';
import roomSample from '../../HotelPictures/room-suite.jpg';
import filter from '../../Assets/filter.jpg';
import { Card, Button } from 'react-bootstrap/';
import axios from "axios";



const RoomScreen = ({ visible, onClose }) => {
  const [wifi, setWifi] = React.useState(false);
  const [minibar, setMiniBar] = React.useState(false);
  const [service, setRoomServ] = React.useState(false);
  const [tv, setTv] = React.useState(false);
  const [bathtub, setBath] = React.useState(false);
  const [balcony, setBalcony] = React.useState(false);
  const [isAnyFilterActive, setIsAnyFilterActive] = React.useState(false);
  const [guests, setGuests] = React.useState(1);
  const [beds, setBeds] = React.useState(1);
   const [roomID, setRoomID] = React.useState(1);
    const [roomType, setRoomType] = React.useState("");
    const [error, setError] = React.useState("");
    const [filterModal, setFilterModal] = React.useState(true);
    const [rooms, setRooms] = React.useState([]);
    const [query, setQuery] = React.useState("");


  useEffect(() => {
    if (
      wifi ||
      minibar ||
      service ||
      tv ||
      bathtub ||
      balcony ||
      guests > 1 ||
      beds > 1
    ) {
      setIsAnyFilterActive(true);
    } else {
      setIsAnyFilterActive(false);
    }
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
    let hotelName = "Sunshine Hotel";
    const RoomFilterHandler = async (hotelName, beds, bathtub, tv, guests, minibar, wifi, roomType, balcony) => { 
    

        try {
            const response = await axios.get(
            
                `http://192.168.1.214:8000/api/user-home/rooms-list`,
                {
                    params: {
                        hotelName, //create a variable in Home.js and import it for here, so it shows rooms of the selected hotel
                        numBeds: beds,
                        hasBathtub: bathtub ? bathtub : null,
                        hasTV: tv ? tv : null,
                        guestCapacity: guests,
                        hasMinibar: minibar ? minibar : null,
                        hasWifi: wifi ? wifi : null,
                        roomType: roomType == "" ? null : roomType,
                        hasBalcony: balcony ? balcony : null
                    }
                
                },
            );
            console.log("response assigned"),
            setRooms(response.data);
         // navigation.navigate("Home");
          //resetFields();
        } catch (err) {
          console.error(
            "Error during room filtering:",
            err.response ? err.response.data.message : err.message
          );
          setError(
            err.response
              ? err.response.data.message
              : "Room filtering failed. Please try again."
          );
            }
        console.log("end of filterHandler");
    }

    return (

        <View stlye={HomePageStyles.overlay}>
        <br></br>
            <TouchableOpacity style={HomePageStyles.filterIconContainer} onPress={() => setFilterModal(!filterModal)}>
                <Image source={filter} style={HomePageStyles.buttonFilter} />
            </TouchableOpacity>

            <Modal visible={filterModal} transparent={true} animationType="slide" onRequestClose={() => {
                setFilterModal(false);
            }} >
      <View style={HomePageStyles.overlay}>
        <View style={HomePageStyles.filterContainer}>
          <Text style={HomePageStyles.homeSmallTitle}>
            Customize your Experience
          </Text>
          <View style={HomePageStyles.optionsContainer}>
            <TouchableOpacity
              style={
                wifi
                  ? HomePageStyles.onButtonContainer
                  : HomePageStyles.offButtonContainer
              }
              onPress={() => {
                setWifi(!wifi);
              }}
            >
              <Image source={wifiIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                minibar
                  ? HomePageStyles.onButtonContainer
                  : HomePageStyles.offButtonContainer
              }
              onPress={() => {
                setMiniBar(!minibar);
              }}
            >
              <Image source={minibarIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                service
                  ? HomePageStyles.onButtonContainer
                  : HomePageStyles.offButtonContainer
              }
              onPress={() => {
                setRoomServ(!service);
              }}
            >
              <Image source={serviceIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                tv
                  ? HomePageStyles.onButtonContainer
                  : HomePageStyles.offButtonContainer
              }
              onPress={() => {
                setTv(!tv);
              }}
            >
              <Image source={tvIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                bathtub
                  ? HomePageStyles.onButtonContainer
                  : HomePageStyles.offButtonContainer
              }
              onPress={() => {
                setBath(!bathtub);
              }}
            >
              <Image source={bathIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                balcony
                  ? HomePageStyles.onButtonContainer
                  : HomePageStyles.offButtonContainer
              }
              onPress={() => {
                setBalcony(!balcony);
              }}
            >
              <Image source={balconyIcon} style={HomePageStyles.iconButton} />
            </TouchableOpacity>

            <View style={HomePageStyles.onButtonContainer}>
              <Image source={guestsIcon} style={HomePageStyles.iconButton} />
            </View>
            <View style={HomePageStyles.numericalSettingsContainer}>
              <TouchableOpacity
                onPress={() => setGuests(guests === 1 ? 8 : guests - 1)}
              >
                <Image
                  source={decreaseIcon}
                  style={HomePageStyles.numericalButton}
                />
              </TouchableOpacity>
              <Text style={[HomePageStyles.numericalFilterText]}>{guests}</Text>
              <TouchableOpacity
                onPress={() => setGuests(guests === 8 ? 1 : guests + 1)}
              >
                <Image
                  source={increaseIcon}
                  style={HomePageStyles.numericalButton}
                />
              </TouchableOpacity>
            </View>
            <View style={HomePageStyles.onButtonContainer}>
              <Image source={bedIcon} style={HomePageStyles.iconButton} />
            </View>
            <View style={HomePageStyles.numericalSettingsContainer}>
              <TouchableOpacity
                onPress={() => setBeds(beds === 1 ? 4 : Math.ceil(guests / 2))}
              >
                <Image
                  source={decreaseIcon}
                  style={HomePageStyles.numericalButton}
                />
              </TouchableOpacity>
              <Text style={[HomePageStyles.numericalFilterText]}>{beds}</Text>
              <TouchableOpacity
                onPress={() =>
                  setBeds(beds === 4 ? Math.ceil(guests / 2) : beds + 1)
                }
              >
                <Image
                  source={increaseIcon}
                  style={HomePageStyles.numericalButton}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={HomePageStyles.filterButtonsBottomContainer}>
          <TouchableOpacity
            style={
              isAnyFilterActive
                ? HomePageStyles.applyButtonContainer
                : HomePageStyles.deselectButtonContainer
            }
            onPress={deselectAll}
          >
            <Text style={HomePageStyles.textButton}>Deselect All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={HomePageStyles.applyButtonContainer}
            onPress={async () => {
              if (isAnyFilterActive) {
                  await RoomFilterHandler(hotelName, beds, bathtub, tv, guests, minibar, wifi, roomType, balcony);
              }
                setFilterModal(false);
            }}
          >
            <Text style={HomePageStyles.textButton}>
              {isAnyFilterActive ? "Apply" : "Back"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
            </Modal>

            {/*---------Room Info Display-------------- */ }
            <View style={HomePageStyles.modalContainer}>
                <View style={HomePageStyles.modalContent}>
                    <Text style={HomePageStyles.modalTitle}>Select a Room</Text>
                    <FlatList
                        style={GeneralStyles.ScrollView}
                        data={rooms}
                        horizontal={true}
                        keyExtractor={(item) => item.room_id}
                        renderItem={({ item }) => (
                            <Card className="border border-danger rounded mx-4" style={HomePageStyles.cardRoom}>
                                <Image source={roomSample} style={HomePageStyles.imageRoom} />
                                <Card.Body>
                                    <Card.Title>{item.roomType}</Card.Title>
                                    <View style={HomePageStyles.bulletList}>                                       
                                        <View style={HomePageStyles.column}>
                                            <Text stlle={HomePageStyles.bulletPoint}>{'\u2022'} {item.room_num} room number </Text>
                                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.num_beds} Beds </Text>
                                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} Sleeps {item.guest_capacity} </Text>
                                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_wifi ? "Free Wifi" : "Wifi Not Included"}</Text>
                                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_balcony ? "Has Balcony" : "No Balcony"}</Text>
                                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_tv? "Television" : "No TV"}</Text>
                                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_bathtub ? "Includes Bathtub" : "No Bathtub"}</Text>
                                         </View>
                                    </View>
                                    <br></br>
                                    <View style={{ flex: 1 }} />
                                    <Button style={HomePageStyles.hotelButton}>(nav to a booking page)</Button>

                                </Card.Body>
                            </Card>
                        )}
                    />

                </View>
            </View>
    
    </View>
    
  );
};

export default RoomScreen;
