import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Weather = ({ route} ) => {

    const weather = route.params;

    console.log(route); // APAGO???


    //RETURN SECTION:
    return (
        <View>
            <Text style={styles.degrees}>The temperature today is:</Text>
            <Text style={styles.infos}>{weather.cod==200 && weather.main.temp}º Celsius</Text>
            
            <Text style={styles.degrees}> The weather condition is:</Text>
            <Text style={styles.infos}>{weather.cod==200 && weather.weather[0].description}</Text>
        </View>
    );
};


//STYLE SECTION:
const styles = StyleSheet.create({
   
    degrees: {
      fontSize: 25,
      alignSelf: 'center',
      marginBottom: 10,
      marginTop: 20,
      fontWeight: 'bold',
      color: '#FFCC00',
    },
  
    infos: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 70,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#336699',
    },
});

export default Weather
