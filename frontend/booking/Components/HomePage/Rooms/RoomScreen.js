import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, FlatList, Text} from "react-native";
import HomePageStyles from "../../../Styles/HomePageStyles";
import axios from "axios";
import GeneralStyles from "../../../Styles/GeneralStyles";
import RoomFilterScreen from "./RoomFilterScreen"; // Adjust the import path as necessary
import logo from '../../../Assets/logo.jpeg'
import filter from '../../../Assets/filter.jpg'
import King from "../../../RoomPictures/King.jpeg";
import Queen from "../../../RoomPictures/Queen.jpeg";
import Suite from "../../../RoomPictures/Suite.jpeg";
import Twin from "../../../RoomPictures/Twin.jpeg";
import { Card, Button } from 'react-bootstrap/';

const roomImage = (roomType) => {
    let Image;

    if (roomType === "King room") {
        Image = King;
    } else if (roomType === "Queen room") {
        Image = Queen;
    } else if (roomType === "Suite") {
        Image = Suite;
    } else {
        Image = Twin;
    }

    return Image;
};
const toCheckout = (hotel, room) => {
    history.pushState('Checkout', {hotel,room});
}
const RoomScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [wifi, setWifi] = useState(false);
  const [minibar, setMiniBar] = useState(false);
  const [service, setRoomServ] = useState(false);
  const [tv, setTv] = useState(false);
  const [bathtub, setBath] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [isAnyFilterActive, setIsAnyFilterActive] = useState(false);
  const [guests, setGuests] = useState(1);
  const [beds, setBeds] = useState(1);
  const [rooms, setRooms] = React.useState([]);
  const [roomType, setRoomType] = React.useState("");
 

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

    //Suddenly not working. Check if its because line 70 and or 138 say sun instead of hotelName. 
    //OR it could be because I didnt connect to database
    const sun = "Sunshine Hotel"
   
    const RoomFilterHandler = async (hotelName, beds, bathtub, tv, guests, minibar, wifi, roomType, balcony) => {
        //console.log(sun, beds, guests);
    try {
        const response = await axios.get(

            `http://192.168.1.214:8000/api/user-home/rooms-list`,
            {
                params: {
                    hotelName : hotelName ? hotelName : null,//create a variable in Home.js and import it for here, so it shows rooms of the selected hotel
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
        setRooms(response.data);
        console.log(response.data);
      console.log("Filters applied successfully:", response.data);
    } catch (err) {
      console.error("Error during room filtering:", err.response ? err.response.data.message : err.message);
    }
  }

    return (
        <View style={HomePageStyles.homeFullPage}>
            <br></br>
            <View style={HomePageStyles.topContainer}>
                <TouchableOpacity style={GeneralStyles.userIconContainer}>
                    <Image source={logo} style={GeneralStyles.Icon} />
                </TouchableOpacity>


                <TouchableOpacity style={[HomePageStyles.filterIconContainer, {marginLeft: 20}]} onPress={() => setModalVisible(true)}>
                    <Image source={filter} style={HomePageStyles.buttonFilter} />
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
                    hotelName={sun}
                    roomType={roomType}
                />    

            <View style={HomePageStyles.bottomContainerRooms}>
                        <Text style={HomePageStyles.modalTitle}>Select a Room</Text>
                        <FlatList
                            style={GeneralStyles.ScrollView}
                            data={rooms}
                            horizontal={true}
                            keyExtractor={(item) => item.room_id}
                            renderItem={({ item }) => (
                                <Card className="border border-danger rounded mx-4" style={HomePageStyles.cardRoom}>
                                    <Image source={roomImage(item.room_type.toString())} style={HomePageStyles.imageRoom} />
                                    <Card.Body>
                                        <Card.Title>{item.roomType}</Card.Title>
                                        <View style={HomePageStyles.bulletList}>
                                            <View style={HomePageStyles.column}>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.room_type}</Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.num_beds} Beds </Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} Sleeps {item.guest_capacity} </Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_wifi ? "Free Wifi" : "Wifi Not Included"}</Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_balcony ? "Has Balcony" : "No Balcony"}</Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_tv ? "Television" : "No TV"}</Text>
                                                <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_bathtub ? "Includes Bathtub" : "No Bathtub"}</Text>
                                            </View>
                                        </View>
                                        <Button style={HomePageStyles.hotelButton} onClick={toCheckout(item)}>(nav to a booking page)</Button>

                                    </Card.Body>
                                </Card>
                            )}
                        />

                   

            </View>
           
        </View>

  );
};

export default RoomScreen;
