import React from 'react';
import { DataTable } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, View } from 'react-native'; 

const Lastcities = ({ route }) => {

    const geoLocation = route.params.geoLocation;
    const city = geoLocation.results[0].components.county;
    const country = geoLocation.results[0].components.country;
    const [myCities, setCities] =  React.useState(false);
    const date = new Date ();


    //SETTING THE VALUES I WANT TO KEEP SAVED
    const saveData = async () => {
        try {
            let values = { 
                city: city,
                country: country,
                date: date,
            };

            // DEFINING ASYNCSTORAGE:
            await AsyncStorage.setItem('values', JSON, stringify(values)); 
            let allPlaces = JSON.parse(await AsyncStorage.getItem('allPlaces')) || [];
            allPlaces.push(values);
            await AsyncStorage.setItem('allPlaces', JSON, stringify(allPlaces));
            showData();

        } catch (e) {
            console.log(e);
        }
    };


    const showData = async () => {
        let allLocations = await AsyncStorage.getItem('allPlaces') && JSON.parse(await AsyncStorage.getItem('allPlaces'));
        setCities(allLocations);
    };

    React.useEffect(() => {
        showData();
    }, []);


    //RETURN SECTION:
    return (
        <View>
            <Button title="Press here to save your location" onPress={saveData}/>
            
            {myCities && myCities.map((item, index) => (
                <ul key={index}>
                    <li>item.city</li>
                    <li>item.country</li>
                    <li>item.date</li>
                </ul>
            ))}
        </View>





        /*
        <DataTable>
     <DataTable.Header>
          <DataTable.Title style={styles.tabletitles}>City</DataTable.Title>
          <DataTable.Title>Country</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Florence</DataTable.Cell>
      <DataTable.Cell>Italy</DataTable.Cell>
      <DataTable.Cell>August/2020</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Rio de Janeiro</DataTable.Cell>
      <DataTable.Cell>Brasil</DataTable.Cell>
      <DataTable.Cell>May/2019</DataTable.Cell>
    </DataTable.Row>

    </DataTable> 
        */

    ); 
};


//STYLE SECTION:
const styles = StyleSheet.create({
   
    tabletitles: {
        fontWeight: 'bold',
        color: '#FFCC66',
    },
});



export default Lastcities
