import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationActions} from 'react-navigation';

import * as SecureStore from 'expo-secure-store';

class LoginScreen extends Component {
  state={
    uri: 'https://api.imgur.com/oauth2/authorize?client_id=a1cd656bc045991&response_type=token',
      };

  _onNavigationStateChange(webViewState){
    let webviewdata = webViewState.url;
    const params = {}
    let regex = /([^&#=]+)=([^&]*)/g, m;
    while (m = regex.exec(webviewdata)) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    console.log(webviewdata);
    console.log(params);
    console.log(params.access_token);
    if(webviewdata !== this.state.uri)
      SecureStore.setItemAsync('access_token', params.access_token)
      SecureStore.setItemAsync('account_id', params.account_id)
      SecureStore.setItemAsync('account_username', params.account_username)
      SecureStore.setItemAsync('expires_in', params.expires_in)
      SecureStore.setItemAsync('refresh_token', params.refresh_token)
      SecureStore.setItemAsync('token_type', params.token_type)

      this.props.navigation.navigate('Home');
  };

  render() {
    return (
        <WebView
          source={{ uri:this.state.uri }}
          onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        />
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
