
import React from 'react';
import { StyleSheet } from 'react-native';
import { HEADER_TINT_COLOR, NAVIGATION_HEADER_COLOR } from '../components/Colors';
import Home from '../views/Home';
import Booking from '../views/Booking';
import ListBarbers from '../views/ListBarbers';
import ProfileBarber from '../views/ProfileBarber';
import BarberDetail from '../views/BarberDetail';
import BarberLocation from '../views/BarberLocation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

// create a component
const ClientView = () => {
  const barber = useSelector(state => state.client.selBarber);

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: NAVIGATION_HEADER_COLOR,
      },
      headerTintColor: HEADER_TINT_COLOR,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}  >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home'
        }} />
      <Stack.Screen
        name="ListBarbers"
        component={ListBarbers}
        options={{
          headerTitle: 'Choose your barber'
        }} />
      <Stack.Screen
        name="BarberDetail"
        component={BarberDetail}
        options={{
          headerTitle: 'Barber details'
        }} />
      <Stack.Screen
        name="BarberLocation"
        component={BarberLocation}
        options={{
          headerTitle: barber.name + "'s salon location"
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{}} />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ClientView;
