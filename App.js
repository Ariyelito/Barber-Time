import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
//import store from './src/redux/store'; sefefsdf

import Booking from './src/views/Booking'

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    // <Provider store={store}></Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Booking}
            options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
