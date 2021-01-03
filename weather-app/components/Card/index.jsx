import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {FontAwesome5} from '@expo/vector-icons';

export default function Card(props){
    return(
        <View style = {globalStyles.details_card}>
            <Text>{props.icon}</Text>
            <View>
                <Text style = {styles.cardHeader}>{props.title}</Text>
                <Text style = {styles.cardValue}>{props.value} <Text style = {styles.unit}>{props.unit}</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    cardHeader : {
        color : '#9AC914',
        fontWeight : '900',
        fontSize : 12
    },

    cardValue : {
        fontSize : 30,
        color: '#eee',
        textAlign: 'right'
    },

    unit : {
        color: '#9AC914',
        fontSize: 15
    }
})