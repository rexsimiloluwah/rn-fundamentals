import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header(props){

    return(
        <View style = {styles.header}>
            <Text style = {styles.headerText}>{props.headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height: 60,
        backgroundColor: 'crimson',
        paddingVertical: 10,
        marginBottom: 10,
    },

    headerText : {
        textAlign: 'center',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})