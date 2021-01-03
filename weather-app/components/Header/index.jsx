import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header(props){

    const openDrawer = () => {
        props.navigation.openDrawer();
    }

    return(
        <View style = {styles.header}>
            <MaterialIcons name = "menu" size = {28} color = "#9AC914"  onPress = {openDrawer} style = {styles.hamburger}/>
            <View>
                <Text style = {styles.headerText}>{props.headerText}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    header : {
        justifyContent: 'center',
        flexDirection: 'row',
    },

    hamburger : {
        position: 'absolute',
        left: 5
    },

    headerText : {
        textAlign: 'center',
        color: '#FFF'
    }

})