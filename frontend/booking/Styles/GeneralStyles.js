import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
import COLORS, { SIZES } from "../Constants/Constants";

const GeneralStyles = StyleSheet.create({
    fullPageContainer: {
        flex: 1,
        backgroundColor: COLORS.White,
        alignItems: 'center',
        overflow: "scroll",
        maxHeight: height,
    },

    userIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    userIconContainer: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.125,
        overflow: 'hidden',
        backgroundColor: COLORS.Transparent,
    },
    searchBarContainer:{
        margiLeft: 0.03 * width,
        flexDirection: 'column',
    },

    searchBar: {
        width: width * 0.75, 
        borderColor: COLORS.Tomato,
        height: width * 0.10,
        borderWidth: 0.4,
        marginLeft: width * 0.03,
        borderRadius: width * 0.03,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.Black, 
        fontFamily: 'Roboto',
        fontSize: SIZES.extraSmall
    },

    suggestionList:{
        position: 'absolute',
        top: width * 0.10,
        marginLeft: width * 0.03,
        marginTop: width * 0.03,
    },


    suggestion:{
        color: COLORS.PlaceHolderTextColor,
        fontSize: SIZES.extraSmall,
        marginVertical: width * 0.01,
        fontWeight: 'bold',
        fontFamily: 'Roboto'

    }
});

export default GeneralStyles;
