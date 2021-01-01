import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import About from '../screens/About';
import Header from '../components/Header';

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
])

const screens = {

    About : {
        screen : About,
        navigationOptions : ({navigation}) => (
            {
                headerTitle : () => <Header navigation = {navigation} headerText = "About Ideate App"/>
            }
        )
    },

}

const AboutStack = createStackNavigator(screens, {
        defaultNavigationOptions : {
            headerStyle : {
                backgroundColor: '#3ee'
            }
        }}
    )


export default AboutStack;