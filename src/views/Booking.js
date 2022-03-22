import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Alert } from 'react-native';
import { headerTintColor, navigationHeaderColor, textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import { containerStyle, mainTextStyle } from '../components/variables';

import ScheduleListItem from '../components/ScheduleListItem'
import { Calendar } from 'react-native-calendars';

import { LocaleConfig } from 'react-native-calendars';
import CustomButton from '../components/CustomButton';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { dropDatabase, getAll, getBarberDispo, insertAppoinment } from '../db/SqlManager';

import { useSelector, useDispatch } from 'react-redux';
import * as clientActions from '../redux/actions/clientActions'
import TimeAvalScreen from '../components/booking/TimeAvalScreen';
import CalendarScreen from '../components/booking/CalendarScreen';
import UserInfoScreen from '../components/booking/UserInfoScreen';

const Stack = createNativeStackNavigator();




const Booking = ({ route, navigation }) => {
  const barber = route.params.barber;
  //Fetch holidays


  const dispatch = useDispatch();

  
  // cant get correct payload
  
  // useEffect(() => {
  //   dispatch(clientActions.fetchHolidays())
  // }, [dispatch]);

  // // redux (get) states
  // const holidays = useSelector(state => state.client.holidays);
  // console.log('redux holidays :')
  // console.log(holidays)

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: navigationHeaderColor,
      },
      headerTintColor: headerTintColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerShown: false,
    }}  >
         <Stack.Screen
        name="UserInfoScreen"
        component={UserInfoScreen}
        options={{}} />
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{}} />
      <Stack.Screen
        name="TimeAvalScreen"
        component={TimeAvalScreen}
        options={{}} />
      
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    ...containerStyle,

  },
  input: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center',
    backgroundColor: textInputBackgroundColor,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: textInputBackBorderColor,
    elevation: 8,
  },
  calendar: {

  },
  text: {
    ...mainTextStyle,
  }

})
export default Booking;
