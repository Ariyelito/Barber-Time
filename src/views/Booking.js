import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { headerTintColor, navigationHeaderColor, textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import { containerStyle } from '../components/variables';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { LocaleConfig } from 'react-native-calendars';
import CustomButton from '../components/CustomButton';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

LocaleConfig.locales['fr'] = {

  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';



const Booking = ({ route, navigation }) => {

  const TimeAvl = () => {

    return (
      <Text>hello</Text>
    );
  };

  const BookDate = () => {
    const barber = route.params.barber;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const currentDate = new Date().toISOString().slice(0, 10)
    console.log(currentDate);
    return (
      <View style={styles.container}>
        <Text>Book your appoinment here with {barber.name} !</Text>
        <TextInput style={styles.input} placeholder='Name' onChangeText={setName}></TextInput>
        <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>

        <Calendar
          style={styles.calendar}
          current={currentDate}
          minDate={currentDate}
          maxDate='2023-01-01'
          enableSwipeMonths={true}
          onDayPress={date => { console.log(date) }}
        ></Calendar>
        <CustomButton text={'next'} onPress={() => { navigation.navigate('TimeAvl', { barber: barber }); }}></CustomButton>
      </View>
    );
  };



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
        name="BookDate"
        component={BookDate}
        options={{}} />
      <Stack.Screen
        name="TimeAvl"
        component={TimeAvl}
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

})
export default Booking;
