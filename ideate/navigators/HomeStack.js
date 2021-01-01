import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import IdeaDetails from '../screens/IdeaDetails';
import Header from '../components/Header';

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
])

const screens = {

    Home : {
        screen : Home,
        navigationOptions : ({navigation}) => (
            {
                headerTitle : () => <Header navigation = {navigation} headerText = "Ideate App"/>
            }
        )
    },

    IdeaDetails : {
        screen : IdeaDetails,
        navigationOptions : {
            title : 'Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
        defaultNavigationOptions : {
            headerStyle : {
                backgroundColor: '#3ee'
            }
        }}
    )


export default HomeStack;