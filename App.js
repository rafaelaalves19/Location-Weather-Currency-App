import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home.js';
import Currency from './src/Currency.js';
import Weather from './src/Weather.js';
import Lastcities from './src/Lastcities.js';


const Stack = createStackNavigator();

export default function App() {

  return (
    
    //NAVIGATION CONTAINER INCLUDING THE 4 SCREENS:
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleStyle: { alignSelf: 'center'},
          }}
        />

        <Stack.Screen
          name="Currency"
          component={Currency}
          options={{
            headerTitleStyle: { alignSelf: 'center'},
          }}
        />

        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{
            headerTitleStyle: { alignSelf: 'center'},
          }}
        />

        <Stack.Screen
          name="Last Cities"
          component={Lastcities}
          options={{
            headerTitleStyle: { alignSelf: 'center'},
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
};


