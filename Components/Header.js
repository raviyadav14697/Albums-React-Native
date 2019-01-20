import React from 'react';
import { View, Text } from 'react-native';

const Header = (params) => {
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.headerText}> 
                {params.headerText}
            </Text>
        </View>
    );
};


const styles = {

    headerText : {
        fontSize: 25,
        fontWeight: 'bold',
    },

    viewStyle : {
        height: 50,
        backgroundColor: '#F8F8F8', 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.3,
        elevation: 5,
        position: 'relative',
    }

};

export default Header;
export {styles};