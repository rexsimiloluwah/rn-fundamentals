import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Button(props){
    
    return(
        <TouchableOpacity onPress = {props.onPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    button : {
        backgroundColor: '#2d543e',
        marginVertical : 12,
        padding: 10,
    },

    buttonText : {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }

})