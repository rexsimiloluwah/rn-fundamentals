import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const RootDrawer = createDrawerNavigator({

    Home : {
        screen : HomeStack
    },

    About : {
        screen : AboutStack
    }
})

export default createAppContainer(RootDrawer);