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
  const [daySelected, setDaySelected] = useState(currentDate);

  const [holidays, setHolidays] = useState([]);
  const getHolidays = () => {
    fetch('https://date.nager.at/api/v2/publicholidays/2022/CA/')
      .then(resp => resp.json())
      .then(json => setHolidays(json));
  };
  useEffect(() => { getHolidays() }, []);

  const dispatch = useDispatch();

  
  // cant get correct payload
  
  // useEffect(() => {
  //   dispatch(clientActions.fetchHolidays())
  // }, [dispatch]);

  // // redux (get) states
  // const holidays = useSelector(state => state.client.holidays);
  // console.log('redux holidays :')
  // console.log(holidays)



  const markedDates = () => {
    let dates = {};
    holidays.forEach(element => {
      dates[element.date] = { selected: true, selectedColor: 'red' };
    });
    dates[daySelected] = { selected: true, selectedColor: '#95C9FF', disableTouchEvent: true, marked: true };
    return dates;
  }

  const TimeAvl = () => {
    //getAll('appoinments' , tab=>console.log(tab));
    const [data, setData] = useState([]);
    useEffect(() => {
      getBarberDispo(1, daySelected, (disp) => setData(disp));
    }, []);

    const pressHandler = (time) => {

      insertAppoinment(email, nameCl, daySelected, time, barber.barberId);
    }


    const renderItem = ({ item }) => {
      return (
        <ScheduleListItem time={item} onPress={pressHandler} />
      );
    }
    // flat List pour les dispo

    return (
      <FlatList
        style={styles.flatList}
        data={data}
        // numColumns={3}    
        renderItem={renderItem}
      ></FlatList>
    );
  };

  const BookDate = () => {
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const name = useSelector(state => state.client.name)
    const email = useSelector(state => state.client.email)

    const next = () => {
      if (name == '') {
        Alert.alert("Veuillez entrez votre nom.");
      } else if (email == '') {
        Alert.alert("Veuillez entrez votre émail.");
      } else {
        navigation.navigate('TimeAvl', { barber: barber });
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Book your appoinment here with {barber.name} !</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Name' 
        onChangeText={(value) => {
          dispatch(clientActions.setName(value))
        }}
        >
        </TextInput>
        <TextInput 
        style={styles.input} 
        placeholder='Email' 
        onChangeText={(value) => {
          dispatch(clientActions.setEmail(value))
        }}
        >
        </TextInput>

        <Calendar
          style={styles.calendar}
          current={daySelected}
          minDate={currentDate}
          markedDates={markedDates()}
          maxDate='2023-01-01'
          enableSwipeMonths={true}
          onDayPress={date => { console.log(date); setDaySelected(date.dateString) }}

        ></Calendar>
        <CustomButton text={'next'} onPress={next}></CustomButton>
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
  text: {
    ...mainTextStyle,
  }

})
export default Booking;
