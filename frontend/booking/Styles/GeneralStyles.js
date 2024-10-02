import { StyleSheet, Dimensions } from "react-native";
import COLORS, { SIZES } from "../Constants/Constants";

const { width, height } = Dimensions.get('window');

const commonTextStyles = {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: COLORS.neutral.Black,
};

const titleStyle = (fontSize, color) => ({
    fontSize: fontSize,
    fontFamily: 'Roboto',
    fontWeight: '900',
    marginBottom: height * 0.03,
    color: color,
    textAlign: 'center',
});

const GeneralStyles = StyleSheet.create({
    fullPageContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
        backgroundColor: COLORS.neutral.White,
        alignItems: 'center',
       // backgroundColor: '#e1ee4c',
    },

    mainTitle: {
        ...titleStyle(SIZES.large, COLORS.neutral.White),
    },

    customMediumTitle: {
        ...titleStyle(SIZES.medium, COLORS.neutral.White),
    },
    customSmallTitle:{
        ...titleStyle(SIZES.small, COLORS.primary.Tomato),

    },
    textOverLink: {
        ...titleStyle(SIZES.extraSmall),
        color: COLORS.primary.Tomato,
        fontWeight: '600',
        marginBottom: 12,
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
       // backgroundColor: '#89ee4c',
       
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
