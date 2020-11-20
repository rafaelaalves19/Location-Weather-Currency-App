import React from 'react';
import { DataTable } from 'react-native-paper';

const Lastcities = ({ route }) => {

    const geoLocation = route.params.geoLocation;


    return (
        <DataTable>
    <DataTable.Header>
      <DataTable.Title>City</DataTable.Title>
      <DataTable.Title numeric>Country</DataTable.Title>
      <DataTable.Title numeric>Date</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

  </DataTable>
    )
}

export default Lastcities
