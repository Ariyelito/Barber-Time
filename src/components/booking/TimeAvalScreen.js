import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


import { useSelector, useDispatch } from 'react-redux';
import { getBarberDispo } from '../../db/SqlManager';
import { TEXT_INPUT_BACK_BORDER_COLOR, TEXT_INPUT_BACKGROUND_COLOR } from '../Colors';
import ScheduleListItem from '../ScheduleListItem';
import { containerStyle, mainTextStyle } from '../Variables';
import * as clientActions from './../../redux/actions/clientActions'

const TimeAvalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const daySelected = useSelector(state => state.client.day)
  const barber = useSelector(state => state.client.selBarber);

 
  
  //getAll('appoinments' , tab=>console.log(tab));
  const [data, setData] = useState([]);
  useEffect(() => {
    getBarberDispo(barber.barberId, daySelected, (disp) => setData(disp));
  }, []);

  const pressHandler = (time) => {

    dispatch(clientActions.selectedTime(time));
    navigation.navigate('AppointmentConfirmation');
  }


  const renderItem = ({ item }) => {
    return (
      <ScheduleListItem time={item} onPress={pressHandler} />
    );
  }
  return (
    <>
      <Text style={[styles.text, { marginTop: 10, marginBottom: 10, textAlign:'center' }]}>Choose the time :</Text>
      <FlatList
        style={styles.flatList}
        data={data}
        // numColumns={3}    
        renderItem={renderItem}
      >
      </FlatList>
    </>
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
export default TimeAvalScreen;
