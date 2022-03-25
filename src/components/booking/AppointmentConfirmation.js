//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { insertAppoinment } from '../../db/SqlManager';
import { TEXT_INPUT_BACK_BORDER_COLOR, TEXT_INPUT_BACKGROUND_COLOR, MAIN_TEXT_COLOR } from '../Colors';
import CustomButton from '../CustomButton';
import { containerStyle, mainTextStyle } from '../Variables';

// create a component
const AppointmentConfirmation = ({ navigation }) => {

  const barber = useSelector(state => state.client.selBarber);
  const name = useSelector(state => state.client.name);
  const email = useSelector(state => state.client.email);
  const daySelected = useSelector(state => state.client.day);
  const time = useSelector(state => state.client.time);

  console.log(time);
  const cancelAppointment = () => {
    navigation.navigate('BarberDetail');
  }
  const confirmAppointment = () => {
    insertAppoinment(email, name, daySelected, time, barber.barberId);
    alert('Appoinment was booked succesfuly');
    navigation.navigate('Home');
  }
  return (

    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={[styles.text, { marginTop: 20, marginBottom:10 }]}>Confirm your appointment :</Text>
        <Text style={styles.textSmall}>Date : {daySelected}</Text>

        <Text style={styles.textSmall}>Time : {time}</Text>

        <Text style={styles.textSmall}>Barber : {barber.name}</Text>

        <Text style={styles.textSmall}>Name : {name}</Text>
        <Text style={styles.textSmall}>Email : {email}</Text>
        <View style={{alignItems:'flex-start'}}>
          <CustomButton text={"Cancel"} onPress={cancelAppointment} />
          <CustomButton text={"Confirm"} onPress={confirmAppointment} />
        </View>

      </View>


    </View>




  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    ...containerStyle,

  },
  containerInfo: {
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
  },
  textSmall: {
    fontSize: 20,
    color: MAIN_TEXT_COLOR,

  }


});

//make this component available to the app
export default AppointmentConfirmation;
