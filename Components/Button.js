import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button(props) {

    const {buttonText, onPress} = props;

    return (
        <TouchableOpacity style = {styles.buttonStyle} onPress = {onPress}>
            <Text style = {styles.textStyle}> {buttonText} </Text>
        </TouchableOpacity>
    )
}

const styles = {

    textStyle: {
        color: '#007aff',
        fontSize: 20,
        paddingBottom: 5,
        paddingTop: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    buttonStyle: {
        flex: 1,
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
    }
};
