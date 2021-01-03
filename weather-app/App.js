import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './navigators/rootDrawer';
import {StyleSheet} from 'react-native';

const WEATHER_MAP_APIKEY = "83663b69f57c184314cc036e70eacbf3"

export default function App() {

  return(
    <>
    <Navigation />
    <StatusBar auto = "true" />
    </>
  )
  
}

const styles = StyleSheet.create({
});
