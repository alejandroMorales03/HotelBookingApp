import { StyleSheet, Dimensions } from "react-native";
import GeneralStyles from "./CredentialStyles";
import COLORS from "../Constants/Constants";
const { width, height } = Dimensions.get('window');


const HomePageStyles = StyleSheet.create({
    fullPageContainer: {
        ...GeneralStyles.fullPageContainer,
        width: width,
        height: height,
        backgroundColor: COLORS.White, 
    },

    topContainer: {
        marginHorizontal: width * 0.03,
        marginVertical: height * 0.01,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 0.01 * width,
    }
    


});


export default HomePageStyles;