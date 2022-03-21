import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput , FlatList } from 'react-native';
import { headerTintColor, navigationHeaderColor, textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import { containerStyle, mainTextStyle } from '../components/variables';

import { Calendar } from 'react-native-calendars';

import { LocaleConfig } from 'react-native-calendars';
import CustomButton from '../components/CustomButton';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { dropDatabase, getAll, getBarberDispo, insertAppoinment } from '../db/SqlManager';

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
  const barber = route.params.barber;
  //Fetch holidays
  const currentDate = new Date().toISOString().slice(0, 10)
  const [holidays, setHolidays] = useState([]);
  const [daySelected, setDaySelected] = useState(currentDate);
  const getHolidays = () => {
    fetch('https://date.nager.at/api/v2/publicholidays/2022/CA/')
      .then(resp => resp.json())
      .then(json => setHolidays(json));
  };
  useEffect(() => { getHolidays() }, []);

  const markedDates = () => {
    let dates = {};
    holidays.forEach(element => {
      dates[element.date] = {  selected: true, selectedColor: 'red' };
    });
    dates[daySelected] = { selected: true, selectedColor: '#95C9FF', disableTouchEvent: true, marked: true };
    return dates;
  }

  const TimeAvl = () => {
    getAll('appoinments' , tab=>console.log(tab));
    const [data , setData] = useState([]);
    useEffect(()=>{
      getBarberDispo(1, daySelected, (disp) => setData(disp));
    },[]);
    const renderItem = ({item})=>{
      return(
        <Text>{item}</Text>
      );
    }
    // flat List pour les dispo
    
    return (
      <FlatList
      data={data}
      renderItem={renderItem}
      ></FlatList>
    );
  };

  const BookDate = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

   

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Book your appoinment here with {barber.name} !</Text>
        <TextInput style={styles.input} placeholder='Name' onChangeText={setName}></TextInput>
        <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>

        <Calendar
          style={styles.calendar}
          current={daySelected}
          minDate={currentDate}
          markedDates={markedDates()}
          maxDate='2023-01-01'
          enableSwipeMonths={true}
          onDayPress={date => { console.log(date); setDaySelected(date.dateString) }}
         
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
  text:{
    ...mainTextStyle,
  }

})
export default Booking;
