import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TEXT_INPUT_BACK_BORDER_COLOR, TEXT_INPUT_BACKGROUND_COLOR } from '../Colors';
import CustomButton from '../CustomButton';
import { containerStyle, mainTextStyle } from '../Variables';
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

  const selectedDay = useSelector(state => state.client.day)

  const currentDay = new Date().toISOString().slice(0, 10);



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
    dates[selectedDay] = { selected: true, selectedColor: '#95C9FF', disableTouchEvent: true, marked: true };
    return dates;
  }

  const next = () => {

    navigation.navigate('TimeAvalScreen');
  }
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginTop: 20, marginBottom: 10 }]}>Choose date :</Text>
      <Calendar
        style={styles.calendar}
        current={selectedDay}
        minDate={currentDay}
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
export default CalendarScreen;
