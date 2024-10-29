import { View, TouchableOpacity, Image, FlatList, Text} from "react-native";
import HomePageStyles from "../../Styles/HomePageStyles";

/*
Page will have 3 sections:
1) Personal data (name, email, and anything else) -Jonathan
2) Booking data (room, hotel, and dates info) - Adam
3) Payment data (credit card number, cvv, logic to validate) - Alejandro
*/
const CheckoutScreen = (props) => {

    const room = props.location.state; //SHOULD catch passed room, may need {room}

    return(
        <View style={HomePageStyles.fullPageContainer}>


        </View>
    )
}
