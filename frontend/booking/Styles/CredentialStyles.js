import { StyleSheet, Dimensions } from 'react-native';
import COLORS, { SIZES } from '../Constants/Constants';
import GeneralStyles from './GeneralStyles';

const { width, height } = Dimensions.get('window');


const baseTextInputStyle = {
    borderBottomColor: COLORS.neutral.White,
    borderBottomWidth: 0.5,
    paddingHorizontal: width * 0.04,
    fontSize: SIZES.extraSmall,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    width: width * 0.60,
    paddingVertical: width * 0.008,
    color: COLORS.neutral.White,
};


const CredentialStyles = StyleSheet.create({

    fullPageContainer:{
        ...GeneralStyles.fullPageContainer,
        justifyContent: 'center',
    },

    logoContainer: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: width * 0.125,
        overflow: 'hidden',
        backgroundColor: COLORS.neutral.Transparent,
        marginBottom: height * 0.02,
        borderColor: COLORS.neutral.White,
        borderWidth: 2,
    },

    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    

   

    complimentaryText: {
        fontSize: SIZES.extraSmall,
        color: COLORS.neutral.White,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: height * 0.01,
        textAlign: 'center',
    },

    textInput: {
        ...baseTextInputStyle,
        marginVertical: height * 0.015,
    },

    error: {
        color: COLORS.feedback.Red,
        fontFamily: 'Roboto',
        fontSize: SIZES.extraSmall,
        fontWeight: '700',
    },

    buttonContainer: {
        backgroundColor: COLORS.primary.Tomato,
        borderRadius: SIZES.borderRadius,
        paddingVertical: height * 0.005,
        paddingHorizontal: width * 0.03,
        marginTop: height * 0.03,
        marginBottom: height * 0.04,
    },

    button: {
        fontSize: SIZES.small,
        color: COLORS.neutral.White,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },

    linkText: {
        fontSize: SIZES.extraSmall,
        color: COLORS.primary.ArgentinianBlue,
        fontWeight: '900',
        marginBottom: 0.04 * width,
    },
    
});

export default CredentialStyles;
