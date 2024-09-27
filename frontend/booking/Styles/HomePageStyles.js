import { StyleSheet, Dimensions } from "react-native";
import GeneralStyles from "./GeneralStyles";
import COLORS, { SIZES } from "../Constants/Constants";

const { width, height } = Dimensions.get('window');

const HomePageStyles = StyleSheet.create({
    fullPageContainer: {
        ...GeneralStyles.fullPageContainer,
        backgroundColor: COLORS.neutral.White,
        
    },

    topContainer: {
        marginHorizontal: width * 0.03,
        marginVertical: height * 0.01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    
});

export default HomePageStyles;
