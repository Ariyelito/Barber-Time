import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { textInputBackBorderColor, textInputBackgroundColor } from '../colors';
import CustomButton from '../CustomButton';
import { containerStyle, mainTextStyle } from '../variables';
import { Calendar } from 'react-native-calendars';
import { useSelector, useDispatch } from 'react-redux';
import * as clientActions from './../../redux/actions/clientActions'
import { LocaleConfig } from 'react-native-calendars';

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




const CalendarScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const name = useSelector(state => state.client.name)
  const email = useSelector(state => state.client.email)
  // const barber = useSelector(state => state.barber)
  const selectedDay = useSelector(state => state.client.day)


  const currentDate = new Date().toISOString().slice(0, 10)
  const [daySelected, setDaySelected] = useState(currentDate);

  const [holidays, setHolidays] = useState([]);
  const getHolidays = () => {
    fetch('https://date.nager.at/api/v2/publicholidays/2022/CA/')
      .then(resp => resp.json())
      .then(json => setHolidays(json));
  };
  useEffect(() => { getHolidays() }, []);

  const markedDates = () => {
    let dates = {};
    holidays.forEach(element => {
      dates[element.date] = { selected: true, selectedColor: 'red' };
    });
    dates[daySelected] = { selected: true, selectedColor: '#95C9FF', disableTouchEvent: true, marked: true };
    return dates;
  }

  const next = () => {
    //   if (name == '') {
    //     Alert.alert("Veuillez entrez votre nom.");
    //   } else if (email == '') {
    //     Alert.alert("Veuillez entrez votre émail.");
    //   } else {
    //     navigation.navigate('TimeAvalScreen');
    //   }
    navigation.navigate('TimeAvalScreen');
  }
  return (
    <View style={styles.container}>

      <Calendar
        style={styles.calendar}
        current={daySelected}
        minDate={currentDate}
        markedDates={markedDates()}
        maxDate='2023-01-01'
        enableSwipeMonths={true}
        onDayPress={date => { console.log(date); dispatch(clientActions.selectDay(date.dateString)) }}

      ></Calendar>
      <CustomButton text={'next'} onPress={next}></CustomButton>
    </View>
  );
};
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
export default CalendarScreen;
