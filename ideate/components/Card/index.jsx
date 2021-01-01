import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Card(props){

    return(
        <View style = {styles.card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        padding: 12,
        marginVertical : 10,
        backgroundColor : '#d3f5e9',
        borderRadius: 10
    }
})
