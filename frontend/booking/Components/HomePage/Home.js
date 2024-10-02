import React from "react";
import { View, TextInput, TouchableOpacity, Image, FlatList, Text } from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";
import GeneralStyles from "../../Styles/GeneralStyles";
import COLORS from "../../Constants/Constants";
import logo from "../../Assets/logo.jpeg";
import axios from "axios";
import filter from '../../Assets/filter.jpg';


const Home = ({ navigation }) => {
  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [error, setError] = React.useState("");
  const [isModalVisible, setModalVisible] = React.useState(false);

  const HotelLookup = async (text) => {
    setQuery(text);
    setError("");
    try {
      if (text.length > 1) {
        const response = await axios.get(
          "http://10.108.80.30:8000/api/user-home/hotel-search",
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

        <FlatList
          style={GeneralStyles.suggestionList}
          data={suggestions}
          keyExtractor={(item) => item.hotel_name}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text style={GeneralStyles.suggestion}>{item.hotel_name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      
    </View>
  );
};

export default Home;
