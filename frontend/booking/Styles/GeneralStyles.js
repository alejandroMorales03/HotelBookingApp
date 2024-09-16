import { StyleSheet, Dimensions } from 'react-native';
import COLORS, { SIZES } from '../Constants/Constants';



//IMPORTANT: Any changes made here will be reflected in all components who use the modified style.

const { width, height } = Dimensions.get('window');

// You can use this base style in any input fields so that all inputs look the same

const baseTextInputStyle = {
    borderBottomColor: COLORS.ArgentinianBlue,
    borderBottomWidth: 0.5,
    paddingHorizontal: width * 0.04,
    fontSize: SIZES.extraSmall,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: width * 0.60
};

// Base style for bottom links.=
const baseBottomText = {
    fontSize: SIZES.extraSmall,
    fontFamily: 'Roboto',
    marginBottom: height * 0.008,
}

const mainTitle = {
    fontSize: SIZES.large,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: height * 0.03, 
    color: COLORS.Tomato,
    fontWeight: '800'
}

const GeneralStyles = StyleSheet.create({
    // Container for full-page layout
    fullPageContainer: {
        flex: 1,
        backgroundColor: COLORS.White,
        alignItems: 'center',
        overflow: "scroll",
        maxHeight: "100vh"
    },

    // Logo container with circular shape
    logoContainer: {
        width: width * 0.25, // 25% of screen width
        height: width * 0.25, // 1:1 aspect ratio
        borderRadius: width * 0.125, // 50% of width
        overflow: 'hidden',
        marginBottom: height * 0.02, // 3% of screen height
        backgroundColor: COLORS.Transparent,
    },

    // Styling for the logo image
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    // Container for general content

    GeneralContainer: {
        width: width * 0.8,
        alignItems: 'center',
        marginVertical: height * 0.01,
    },

    // Main title styling
    

    mainTitle:{
        ...mainTitle,
        fontSize: SIZES.large,
        
    },

    customMediumTitle:{
        ...mainTitle,
        fontSize: SIZES.medium
    },
    
    // Complimentary text styling
    complimentaryText: {
        fontSize: SIZES.small,
        color: COLORS.PlaceHolderTextColor,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: height * 0.01,
        textAlign: 'center',
    },


    fieldCredential: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.01,
        marginHorizontal: width * 0.02,
    },

    // Text input styling
    textInput: {
        //this means using a previously defined base styling
        ...baseTextInputStyle,
        marginVertical: height * 0.015,
    },

    error: {
        color: COLORS.Red,
        fontFamily: 'Rototo',
        fontSize: SIZES.small,
        fontWeight: '700'
    },

    //Styling for buttons
    buttonContainer: {
        backgroundColor: COLORS.Tomato,
        borderRadius: width * 0.125,
        paddingVertical: height * 0.005,
        paddingHorizontal: width * 0.03,
        marginTop: height * 0.03,
        marginBottom: height * 0.04,
    },

    //Styling for the text in buttons
    button: {
        fontSize: SIZES.small,
        color: COLORS.White,
        fontFamily: 'Roboto',
        fontWeight: 'bold',

    },

    //Styling for things u see in the footer of a page like "Have an account? Sign in"
    textInLinkBottom: {
        ...baseBottomText,
        fontWeight: '800',
        color: COLORS.Tomato,
    },

    //Styling for links
    link: {
        ...baseBottomText,
        color: COLORS.ArgentinianBlue,
        fontWeight: '700'
    }


});

export default GeneralStyles;
