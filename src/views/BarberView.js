
import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import { HEADER_TINT_COLOR, NAVIGATION_HEADER_COLOR } from '../components/Colors';
import HomeBarber from '../views/HomeBarber';
import Login from '../views/Login';
import Signup from '../views/Signup';
import ProfileBarber from '../views/ProfileBarber';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// create a component
const ClientView = ({ navigation }) => {

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@login')
      console.log('successfully logged out')
    } catch (e) {
      console.log('error while erasing login info' + e)
    }
  }
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
        options={{
          headerTitle: 'Home'
        }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          headerRight: () => (

            <Button
              onPress={() => navigation.navigate('Setting')}
              title="Settings">
            </Button>

          ),

        }} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{}} />
      <Stack.Screen
        name="ProfileBarber"
        component={ProfileBarber}
        options={{
          headerTitle: 'Your appoinments',
          headerRight: () => (
            <Button
              onPress={() => {
                logout();
                navigation.goBack()
              }}
              title="LOGOUT"
              color='#2196F3'
            />)
        }} />

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
