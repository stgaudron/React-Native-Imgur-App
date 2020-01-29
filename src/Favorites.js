import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

/**
 * Profile screen
 */
class FavoritesScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
          <View style={styles.container}>
                <Button title="Go To Home Screen"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
