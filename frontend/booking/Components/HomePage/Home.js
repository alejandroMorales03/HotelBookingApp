import React from "react";
import { View, TextInput, TouchableOpacity, Image, FlatList, Text, Modal} from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";
import GeneralStyles from "../../Styles/GeneralStyles";
import COLORS from "../../Constants/Constants";
import logo from "../../Assets/logo.jpeg";
import axios from "axios";
import { Card, Button, CardBody} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import sampleImage from '../../HotelPictures/item-3.jpeg';
import filter from '../../Assets/filter.jpg';
//import RoomFilter from "./RoomFilter";


const Home = ({ navigation }) => {
    const [query, setQuery] = React.useState("");
    const [suggestions, setSuggestions] = React.useState([]);
    const [error, setError] = React.useState("");
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [roomModal, setRoomModalVisible] = React.useState(false);
   

   

  const HotelLookup = async (text) => {
    setQuery(text);
    setError("");
    try {
      if (text.length > 1) {
          const response = await axios.get( "http://192.168.1.214:8000/api/user-home/hotel-search",

          {
            params: { text },
          }
        );
        setSuggestions(response.data);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Error during hotel search:", err.response ? err.response.data.message : err.message);
      setError(err.response ? err.response.data.message : "Search failed. Please try again.");
    }
    };
    const directToRoom = (hotelName) => {
        
        navigation.navigate("RoomScreen", { data: hotelName }); //send name of selected hotel to RoomScreen to be queried
    }
   

  return (
    <View style={HomePageStyles.homeFullPage}>
      <View style={HomePageStyles.topContainer}>
        
        <TouchableOpacity style={GeneralStyles.userIconContainer}>
          <Image source={logo} style={GeneralStyles.Icon} />
        </TouchableOpacity>

        <View style={GeneralStyles.searchBarContainer}>
          <TextInput
            placeholder="Where to next?"
            value={query}
            onChangeText={HotelLookup} 
            style={GeneralStyles.searchBar}
            placeholderTextColor={COLORS.feedback.PlaceHolderTextColor}
            autoCapitalize="none"
          />

          <TouchableOpacity style={GeneralStyles.filterIconContainer} onPress={() => setModalVisible(true)}>
            <Image source={filter} style={GeneralStyles.Icon} />
          </TouchableOpacity>
        </View>

      </View>


       <View style={[HomePageStyles.bottomContainer, HomePageStyles.shadowProp]}>
              <Text style={HomePageStyles.header}>Hotels in {query}</Text>
              <FlatList
                  style={GeneralStyles.ScrollView}
                  data={suggestions}
                  horizontal={true}
                  keyExtractor={(item) => item.hotel_name}
                  renderItem={({ item }) => (
                      <Card className="border border-danger rounded mx-4" style={HomePageStyles.cardHotel}>
                          <Image source={sampleImage} style={HomePageStyles.imageHotel} />
                          <Card.Body>
                              <Card.Title>{item.hotel_name}</Card.Title>
                              <View style={HomePageStyles.bulletList}>
                                  <View style={HomePageStyles.row}>
                                      <View style={HomePageStyles.column}>
                                          <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_pool ? "Has a pool" : "No pool"}</Text>
                                          <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_gym ? "Has Gym" : "No Gym"}</Text>
                                          <Text style={HomePageStyles.bulletPoint}>{item.ocean_view ? "\u2022 Ocean View" : ""}</Text>
                                      </View>
                                      <View style={HomePageStyles.column}>
                                          <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.pet_friendly ? "Pet Friendly" : "No Pets Allowed"}</Text>
                                          <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.room_service ? "Room Service" : "No Room Service"}</Text></View>
                                  </View>
                              </View>
                              <br></br>
                              <View style={{ flex: 1 }} />
                              <Button style={HomePageStyles.hotelButton} onClick={() => directToRoom(item.hotel_name)}>Select a Room</Button>

                          </Card.Body>
                      </Card>
                  )}
              />
          </View>

          {/* Delete following Modal for room display, content moved to RoomScreen.js*/ }
          
     <Modal
        animationType="slide"
        transparent={true}
        visible={roomModal}
        onRequestClose={() => {
            setRoomModalVisible(false); // Close the modal on back press
           }}
          >
           <View style={HomePageStyles.modalContainer}>
                  <View style={HomePageStyles.modalContent}>
                      <Button style={HomePageStyles.closeButton} onClick={() => setRoomModalVisible(false)}>X</Button>
                  <Text style={HomePageStyles.modalTitle}>Select a Room</Text>

                  <FlatList
                      style={GeneralStyles.ScrollView}
                      data={suggestions}
                      horizontal={true}
                      keyExtractor={(item) => item.hotel_name}
                      renderItem={({ item }) => (
                      <Card className="border border-danger rounded mx-4" style={HomePageStyles.card}>
                          <Image source={sampleImage} style={HomePageStyles.image} />
                          <Card.Body>
                              <Card.Title>{item.hotel_name}</Card.Title>
                              <View style={HomePageStyles.bulletList}>
                                  <View style={HomePageStyles.row}>
                                      <View style={HomePageStyles.column}>
                                          <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_pool ? "Has a pool" : "No pool"}</Text>
                                          <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.has_gym ? "Has Gym" : "No Gym"}</Text>
                                          <Text style={HomePageStyles.bulletPoint}>{item.ocean_view ? "\u2022 Ocean View" : ""}</Text>
                                      </View>
                                      <View style={HomePageStyles.column}>
                                          <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.pet_friendly ? "Pet Friendly" : "No Pets Allowed"}</Text>
                                              <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {item.room_service ? "Room Service" : "No Room Service"}</Text>
                                      </View>
                                  </View>
                              </View>
                              <br></br>
                              <View style={{ flex: 1 }} />
                                  <Button style={HomePageStyles.hotelButton} onClick={() => directToRoom(item.hotel_name)}>Book Now</Button>

                          </Card.Body>
                      </Card>
                  )}
              />
                   
                </View>
            </View>
          </Modal>

         

          {/* The RoomFilter modal should only appear when isModalVisible is true 
      <RoomFilter visible={isModalVisible} onClose={() => setModalVisible(false)} />*/}
    </View>
  );
};

export default Home;
