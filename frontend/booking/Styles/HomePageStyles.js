import { StyleSheet, Dimensions } from "react-native";
import GeneralStyles from "./GeneralStyles";
import COLORS, { SIZES } from "../Constants/Constants";

const { width, height } = Dimensions.get('window');

const individualFilterButtonContainer = (color) => ({
    backgroundColor: color,
    width: width * 0.2, // Adjust to make the button square
    height: width * 0.2, // Same as width to keep it square
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 5, 
    marginVertical: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8, 
    shadowRadius: 5,
});


const fullPageContainer = (color) => ({
    ...GeneralStyles.fullPageContainer,
    backgroundColor: color
})

const HomePageStyles = StyleSheet.create({
    homeFullPage: {
        ...fullPageContainer(COLORS.neutral.White),
    },
    filterFullPage: {
        ...fullPageContainer(COLORS.primary.White),
    },
    homeSmallTitle:{
        ...GeneralStyles.customSmallTitle,
        zIndex: 2,
        color :COLORS.primary.Tomato,
    },
    

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center', 
    },


    filterContainer: {
        width: '90%', 
        padding: 32,
        borderRadius: SIZES.borderRadius,
        backgroundColor: COLORS.neutral.White,
        shadowColor: '#000', // Black shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, 
        shadowRadius: 5, 
        marginBottom: 10,
    },

    optionsContainer:{
        flexDirection: 'row', // Items arranged in a row
        flexWrap: 'wrap', // Wrap items to the next line if necessary
        justifyContent: 'space-between', // Space items evenly
        marginBottom: 5,
    },

    filterButtonsBottomContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: width * 0.03,
        zIndex: 2,
    },

    applyButtonContainer: {
        ...individualFilterButtonContainer(COLORS.primary.Tomato),
        width: width * 0.33, 
        height: height * 0.06,
    },
    deselectButtonContainer: {
        ...individualFilterButtonContainer(COLORS.primary.PaleBlue),
        width: width * 0.33, 
        height: height * 0.06,
    },

    onButtonContainer:{
        ...individualFilterButtonContainer(COLORS.primary.Tomato),
    },
    offButtonContainer:{
        ...individualFilterButtonContainer(COLORS.neutral.Grey),
    },

    increaseButtonContainer:{
        ...individualFilterButtonContainer(COLORS.primary.ArgentinianBlue),
    },
    decreaseButtonContainer:{
        ...individualFilterButtonContainer(COLORS.primary.PaleBlue),
    },

    textButton: {
        color: COLORS.neutral.White,
        fontSize: SIZES.extraSmall,
        fontWeight: '500',
    },

    iconButton: {
        width: '50%', // 50% of the button's width, adjust as needed
        height: '50%', // 50% of the button's height, adjust as needed
        resizeMode: 'contain', // Ensures the image fits inside the button without stretching
    },

    sliderIcon:{
        width: '10%',
        height: '50%',
        justifyContent: 'center',
    },

    sliderContainer:{
        backgroundColor: COLORS.primary.Tomato,
        height: width * 0.2,
        width: width * 0.90,
        shadowColor: '#000', // Black shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, 
        shadowRadius: 5, 
        marginBottom: 10,
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
