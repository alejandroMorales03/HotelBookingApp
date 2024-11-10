import { View, TouchableOpacity, Image, ScrollView, Text} from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";
import GeneralStyles from "../../Styles/GeneralStyles";
import logo from '../../Assets/logo.jpeg';
import wifiIcon from "../../Assets/wifi.png";
import minibarIcon from "../../Assets/minibar.png";
import tvIcon from "../../Assets/tv.png";
import bathIcon from "../../Assets/bath.png";
import balconyIcon from "../../Assets/balcony.png";
import guestsIcon from "../../Assets/guests.png";
import increaseIcon from "../../Assets/increase.png";
import decreaseIcon from "../../Assets/decrease.png";
import bedIcon from "../../Assets/bed.png";
import poolIcon from '../../Assets/pool.png';
import gymIcon from '../../Assets/gym.png';
import serviceIcon from '../../Assets/service.png';
import oceanViewIcon from '../../Assets/ocean.png';
import petFriendlyIcon from '../../Assets/pet.png';
import Home from "./HotelScreen";

/*
Page will have 3 sections:
1) Personal data (name, email, and anything else) -Jonathan
2) Booking data (room, hotel, and dates info) - Adam
3) Payment data (credit card number, cvv, logic to validate) - Alejandro
*/

const CheckoutScreen = () => {

   // const data = props.location.state; //SHOULD catch passed room and hotel
    //const hotel = data.hotel;
    //const room = data.room;
    const hotel = {
        hotel_name: "Seaside Resort",
        has_pool: true,
        has_gym: true,
        ocean_view: true,
        pet_friendly: false,
        has_room_service: true
    };
    
    const room = {
        room_type: "Suite",
        num_beds: 2,
        guest_capacity: 4,
        has_wifi: true,
        has_balcony: true,
        has_tv: true,
        has_bathtub: false
    };

/*

                        <View style={HomePageStyles.column}>
                            <Text style ={GeneralStyles.customSmallTitle}>Hotel Amenities</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {hotel.has_pool ? "Has a pool" : "No pool"}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {hotel.has_gym ? "Has Gym" : "No Gym"}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{hotel.ocean_view ? "\u2022 Ocean View" : ""}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {hotel.pet_friendly ? "Pet Friendly" : "No Pets Allowed"}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {hotel.has_room_service ? "Room Service" : "No Room Service"}</Text>
                        </View>
                        <br></br>
                        <View style={HomePageStyles.column}>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {room.room_type}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {room.num_beds} Beds </Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} Sleeps {room.guest_capacity} </Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {room.has_wifi ? "Free Wifi" : "Wifi Not Included"}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {room.has_balcony ? "Has Balcony" : "No Balcony"}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {room.has_tv ? "Television" : "No TV"}</Text>
                            <Text style={HomePageStyles.bulletPoint}>{"\u2022"} {room.has_bathtub ? "Includes Bathtub" : "No Bathtub"}</Text>
                        </View>

                        <View style={HomePageStyles.rowCheckout}>
                                <Image source={oceanViewIcon} stlye={HomePageStyles.iconCheckout}/>
                                <Text style={HomePageStyles.bulletPoint}>{hotel.ocean_view ? "Ocean View" : ""}</Text>
                                <Image source={petFriendlyIcon} style={HomePageStyles.iconCheckout}/>
                                <Text style={HomePageStyles.bulletPoint}>{hotel.pet_friendly ? "Pet Friendly" : "No Pets Allowed"}</Text>
                            </View>
                            <View style={HomePageStyles.rowCheckout}>
                                <Image source={serviceIcon} style={HomePageStyles.iconCheckout}/>
                                <Text style={HomePageStyles.bulletPoint}> {hotel.has_room_service ? "Room Service" : "No Room Service"}</Text>
                            </View>
*/
    return(
        <View style={HomePageStyles.homeFullPage}>
          <br></br>
            <View style={HomePageStyles.topContainer}>
                <TouchableOpacity style={GeneralStyles.userIconContainer}>
                    <Image source={logo} style={GeneralStyles.Icon} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={HomePageStyles.bookingContainer}>
                    <Text style={HomePageStyles.header}>Booking Details</Text>
                    <Text style={HomePageStyles.modalTitle}>{hotel.hotel_name}</Text>
                        <View style={HomePageStyles.rowCheckout}>
                            <View style={HomePageStyles.cell}>
                                <Image source={poolIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {hotel.has_pool ? "Has a pool" : "No pool"}</Text>
                            </View>
                            <View style={HomePageStyles.cell}>
                                <Image source={gymIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {hotel.has_gym ? "Has Gym" : "No Gym"}</Text>
                            </View>
                            
                        </View>
                        <View style={HomePageStyles.rowCheckout}>
                            <View style={HomePageStyles.cell}>
                                <Image source={serviceIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {hotel.has_room_service ? "Room Servce" : "No Room Service"}</Text>
                            </View>
                            
                            <View style={HomePageStyles.cell}>
                                <Image source={oceanViewIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {hotel.ocean_view ? "Ocean View" : "No Ocean View"}</Text>
                            </View>
                        </View>
                        <View style={HomePageStyles.rowCheckout}>
                            <View style={HomePageStyles.cell}>
                                <Image source={petFriendlyIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {hotel.pet_friendly ? "Pet Friendly" : "No Pets"}</Text>
                            </View>
                        </View>

                        <View style={HomePageStyles.horizontalLine}></View>
                        <Text style={HomePageStyles.modalTitle}>{room.room_type}</Text>
                        <View style={HomePageStyles.rowCheckout}>
                            <View style={HomePageStyles.cell}>
                                <Image source={guestsIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> Sleeps {room.guest_capacity}</Text>
                            </View>
                            <View style={HomePageStyles.cell}>
                                <Image source={bedIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {room.num_beds} beds</Text>
                            </View>
                        </View>
                        <View style={HomePageStyles.rowCheckout}>
                            <View style={HomePageStyles.cell}>
                                <Image source={wifiIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {room.has_wifi ? "Free Wifi" : "Wifi Not Included"}</Text>
                            </View>
                            <View style={HomePageStyles.cell}>
                                <Image source={tvIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {room.has_tv ? "TV" : "No TV"}</Text>
                            </View>
                        </View>
                        <View style={HomePageStyles.rowCheckout}>
                            <View style={HomePageStyles.cell}>
                                <Image source={bathIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {room.has_bathtub ? "Bathtub" : "No Bathtub"}</Text>
                            </View>
                            <View style={HomePageStyles.cell}>
                                <Image source={balconyIcon} style={HomePageStyles.iconButton}/>
                                <Text style={{flex: 1, whiteSpace: 'nowrap'}}> {room.has_balcony ? "Balcony" : "No Balcony"}</Text>
                            </View>
                        </View>
                        <View style={HomePageStyles.horizontalLine}></View>
                </View>
            </ScrollView>
        </View>
            
    )
}
export default CheckoutScreen;
