import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FlexBox(){
    return(
        <View style = {styles.flexContainer}>
            <Text style = {styles.One}>One</Text>
            <Text style = {styles.Two}>Two</Text>
            <Text style = {styles.Three}>Three</Text>
            <Text style = {styles.Four}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    flexContainer : {
        // flex: 1,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    One : {
        flex: 2,
        backgroundColor: 'crimson',
        padding: 10
    },

    Two : {
        flex: 1,
        backgroundColor : 'coral',
        padding: 10
    },

    Three : {
        flex: 1,
        backgroundColor: 'dodgerblue',
        padding: 10
    },

    Four : {
        flex: 2,
        backgroundColor: 'rebeccapurple',
        padding: 10
    }
})