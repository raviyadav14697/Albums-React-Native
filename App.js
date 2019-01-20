import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header, {styles}  from './Components/Header';
import AlbumList from './Components/AlbumList';


export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText = "Albums" />
        <AlbumList />
      </View>
    );
  }
}
