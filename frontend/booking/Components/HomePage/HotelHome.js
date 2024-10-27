import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, FlatList, Text, Image } from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";
import GeneralStyles from "../../Styles/GeneralStyles";
import COLORS from "../../Constants/Constants";
import sampleImage from '../../HotelPictures/item-3.jpeg';

const HotelHome = ({ navigation }) => {
    const [query, setQuery] = useState("");
    const [guests, setGuests] = useState(1);
    
<<<<<<< HEAD
    // Initial recommended hotels datax
=======
    // Initial recommended hotels data
>>>>>>> main
    const initialSuggestions = [
        { id: 1, hotel_name: "Hotel California", has_pool: true, has_gym: true, ocean_view: true, pet_friendly: true },
        { id: 2, hotel_name: "The Grand Budapest", has_pool: false, has_gym: true, ocean_view: false, pet_friendly: false }
    ];

    const [suggestions, setSuggestions] = useState(initialSuggestions);

    const searchHotels = () => {
        // You can update this logic to search based on the query
        // For now, it just resets to the initial recommendations
        setSuggestions(initialSuggestions);
    };

    const directToRoom = (hotelName) => {
        navigation.navigate("RoomScreen", { data: hotelName });
    };

    return (
        <View style={HomePageStyles.homeFullPage}>
            
            {/* Top Section: Search Bar and Guest Input */}
            <View style={HomePageStyles.topContainer}>
                <View style={GeneralStyles.searchBarContainer}>
                    <TextInput
                        style={GeneralStyles.searchBar}
                        placeholder="Where to next?"
                        value={query}
                        onChangeText={setQuery}
                        placeholderTextColor={COLORS.feedback.PlaceHolderTextColor}
                    />
                </View>
            </View>

            {/* Guest Number Input Section */}
            <View style={HomePageStyles.searchContainer}>
                <Text style={HomePageStyles.header}>No. of Guests</Text>
                <View style={GeneralStyles.guestInputContainer}>
                    <TouchableOpacity onPress={() => setGuests(Math.max(guests - 1, 1))}>
                        <Text style={GeneralStyles.guestButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={GeneralStyles.guestNumberText}>{guests}</Text>
                    <TouchableOpacity onPress={() => setGuests(guests + 1)}>
                        <Text style={GeneralStyles.guestButton}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Search Button */}
            <TouchableOpacity style={HomePageStyles.searchButton} onPress={searchHotels}>
                <Text style={HomePageStyles.searchButtonText}>Search</Text>
            </TouchableOpacity>

            {/* Recommended Hotels Section */}
            <View style={HomePageStyles.bottomContainer}>
                <Text style={HomePageStyles.header}>Recommended Hotels {query || "your area"}</Text>
                <FlatList
                    style={GeneralStyles.ScrollView}
                    data={suggestions}
                    horizontal={true}
                    keyExtractor={(item) => item.hotel_name}
                    renderItem={({ item }) => (
                        <View style={HomePageStyles.card}>
                            <Image source={sampleImage} style={HomePageStyles.image} />
                            <View style={HomePageStyles.bottomContainer}>
                                <Text style={HomePageStyles.header}>{item.hotel_name}</Text>
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
                                <TouchableOpacity style={HomePageStyles.hotelButton} onPress={() => directToRoom(item.hotel_name)}>
                                    <Text style={HomePageStyles.textButton}>Select a Room</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}; 

export default HotelHome;