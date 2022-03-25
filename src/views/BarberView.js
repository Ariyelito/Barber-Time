
import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import { headerTintColor, navigationHeaderColor } from '../components/colors';
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
      await AsyncStorage.removeItem('login')
    } catch (e) {
      console.log('error while erasing login info' + e)
    }
  }
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
            />
          )
        }}
      />
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
