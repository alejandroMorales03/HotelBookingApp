import { StyleSheet, Dimensions } from "react-native";
import COLORS, { SIZES } from "../Constants/Constants";

const { width } = Dimensions.get('window');

const commonTextStyles = {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: COLORS.neutral.Black,
};

const GeneralStyles = StyleSheet.create({
    fullPageContainer: {
        flex: 1,
        backgroundColor: COLORS.neutral.White,
        alignItems: 'center',
        backgroundColor: '#e1ee4c',
    },

    userIconContainer: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: width * 0.075,
        overflow: 'hidden',
        backgroundColor: COLORS.neutral.Transparent,
    },
    
    Icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', 
    },

    searchBarContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginLeft: width * 0.03,
        width: width * 0.75, 
        backgroundColor: '#89ee4c',
       
    },

    searchBar: {
        flex: 1, 
        borderColor: COLORS.primary.Tomato,
        height: width * 0.03,
        borderWidth: 0.6,
        borderRadius: SIZES.borderRadius,
        textAlign: 'left',
        fontSize: SIZES.small,
        color: COLORS.neutral.Black,
        ...commonTextStyles,
        backgroundColor: COLORS.neutral.White,
        opacity: 0.4,
    },

    filterIconContainer: {
        width: width * 0.10,
        height: width * 0.10,
        borderRadius: width * 0.075,
        overflow: 'hidden',
        backgroundColor: COLORS.neutral.Transparent,
        marginLeft: width * 0.02,
    },

    suggestionList: {
        position: 'absolute',
        top: width * 0.10,
        marginLeft: width * 0.03,
        marginTop: width * 0.03,
    },

    suggestion: {
        fontSize: SIZES.extraSmall,
        marginVertical: width * 0.01,
        color: COLORS.feedback.PlaceHolderTextColor,
        ...commonTextStyles,
    },
});

export default GeneralStyles;
