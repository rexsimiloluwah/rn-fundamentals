import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, LogBox} from 'react-native';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {globalStyles} from "./styles/globalStyles";
import Navigator from "./navigators/rootDrawer";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  else{
    return(
      <Navigator />
    )
  }
  
}

const styles = StyleSheet.create({

});
