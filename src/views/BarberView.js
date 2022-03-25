
import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { HEADER_TINT_COLOR, NAVIGATION_HEADER_COLOR } from '../components/colors';

import HomeBarber from '../views/HomeBarber';
import Login from '../views/Login';
import Signup from '../views/Signup';
import ProfileBarber from '../views/ProfileBarber';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// create a component
const ClientView = () => {
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
                  name="HomeBarber"
                  component={HomeBarber}
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
                  name="ProfileBarber"
                  component={ProfileBarber}
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
