import { StyleSheet } from "react-native"
import COLORS,  {SIZES } from '../Constants/Constants'
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const GeneralStyles = StyleSheet.create({

    fullPageContainer: {
        flex: 1,
        backgroundColor: COLORS.White,
        alignItems: 'center'
    },

    logoContainer: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: '3%'
    },

    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },

    GeneralContainer:{
        width: '90%',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '5%'
    },

    mainTitle:{
        fontSize: SIZES.extraLarge,
        fontWeight: 'bold',
        marginBottom: '5%%'
    },

    complimentaryText:{
        fontSize: SIZES.small,
        color: COLORS.PlaceHolderTextColor,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: '10%'
    },

    fieldCredential: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginVertical: 5, 
        marginHorizontal: 8,
    },

    textInput: {
        width: '100%',
        borderBottomColor:COLORS.ArgentinianBlue,
        borderBottomWidth: 0.5,
        paddingHorizontal: width * 0.04,
        fontSize: SIZES.extraSmall,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'left',
        textAlignVertical: 'center',


    },

})

export default GeneralStyles;