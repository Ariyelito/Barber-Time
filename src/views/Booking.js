import React, { } from 'react';
import {  StyleSheet } from 'react-native';
import { HEADER_TINT_COLOR, NAVIGATION_HEADER_COLOR, TEXT_INPUT_BACK_BORDER_COLOR, TEXT_INPUT_BACKGROUND_COLOR } from '../components/Colors';
import { containerStyle, mainTextStyle } from '../components/Variables';



import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { useSelector, useDispatch } from 'react-redux';

import TimeAvalScreen from '../components/booking/TimeAvalScreen';
import CalendarScreen from '../components/booking/CalendarScreen';
import UserInfoScreen from '../components/booking/UserInfoScreen';
import AppointmentConfirmation from '../components/booking/AppointmentConfirmation';

const Stack = createNativeStackNavigator();




const Booking = () => {

  
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: NAVIGATION_HEADER_COLOR,
      },
      headerTintColor: HEADER_TINT_COLOR,
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
        <Stack.Screen
        name="AppointmentConfirmation"
        component={AppointmentConfirmation}
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
    backgroundColor: TEXT_INPUT_BACKGROUND_COLOR,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: TEXT_INPUT_BACK_BORDER_COLOR,
    elevation: 8,
  },
  calendar: {

  },
  text: {
    ...mainTextStyle,
  }

})
export default Booking;
