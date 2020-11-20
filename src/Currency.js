import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';



const Currency = ({ route }) => {
  let iso_code = route.params.iso_code;
  let geoLocation = route.params.geoLocation;
  let rates = route.params.rates;
  let [localCurrency, setLocalCurrency] = useState('');
  let [usd, setUsd] = useState('');

  console.log(route);  

    return (
      <View>
      
<Text>Enter the amount of $ here:</Text>
      <TextInput onChangeText={(usdAmount) => setLocalCurrency(usdAmount * rates)} 
      style={{
        borderWidth:2, 
        width: 80, 
        height: 50, 
        borderColor: 'blue'}}/>
      <Text>{localCurrency && localCurrency.toFixed(3) + geoLocation.results[0].annotations.currency.symbol}</Text>

      <Text>Enter the amount of {iso_code} here:</Text>
      <TextInput onChangeText={(amount) => setUsd(amount / rates)} 
      style={{
        borderWidth:2, 
        width: 80, 
        height: 50, 
        borderColor: 'blue'}}/>
      <Text>{usd && usd.toFixed(3) + '$'}</Text>

        </View>

       
    )
}

export default Currency
