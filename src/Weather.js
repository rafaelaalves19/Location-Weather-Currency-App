import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Weather = ({ route} ) => {

    const weather = route.params;

console.log(route);

    return (
        <View>
            
            <Text>{weather.cod==200 && weather.main.temp}º Celsius</Text>
      <Text>{weather.cod==200 && weather.weather[0].description}</Text>
    
        </View>
    )
}

export default Weather
