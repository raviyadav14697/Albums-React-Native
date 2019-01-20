import React from 'react';
import { View, Text } from 'react-native';

export default function CardSection(props) {
    return (
        <View style = {styles.cardSecionStyle}>
            {props.children}
        </View>
    )
}


const styles = {

    cardSecionStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    
};