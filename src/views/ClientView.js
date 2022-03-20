
import React from 'react';
import {  StyleSheet } from 'react-native';
import { headerTintColor, navigationHeaderColor } from '../components/colors';
import Home from '../views/Home';
import  Booking  from '../views/Booking';
import  ListBarbers  from '../views/ListBarbers';
import  ProfileBarber  from '../views/ProfileBarber';
import  BarberDetail  from '../views/BarberDetail';
import  BarberLocation  from '../views/BarberLocation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

// create a component
const ClientView = () => {
    return (
      
     
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
                  {/* <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{}} />
                  <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{}} /> */}
                  
                  <Stack.Screen
                  name="ListBarbers"
                  component={ListBarbers}
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
