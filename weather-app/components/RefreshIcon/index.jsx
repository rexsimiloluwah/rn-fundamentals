import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function RefreshIcon(props){

    return(
        <View style = {styles.reload}>
            <Ionicons name = "refresh-sharp" size = {30} color = "#9AC914" onPress = {props.reload}/>
        </View>
    )
}

const styles = StyleSheet.create({

    reload : {
        position: 'absolute',
        top: 5,
        left: 10
    }
})