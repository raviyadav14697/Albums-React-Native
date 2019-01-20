import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


export default function AlbumDetail(props) {

    const {thumbnail_image, image, title, artist, url} = props.album;
    const {thumbnailContainerStyle, thumbnailStyle, titleAndArtistStyle, titleStyle, imageStyle} = styles;

    return (
        <Card>
            <CardSection>
                <View style = {thumbnailContainerStyle}>
                    <Image 
                        style = {thumbnailStyle}
                        source = {{uri:thumbnail_image}} 
                    />
                </View>
                <View style = {titleAndArtistStyle}>
                    <Text style = {titleStyle}>
                        {title}
                    </Text>
                    <Text> {artist} </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    source = {{uri: image}}
                    style = {imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button
                    buttonText = "Buy Now"
                    onPress = { () => Linking.openURL(url) }
                />
            </CardSection>
        </Card>
    )
}


const styles = {
    titleAndArtistStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
    },

    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    thumbnailStyle: {
        height: 60,
        width: 60
    },

    thumbnailContainerStyle: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageStyle: {
        height: 250,
        //for width = screen wide
        flex: 1,
        width: null,
    }
}
