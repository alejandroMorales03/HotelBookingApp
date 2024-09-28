import React from "react";
import { View, TextInput, TouchableOpacity, Image, ImageBackground, FlatList, Text} from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";
import GeneralStyles from "../../Styles/GeneralStyles";
import COLORS from "../../Constants/Constants";
import logo from "../../Assets/logo.jpeg";
import axios from "axios";
import { Card, Button, CardBody} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import burger from '../../HotelPictures/item-3.jpeg';
import HotelBackground from '../../HotelPictures/SearchResultsBackground.jpg';

//import HotelPictures from "../../booking";
import filter from '../../Assets/filter.jpg';

const Home = ({ navigation }) => {
  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [error, setError] = React.useState("");

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
    
    
    //Create a function that send another query to the Hotel table to find a hotel matching HotelLookUp

  return (
    <View style={GeneralStyles.fullPageContainer}>
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

          <TouchableOpacity style={GeneralStyles.filterIconContainer} onPress={() => { /* Handle filter action here */ }}>
            <Image source={filter} style={GeneralStyles.Icon} />
          </TouchableOpacity>
        </View>
            
              {/* 
                  <FlatList
                  style={GeneralStyles.bottomContainer}
                  data={suggestions}
                  keyExtractor={(item) => item.hotel_name}
                  renderItem={({ item }) => (
                      <TouchableOpacity>

                          <Card className="border border-danger" style={{ width: '24rem' }}>
                              <Card.Img variant="top" src={require('./item-2-adjustment.jpeg')} style={HomePageStyles.image} />
                              <Card.Body>
                                  <Card.Title>{item.hotel_name}</Card.Title>
                                  <Card.Text>
                                      Card text
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>

                          <Text style={GeneralStyles.suggestion}>{item.hotel_name}</Text>
                          <Text style={GeneralStyles.suggestion}>{item.has_pool ? 'Has a pool' : 'No pool'}</Text>

                      </TouchableOpacity>
                  )}

              /> */}
       
        
          </View>

          <View style={HomePageStyles.bottomContainer}>

              <Text style={HomePageStyles.header}>Hotels in {query}</Text>
              <FlatList
                  style={GeneralStyles.ScrollView}
                  data={suggestions}
                  horizontal={true}
                  keyExtractor={(item) => item.hotel_name}
                  renderItem={({ item }) => (
                      <Card className="border border-danger rounded mx-4" style={HomePageStyles.card}>
                              <Image source={burger} style={HomePageStyles.image} />
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
                              <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                             

                          </Card>

                     
                  )}

              />
          </View>
          {/* }
          <View style={HomePageStyles.bottomContainer}>
              <FlatList
                  style={HomePageStyles.ScrollView}
                  data={suggestions}
                  keyExtractor={(item) => item.hotel_name}
                  renderItem={({ item }) => (
                      <View style={HomePageStyles.itemContainer}>
                          <Card className="border border-danger" style={{ width: '24rem' }  }>
                              <Card.Img variant="top" src={require('./item-2-adjustment.jpeg')} style={HomePageStyles.image} />
                              <Card.Body>
                                  <Card.Title>{item.hotel_name}</Card.Title>
                                  <Card.Text>
                                      Card text
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </Card>
                      </View>
                  )}

              /> 


          </View> */}
          </View>

  );
};

export default Home;
