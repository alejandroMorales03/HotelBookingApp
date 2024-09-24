import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TextInput,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Text,
} from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";
import GeneralStyles from "../../Styles/GeneralStyles";
import COLORS from "../../Constants/Constants";
import logo from "../../Assets/logo.jpeg";
import axios from "axios";

const Home = ({ navigation }) => {
  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [error, setError] = React.useState("");

  // Function to handle hotel search
  const HotelLookup = async (text) => {
    setQuery(text);
    setError(""); // Clear previous error messages
    try {
      if (text.length > 1) {
        const response = await axios.get(
          "http://10.108.80.30:8000/api/user-home/hotel-search",
          {
            params: { text },
          }
        )
        
        setSuggestions(response.data) 
      } else {
        setSuggestions([]); 
      }
    } catch (err) {
        console.error("Error during hotel search:", err.response ? err.response.data.message : err.message);
        setError(err.response ? err.response.data.message: "Search failed. Please try again.");
    }
  };

  return (
    <View style={HomePageStyles.fullPageContainer}>
      <View style={HomePageStyles.topContainer}>
        
        <TouchableOpacity style={GeneralStyles.userIconContainer}>
          <Image source={logo} style={GeneralStyles.userIcon} />
        </TouchableOpacity>

        
        <View style={GeneralStyles.searchBarContainer}>
          <TextInput
            placeholder="Where to next?"
            value={query}
            onChangeText={HotelLookup} 
            style={GeneralStyles.searchBar}
            placeholderTextColor={COLORS.Grey}
            autoCapitalize="none"
          />

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
    </View>
  );
};

export default Home;
