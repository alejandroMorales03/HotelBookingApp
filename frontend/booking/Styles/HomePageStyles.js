import { StyleSheet, Dimensions } from "react-native";
import GeneralStyles from "./GeneralStyles";
import COLORS, { SIZES } from "../Constants/Constants";

const { width, height } = Dimensions.get('window');

const individualFilterButtonContainer = (color) => ({
    padding: 10,
    backgroundColor: color,
    width: width * 0.3, 
    height: height * 0.06, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.2, 
    shadowOffset: { width: 0, height: 4 }, 
    shadowRadius: 6,
})

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
    
    filterContainer: {
        flex: 1,
        padding: 32,
        marginVertical: width * 0.20,
        marginHorizontal: 0,
        borderRadius: SIZES.borderRadius,
        backgroundColor: 'transparent',
        position: 'relative', 
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust opacity and color as needed
        borderRadius: SIZES.borderRadius,
        zIndex: 1, // Ensure the overlay is below the content
    },

    filterButtonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly' ,
        paddingHorizontal: width * 0.01,
        zIndex: 2,
        margin: width * 0.10,
    },

    filterButtonsBottomContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: width * 0.03,
        zIndex: 2,
    },

    applyButtonContainer: {
        ...individualFilterButtonContainer(COLORS.primary.Tomato),
    },
    deselectButtonContainer: {
        ...individualFilterButtonContainer(COLORS.neutral.Grey),
    },

    onButtonContainer:{
        ...individualFilterButtonContainer(COLORS.primary.ArgentinianBlue),
    },
    offButtonContainer:{
        ...individualFilterButtonContainer(COLORS.neutral.Grey),
    },

    button: {
        color: COLORS.neutral.White,
        fontSize: SIZES.extraSmall,
        fontWeight: '500',
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
