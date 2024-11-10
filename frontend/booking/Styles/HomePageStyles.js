import { StyleSheet, Dimensions } from "react-native";
import GeneralStyles from "./GeneralStyles";
import COLORS, { SIZES } from "../Constants/Constants";

const { width, height } = Dimensions.get('window');

const individualFilterButtonContainer = (color) => ({
    //width = height = *0.2, 

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
        height: '80%',
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

    numericalSettingsContainer: {
        //width = 0.5, height = 0.3 or 0.2
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensures equal space between buttons and number
        width: width * 0.2, // Adjust to fit your design
        height: width * 0.1,
        paddingHorizontal: 10, // Adjust padding as necessary
        borderColor: COLORS.primary.Tomato,
        borderWidth: 1.5,
        borderRadius: 0.015 * width,
        backgroundColor: COLORS.neutral.White,
        marginVertical: 5, 
      },

    increaseButtonContainer:{
        width: 0.10 * width,
        height: 0.10 * width,
    },
    numericalButton:{
        width: width * 0.10,
        height: width * 0.10,
    },

    textButton: {
        color: COLORS.neutral.White,
        fontSize: SIZES.extraSmall,
        fontWeight: '600',
    },

    numericalFilterText:{
        fontSize: SIZES.medium,
        color: COLORS.primary.Tomato,
        fontWeight: '800',
    },

    iconButton: {
        width: '50%', // 50% of the button's width, adjust as needed
        height: '50%', // 50% of the button's height, adjust as needed
        resizeMode: 'contain', // Ensures the image fits inside the button without stretching
    },

    topContainer: {
        width: width * .9,
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
    bottomContainerRooms: {
        width: width * 0.9,
        height: height * .80,
        padding: 20, // Adds padding inside the container
        margin: 10, // Adds margin outside the container
        backgroundColor: COLORS.neutral.White, // Sets a background color
        borderRadius: 12, // Optional: rounded corners
        borderColor: COLORS.primary.Tomato, // Change this to your desired border color
        borderWidth: 3, // Adjust the thickness of the border
        borderStyle: 'solid',
    },
    buttonFilter: {
        width: '5rem',
        height: '5rem',
        borderRadius: width * 0.075,
        overflow: 'hidden',
        backgroundColor: COLORS.neutral.Transparent,
        
    },
    bulletPoint: {
        fontSize: 18,
        fontWeight: 400,
        color: '#000', // Customize color
        lineHeight: 25, // Spacing between lines
    },
    cardHotel: {
        width: '24rem',
        elevation: 20,
        backgroundColor: COLORS.primary.Tomato,
    },
    cardRoom: {
        width: '18rem',
        elevation: 20,
        backgroundColor: COLORS.primary.Tomato,
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
    filterIconContainer: {
        marginLeft: width * 0.02,
    },
    imageHotel: {
        width: '372px',  // or specify specific width and height
        height: '165px',
        borderStyle: 'solid',
        borderRadius: 5,
        resizeMode: 'cover', // or 'contain' depending on how you want the image to fit
        position: 'relative',
        transform: 'translate(1.5%, 3%)',
    },
    imageRoom: {
        width: '275px',  // or specify specific width and height
        height: '170px',
        borderStyle: 'solid',
        borderRadius: 8,
        
        resizeMode: 'cover', // or 'contain' depending on how you want the image to fit
        position: 'relative',
        transform: 'translate(2%, 2%)',
    },
    modalContainer: {
        position: 'absolute',
        transform: 'translate(0%, 0%)', //Makes it pretty centered in the screen, atleat on Adam's laptop
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
        padding: 3,
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

    //Checkout unique
    bookingContainer:{
        width: width * 0.8,
        height: height * 1,
        padding: 20,
        margin: 10,
        borderColor: COLORS.neutral.Black,
        borderStyle: 'solid',
        borderWidth: 5,
        backgroundColor: COLORS.primary.ArgentinianBlue
    },
    // Created this style for the form on checkout page
    userInfoContainer:{
        width: width * 0.8,
        marginBottom: 20,
        borderColor: '#FFA500',
        borderStyle: 'solid',
        borderWidth: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },
    colCheckout:{
        flexDirection: 'column',
        flex: 1,
        width: width*0.6,
    },
    rowCheckout:{
        flexDirection: 'row',
       // width: 100,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 0,
        margin: 0,
        height: 50,
        
    },
    cell:{
        flexDirection: 'row',
        width: 110,
        justifyContent: 'flex-start',
        height: 60,
        alignItems: 'flex-start',
        margin: 10,
    },
    horizontalLine:{
        height:1,
        backgroundColor: 'grey',
        marginVertical: 5,
    },

});

export default HomePageStyles;
