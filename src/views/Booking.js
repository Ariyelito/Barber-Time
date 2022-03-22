import React, { } from 'react';
import {  StyleSheet } from 'react-native';
import { headerTintColor, navigationHeaderColor, textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import { containerStyle, mainTextStyle } from '../components/variables';



import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { useSelector, useDispatch } from 'react-redux';

import TimeAvalScreen from '../components/booking/TimeAvalScreen';
import CalendarScreen from '../components/booking/CalendarScreen';
import UserInfoScreen from '../components/booking/UserInfoScreen';

const Stack = createNativeStackNavigator();




const Booking = () => {

  
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
