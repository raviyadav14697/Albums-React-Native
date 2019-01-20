import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


export default function AlbumDetail(props) {

    const {album} = props;

    return (
        <Card>
            <CardSection>
                <Text>{album.title + "\n" + album.artist}</Text>
                <Text>{album.title + "\n" + album.artist}</Text>
            </CardSection>
        </Card>
    )
}
