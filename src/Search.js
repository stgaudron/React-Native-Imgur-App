import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Profile screen
 */
class SearchScreen extends React.Component {

  static navigationOptions = {
      header: null
  }

    render() {


        return (
          <View style={styles.container}>
                <Button title="Go To Home Screen"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }

}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
