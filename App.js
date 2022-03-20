import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

// views


import  Signup  from './src/views/Signup';
import  ListBarbers  from './src/views/ListBarbers';
import Home from './src/views/Home';
import Login from './src/views/Login';
import { headerTintColor, navigationHeaderColor } from './src/components/colors';
import ProfileBarber from './src/views/ProfileBarber';
import BarberDetail from './src/views/BarberDetail';
import BarberLocation from './src/views/BarberLocation';
import Booking from './src/views/Booking';

import { createTablesDb } from './src/manger/SqlManger';


const Stack = createNativeStackNavigator();

const App = () => {
  
createTablesDb();
  return (
    <Provider store={store} >
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: navigationHeaderColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}  >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{}} />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{}} />
            <Stack.Screen
            name="Signup"
            component={Signup}
            options={{}} />
            
            <Stack.Screen
            name="ListBarbers"
            component={ListBarbers}
            options={{}} />
             
             <Stack.Screen
            name="ProfileBarber"
            component={ProfileBarber}
            options={{}} /> 
            <Stack.Screen
            name="BarberDetail"
            component={BarberDetail}
            options={{}} />
             <Stack.Screen
            name="BarberLocation"
            component={BarberLocation}
            options={{}} />
            <Stack.Screen
            name="Booking"
            component={Booking}
            options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
