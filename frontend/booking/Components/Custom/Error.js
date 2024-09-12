import { Text } from "react-native"

const Error = ({style, errorText}) =>{

    return(
        <Text style={style}>
            {errorText}
        </Text>
    )
};

export default Error;

