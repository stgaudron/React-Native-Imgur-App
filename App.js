import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, StatusBar, SafeAeraView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons'
import { observer, inject } from 'mobx-react';
import { Provider } from 'mobx-react';
import Store from './Store';
import DevTools from 'mobx-react-devtools';


import HomeScreen from './src/HomeScreen';
// import Search from './src/Search';
// import Gallery from './src/Gallery';
// import Favorites from './src/Favorites';
import LoginScreen from './src/LoginScreen'
// import AuthLoading from './src/AuthLoadingScreen'



class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    );
  }
}

class GalleryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Gallery</Text>
      </View>
    );
  }
}

class FavoritesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {screen: HomeScreen,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={"md-home"} />
        </View>
        ),
      }
    },
    Search: {screen: SearchScreen,
      navigationOptions:{
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={"md-search"} />
          </View>
        )
      }
    },
    Gallery: {screen: GalleryScreen,
      navigationOptions:{
        tabBarLabel: 'Gallery',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={"md-camera"} />
          </View>
        )
      }
    },
    Favorites: {screen: FavoritesScreen,
      navigationOptions:{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={"md-star-outline"} />
          </View>
        )
      }
    },
  },
  {
    order: ['Home', 'Search', 'Gallery', 'Favorites'],
    navigationOptions: {
      initialRouteName: 'Home',
      tabBarVisible: true
    },
      activeColor: '#DCDCDC',
      inactiveColor: '#696969',
      barStyle: { backgroundColor: '#000000'}
    }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AppContainer = createSwitchNavigator(
  {
    Login: LoginScreen,
    App: TabNavigator,
  },
  {
    initialRouteName:'Login',
  }
);

const App = createAppContainer(AppContainer);


export default App;
