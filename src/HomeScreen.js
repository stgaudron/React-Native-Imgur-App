import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight, ListView } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import DevTools from 'mobx-react-devtools';
import * as SecureStore from 'expo-secure-store';


class HomeScreen extends Component {

  state = {
    access_token : ''
  }

  componentDidMount() {
    console.log('componentDidMount')
    SecureStore.getItemAsync("access_token")
    .then(res => this.setState({access_token: res}));
    SecureStore.getItemAsync("account_id")
    .then(res => this.setState({account_id: res}));
  }

  render() {

    return (
       <View style={styles.container}>
         <Text>access_token : {this.state.access_token}
         account_id : {this.state.account_id}</Text>
       </View>
    );
   }
}

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
});
