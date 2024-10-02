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
        backgroundColor: COLORS.neutral.White,
    },
    bottomContainer: {
        // flex: 1, // Makes the container take up the full available space\
        width: width * 0.9,
        height: height * .65,
        padding: 20, // Adds padding inside the container
        margin: 10, // Adds margin outside the container
        backgroundColor: COLORS.neutral.White, // Sets a background color
        borderRadius: 12, // Optional: rounded corners
        borderColor: COLORS.primary.Tomato, // Change this to your desired border color
        borderWidth: 3, // Adjust the thickness of the border
        borderStyle: 'solid',
    },
    bulletPoint: {
        fontSize: 18,
        fontWeight: 400,
        color: '#000', // Customize color
        lineHeight: 25, // Spacing between lines
    },
    card: {
        width: '24rem',
        elevation: 4,
    },
    closeButton: {
        height: 25,
        width: 30,
        //verticalAlign: 50,
        //textAlign: 'center',
        alignContent: 'center',
       // fontWeight: 'bold',
        backgroundColor: COLORS.neutral.Transparent,
        borderColor: COLORS.neutral.Black,
        color: COLORS.neutral.Black, //color of  text
        fontSize: SIZES.extraSmall,
       

    },
    column: {
        flex: 1,
        marginLeft: 8, // Space between image and text
        flexDirection: 'column',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    hotelButton: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: "#3392DF",
        color: 'white',
    },
    image: {
        width: '382px',  // or specify specific width and height
        height: '180px',
        borderStyle: 'solid',
        borderRadius: 5,
        //marginLeft: 40,
        resizeMode: 'cover', // or 'contain' depending on how you want the image to fit
    },
    modalContainer: {
        position: 'absolute',
        transform: 'translate(12%, 10%)', //Makes it pretty centered in the screen, atleat on Adam's laptop
        height: height * 0.85,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.neutral.White,
        borderWidth: 3, // Adjust the thickness of the border
        borderStyle: 'solid',
        borderRadius: SIZES.borderRadius,
        borderColor: COLORS.primary.Tomato,
    },
    modalContent: {
        width: '95%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        //elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    multiColumnStyle: {
        columns: 2,                // Number of columns
        listStyleType: 'disc',     // Use bullets
        paddingLeft: '20px',       // Adjust padding as needed
        fontSize: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: 10, // Adjust spacing as needed
    },
    scrollView: {
        backgroundColor: 'blue',
        marginHorizontal: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000', // Customize color
    },
    
    

  
    
    

});

export default HomePageStyles;
