import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


//SETTING THE CURRENCY ROUTE
const Currency = ({ route }) => {
  let iso_code = route.params.iso_code;
  let geoLocation = route.params.geoLocation;
  let rates = route.params.rates;
  let [localCurrency, setLocalCurrency] = useState('');
  let [usd, setUsd] = useState('');

  //RETURN SECTION:
  return (
    <View>
      
      <Text style={styles.text}>Enter the amount of $ here:</Text>
      <TextInput onChangeText={(usdAmount) => setLocalCurrency(usdAmount * rates)} //BOX FOR USERS INPUT THE USD AMOUNT AND CONVERT TO THE LOCAL CURRANCY  
        style={{
          borderWidth:4, 
          width: 95, 
          height: 50,
          alignSelf: 'center',
          marginBottom: 10, 
          borderColor: '#336699'
        }}/>
      <Text style={styles.answers}>{localCurrency && localCurrency.toFixed(3) + geoLocation.results[0].annotations.currency.symbol}</Text>  
      
      <Text style={styles.text}>Enter the amount of {iso_code} here:</Text>
      <TextInput onChangeText={(amount) => setUsd(amount / rates)} //BOX FOR USERS INPUT THE LOCAL CURRENCY AMOUNT AND CONVERT TO USD
        style={{
          borderWidth:4, 
          width: 95, 
          height: 50,
          alignSelf: 'center', 
          borderColor: '#336699'
        }}/>
      <Text style={styles.answers}>{usd && usd.toFixed(3) + '$'}</Text> 

    </View>
  );
};


//STYLE SECTION:
const styles = StyleSheet.create({
   
  text: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#FFCC00',
  },

  answers: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    color: '#336699',
    marginBottom: 60,  
  },
});


export default Currency
