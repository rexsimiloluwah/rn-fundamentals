import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/Header';
import Home from '../screens/Home';
import About from '../screens/About';

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
])

const defaultNavigationOptions = {
    headerStyle : {
        backgroundColor : '#0D1117',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 12
    }
}

const AboutStack = createStackNavigator({

    About : {
        screen : About,
        navigationOptions : ({navigation}) => (
            {
                headerTitle : () => <Header headerText = "About Weather App" navigation = {navigation} />
            }
        )
    }

}, {defaultNavigationOptions : defaultNavigationOptions})

export default AboutStack;