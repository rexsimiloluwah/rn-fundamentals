import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function MainWeather(props){

    // Destructuring
    const {
        main,
        sys,
        weather : [details]
    } = props.currentWeather ;

    const {icon} = details;
    // console.log(icon)

    const getCurrentPeriod = () => {
        let hour = (new Date).getHours()
        let greeting = ""
        if(hour > 0 && hour < 5){
            greeting = "Night"
        }
        else if(hour >= 5 && hour < 12){
            greeting = "Morning"
        }
        else if(hour >= 12 && hour < 18){
            greeting = "Afternoon"
        }
        else{
            greeting = "Evening"
        }
        return greeting;
    }

    // console.log(getCurrentPeriod())

    return (
        <>
        <View style = {globalStyles.card__main}>
            {props.reloadIcon}
            <View style = {styles.card_left}>
                <Text style = {styles.temp}>{Math.round(main.temp)}<MaterialCommunityIcons name = "temperature-celsius" size = {50} /></Text>
            </View>

            <View style = {styles.card_right}>
                <Image style = {styles.icon} source = { { uri : `https://openweathermap.org/img/wn/${details.icon}@4x.png` }} />

                <View>
                    <Text style = {styles.description}>{details.description}</Text>
                    <Text style = {styles.period}>{`Good ${getCurrentPeriod()} !`}</Text>
                </View>
            </View>
        </View>

        <View>
            <Text>Lagos, Nigeria</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({

    card_left : {
        alignItems: 'center',
        justifyContent : 'center'
    },

    card_right : {
        
    },

    icon : {
        width : 100,
        height : 100
    },

    description : {
        marginVertical : 10,
        fontSize : 15,
        textTransform : 'uppercase',
        letterSpacing : 2,
        color: '#EEE'
    },

    period : {
        color: '#9AC914'
    },

    temp : {
        color: '#9AC914',
        fontSize : 50
    }
    
})