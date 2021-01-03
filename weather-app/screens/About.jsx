import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../globalStyles';

export default function About(props){

    return(
        <View style = {globalStyles.container}>
            <View style = {globalStyles.card__main}>
                <View style = {styles.about} >
                    <Image source = {require("../assets/sun.png")} style = {styles.about__img}/>
                    <Text style = {styles.about__text}>Weather app is a mobile app for monitoring weather information in your location anywhere around the world.</Text>
                    <Text style = {styles.about__footer}>Built with ❤️ using React native.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    about : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    about__img : {
        width: 100,
        height: 100,
    },

    about__text : {
        color: '#9AC914',
        marginVertical : 20,
        textAlign: 'center'
    },

    about__footer : {
        color: '#eee',
        letterSpacing: 3
    }
})