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
import { Card, Button } from 'react-bootstrap/';


const RoomScreen = ({ route ,visible, onClose }) => {
  const [wifi, setWifi] = React.useState(false);
  const [minibar, setMiniBar] = React.useState(false);
  const [service, setRoomServ] = React.useState(false);
  const [tv, setTv] = React.useState(false);
  const [bathtub, setBath] = React.useState(false);
  const [balcony, setBalcony] = React.useState(false);
  const [isAnyFilterActive, setIsAnyFilterActive] = React.useState(false);
  const [guests, setGuests] = React.useState(1);
  const [beds, setBeds] = React.useState(1);

  //Consts made by Adam
    const [error, setError] = React.useState("");
    const [filterModal, setFilterModal] = React.useState(true);
    const [rooms, setRooms] = React.useState([]);
    //const { data } = route.params; //catches hotel name sent from Home.js... I think 

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
    let hotelName = route.params; // Name of hotel from HotelScreen.js passed to this variable
  async function RoomFilterHandler() {
    try {
        const response = await axios.post(
            `http://192.168.1.214:8000/api/user-home/rooms-list`,
            {
                /*
                hotelName, //create a variable in Home.js and import it for here, so it shows rooms of the selected hotel
                beds,
                bathtub,
                tv,
                guests,
                minibar,
                wifi,
                roomType,
                balcony
                //-----
                */
                wifi,
                minibar,
                service,
                tv,
                bathtub,
                balcony,
                guests,
                
            },
        );
        setRooms(response.data);

      navigation.navigate("Home");
      resetFields();
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
  }

    return (

        <View stlye={HomePageStyles.overlay}>
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
                 await RoomFilterHandler();
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

            <View style={HomePageStyles.modalContainer}>
                <View style={HomePageStyles.modalContent}>
                    <Text style={HomePageStyles.modalTitle}>Select a Room</Text>
                    <FlatList
                        style={GeneralStyles.ScrollView}
                        data={rooms}
                        horizontal={true}
                        keyExtractor={(item) => item.room_num}
                       // keyExtractor={(item) => item.hotel_name}
                        renderItem={({ item }) => (
                            <Card className="border border-danger rounded mx-4" style={HomePageStyles.card}>
                                <Image source={sampleImage} style={HomePageStyles.image} />
                                <Card.Body>
                                    <Card.Title>{item.hotel_name}</Card.Title>
                                    <View style={HomePageStyles.bulletList}>
                                        <View style={HomePageStyles.row}>
                                            <View style={HomePageStyles.column}>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_balcony ? "Has a pool" : "No pool"}</Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_tv ? "Has Gym" : "No Gym"}</Text>
                                                <Text style={HomePageStyles.bulletPoint}>{item.num_beds}</Text>
                                            </View>
                                            <View style={HomePageStyles.column}>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.guest_capcacity}</Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} { item.num_beds }</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <br></br>
                                    <View style={{ flex: 1 }} />
                                    <Button style={HomePageStyles.hotelButton} onPress={() => setRoomModalVisible(true)}>Book Now</Button>

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
