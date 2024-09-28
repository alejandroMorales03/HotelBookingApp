import { StyleSheet, Dimensions } from "react-native";
import GeneralStyles from "./CredentialStyles";
import COLORS, { SIZES } from "../Constants/Constants";

const { width, height } = Dimensions.get('window');

const HomePageStyles = StyleSheet.create({
    fullPageContainer: {
        ...GeneralStyles.fullPageContainer,
        
    },

    topContainer: {
        marginHorizontal: width * 0.03,
        marginVertical: height * 0.01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#4c9dee',
    },
    bottomContainer: {
        
        // flex: 1, // Makes the container take up the full available space\
        
        width: width * 0.9,
        height: height * .65,
        padding: 20, // Adds padding inside the container
        margin: 10, // Adds margin outside the container
        backgroundColor: '#f7eeec', // Sets a background color
        borderRadius: 10, // Optional: rounded corners
        borderColor: '#f94a1b', // Change this to your desired border color
        borderWidth: 3, // Adjust the thickness of the border
        borderStyle: 'solid',
        
    },
    card: {
        width: '24rem',
        elevation: 4,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    multiColumnStyle: {
        columns: 2,                // Number of columns
        listStyleType: 'disc',     // Use bullets
        paddingLeft: '20px',       // Adjust padding as needed
        fontSize: 12
    },
    scrollView: {
        backgroundColor: 'blue',
        marginHorizontal: 40,
    },
    itemContainer: {
        marginVertical: 10, // Space between items
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
       // marginVertical: 10, // Adjust spacing as needed
    },
    column: {
        flex: 1,
        marginLeft: 8, // Space between image and text
        flexDirection: 'column',
    },
    image: {
        width: '382px',  // or specify specific width and height
        height: '180px',
        borderStyle: 'solid',
        borderRadius:5,
        //marginLeft: 40,
        resizeMode: 'cover', // or 'contain' depending on how you want the image to fit
    },
    resultsBackground: {
        width: '80%',
        height:'80%',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',
        opacity: 0.5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Customize color
    },
    price: {
        fontSize: 16,
        color: '#888', // Customize color
        marginLeft: 10, // Space between title and price
    },
    bulletPoint: {
        fontSize: 18,
        fontWeight: 400,
        color: '#000', // Customize color
        lineHeight: 25, // Spacing between lines
    },

});

export default HomePageStyles;
