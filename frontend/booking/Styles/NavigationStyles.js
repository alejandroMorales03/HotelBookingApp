import { StyleSheet, Dimensions } from "react-native";
import COLORS, { SIZES } from "../Constants/Constants";

const { width, height } = Dimensions.get('window');


const NavigationStyles = StyleSheet.create({
    Icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: width * 0.075, 
    },
    userIconContainer: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.075,
        margin: 20
    },
    flexContainer: {
        flex: 1, // The container takes up the entire available space
        flexDirection: 'row', // Arrange items in a row
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center', // Center items vertically
    },
    button: {
        width: width * 0.50,
        backgroundColor: COLORS.primary.Orange,
        borderColor: COLORS.primary.Orange,
    },
});

export default NavigationStyles;
