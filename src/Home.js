import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


const Home = ({navigation}) => {

    let [latitude, setLatitude] = useState(null);
    let [longitude, setLongitude] = useState(null);
    let [geoLocation, setGeolocation] = useState('');
    let [currency, setCurrency] = useState('');
    let [weather, setWeather] = useState('');
    
    
    
    //SETTING THE ISO_CODE SYMBOL FROM OPENCAGE
    let iso_code = geoLocation && geoLocation.results[0].annotations.currency.iso_code;
    
    
    //SETTING THE RATE TO GET THE CURRENT LOCAL CURRENCY
    const rates = currency && currency.rates[Object.keys(currency.rates)[0]];
    
    
    //SETTING LATITUDE AND LONGITUDE 
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }
    
        let location = await Location.getCurrentPositionAsync({
          LocationAccuracy: 6
        });
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        console.log(location);
      })();
    }, []);
    
    
    //OPENCAGE API
    useEffect(() => {
      if(latitude && longitude) {
        fetch(`https://api.opencagedata.com/geocode/v1/json?key=a24854f1f66e4ac68427ef5998178e6f&q=${latitude}+${longitude}`)
        .then((response) => response.json())
        .then((json) => setGeolocation(json));
        }
    }, [latitude, longitude]);

  
    
    //EXCHANGE CURRANCY API
      useEffect(() => { //accessig external API
      fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${iso_code}`)
      .then((response) => response.json())
      .then((json) => setCurrency(json));
    }, [iso_code]); // to rendeer only once
    
    
    //WEATHER API
    useEffect(() => { 
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f709294418513e96e8730ce34e9bb43f&units=metric`) 
      .then((response) => response.json())
      .then((json) => setWeather(json));
    }, [latitude, longitude]); 



    return (
        <View>
            <Text>Welcome to</Text>
      <Text>{geoLocation && geoLocation.results[0].components.county}, {geoLocation && geoLocation.results[0].components.country + geoLocation.results[0].annotations.flag}</Text>

      <Button mode="contained" onPress={() => navigation.navigate('Weather', weather)}>
        Weather
      </Button>

      <Button mode="contained" onPress={() => navigation.navigate('Currency', {rates, iso_code, geoLocation})}>
        Currency
      </Button>

      <Button mode="contained" onPress={() => navigation.navigate('Last Cities', geoLocation)}>
        Last Cities
      </Button>
      
        </View>
    )
}

export default Home
