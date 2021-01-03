import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
// Package for fetching location
import * as Location from 'expo-location';
import axios from '../utils/axiosBase';
import {globalStyles} from '../globalStyles';
import MainWeatherCard from '../components/MainWeatherCard';
import RefreshIcon from '../components/RefreshIcon';
import Card from '../components/Card';
import {Ionicons, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';

const WEATHER_MAP_APIKEY = "83663b69f57c184314cc036e70eacbf3"

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState()
  const [loading, setLoading] = useState(false);

  const load = async () => {

    try{
      setLoading(true)
      let {status} = await Location.requestPermissionsAsync()
      // console.log(status) 

      if(status !== "granted"){
        setErrorMessage("Access denied, You need to allow App to read location.")
        setLoading(false);
        return
      }

      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords;

      axios.get(`weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_MAP_APIKEY}`)
      .then((result) => {
        setWeatherData(result.data);
        console.log(result.data);
        setLoading(false)
      })
      .catch(err => {
        setErrorMessage(err.message);
        setLoading(false)
        console.error(err);
      })

    //   alert(`Longitude : ${longitude}, Latitude : ${latitude}`)

    }
    catch(err){
      console.error(err)
      setLoading(false);
      setErrorMessage(err.message)
    }
  }

  useEffect( () => {
    load()
  }, [])

  if(weatherData){

    const {main, wind} = weatherData;
    console.log(main)

    const weatherDetails = [
      {title: "Feels like", value : Math.round(main.feels_like), unit : "℃", icon : <FontAwesome5 name = "temperature-high" size = {30} color= "#9AC914" />},
      {title: "Humidity", value: Math.round(main.humidity), unit : "%", icon : <Ionicons name="water-outline" size ={30} color="#9AC914" />},
      {title : "Pressure", value: Math.round(main.pressure), unit: "hPa", icon : <Ionicons name="speedometer-outline" size = {30} color = "#9AC914" />},
      {title: "Wind speed", value: Math.round(wind.speed), unit: "m/s", icon : <MaterialCommunityIcons name="weather-windy-variant" size ={30} color = "#9AC914" />}
    ]

    return (
      <View style = {globalStyles.container}>
          <MainWeatherCard currentWeather = {weatherData} reloadIcon = {<RefreshIcon reload = {load} />} />

          <View style = {styles.weatherdetails}>
            { weatherDetails.map((item, id) => (
              <Card key = {id} title = {item.title} value = {item.value} unit = {item.unit} icon = {item.icon} />
            ))}
          </View>
      </View>
    );
  }
  else{
    return (
      <View style = {styles.loading}>
        <Text>{loading ? <ActivityIndicator size = {50} color = "#9AC914"/> : ""}</Text>
        <Text>{errorMessage ? erroMessage : ""}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({

  loading : {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  },

  weatherdetails : {
    marginTop : 'auto',
    marginBottom : 30,
    justifyContent: 'space-between',
    flexDirection : 'row',
    flexWrap : 'wrap'
  }
});
