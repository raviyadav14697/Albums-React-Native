import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        isDataAvailable: false,
        albums : []
    }

    componentWillMount()
    {
        this.getAlbumsFromAPI();
        //console.log("componentWillMount");
    }

    componentDidMount()
    {       
        //console.log("componentDidMount");
    }

    getAlbumsFromAPI = () => { 

        // return fetch('https://rallycoding.herokuapp.com/api/music_albums')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         return responseJson;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                //console.log(JSON.parse(request.responseText));
                this.setState({
                    isDataAvailable: true,
                    albums : JSON.parse(request.responseText)
                });
            } else {
                console.warn('error');
            }
        };

        request.open('GET', 'https://rallycoding.herokuapp.com/api/music_albums');
        request.send();

    }

    rendeAlbumDetails = () => {
        //key property is added for giving unique id to each element of array(Each AlbumDetail in this case)
        return this.state.albums.map((album) => <AlbumDetail key={album.title} album={album}/>);
    }

    render() {

        console.log(this.state.albums);
        if(this.state.isDataAvailable)
        {
            //{this.state.albums.map((album) => album.title + "\n" + album.artist}
            return (
                <View>
                    {this.rendeAlbumDetails()}
                </View>
            );
        }
        
        return (
            <View>
                <Text>
                        Loading Data...
                </Text>
            </View>
        );
        
    }
}

export default AlbumList;