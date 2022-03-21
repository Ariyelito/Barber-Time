import React, { useState, useEffect } from 'react';
import { View, Text , FlatList , StyleSheet } from 'react-native';


import { useSelector, useDispatch } from 'react-redux';
import { getBarberDispo, insertAppoinment } from '../../db/SqlManager';
import { textInputBackBorderColor, textInputBackgroundColor } from '../colors';
import ScheduleListItem from '../ScheduleListItem';
import { containerStyle, mainTextStyle } from '../variables';
import * as clientActions from './../../redux/actions/clientActions'

const TimeAvalScreen = () => {
    const name = useSelector(state => state.client.name)
    const email = useSelector(state => state.client.email)
    const daySelected = useSelector(state => state.client.daySelected)

    //getAll('appoinments' , tab=>console.log(tab));
    const [data, setData] = useState([]);
    useEffect(() => {
      getBarberDispo(1, daySelected, (disp) => setData(disp));
    }, []);

    const pressHandler = (time) => {

      insertAppoinment(email, name, daySelected, time, barber.barberId);
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
export default TimeAvalScreen;
