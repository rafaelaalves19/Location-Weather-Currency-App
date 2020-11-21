import React from 'react';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, View } from 'react-native'; 


//SETTING THE LAST CITIES LOCATION ROUTE:
const Lastcities = ({ route }) => {
    const geoLocation = route.params;
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

            //USING ASYNCSTORAGE TO STORAGE DATA FROM THE LAST LOCATIONS VISITED:
            await AsyncStorage.setItem('values', JSON.stringify(values)); 
            let allPlaces = JSON.parse(await AsyncStorage.getItem('allPlaces')) || [];
            allPlaces.push(values);
            await AsyncStorage.setItem('allPlaces', JSON.stringify(allPlaces));
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
            <Button
            title="Press here to save your current location"
            color='#FFCC66'
            onPress={saveData}/>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>City</DataTable.Title>
                    <DataTable.Title>Country</DataTable.Title>
                    <DataTable.Title>Date</DataTable.Title>
                </DataTable.Header>
                {myCities && myCities.map((item, index) => ( //using map function to go through the objects in the allPlaces array
                <DataTable.Row key={index}>
                    <DataTable.Cell>{item.city}</DataTable.Cell>
                    <DataTable.Cell>{item.country}</DataTable.Cell>
                    <DataTable.Cell>{item.date}</DataTable.Cell>
                </DataTable.Row>
                ))};
            </DataTable> 
        </View>
    ); 
};


export default Lastcities
