import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header(props){

    const openMenu = () => {
        props.navigation.openDrawer()
    }
    return(

        <View style = {styles.header}>
            <MaterialIcons name = "menu" size = {28} style = {styles.hamburger} onPress = {openMenu}/>
            <View>
                <Text style = {styles.HeaderText}>{props.headerText}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    header : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    hamburger : {
        position: 'absolute',
        left: 5
    }
})