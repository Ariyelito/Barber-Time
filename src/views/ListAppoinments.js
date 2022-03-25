import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import BarberApointementListItem from '../components/BarberApointementListItem';
import { containerStyle } from '../components/Variables';
import { getAll } from '../db/SqlManager';
import { useSelector } from 'react-redux';


const ListAppoinments = () => {
  const barber = useSelector(state => state.barber.connected);
  const [data, setData] = useState([]);

  useEffect(() => {
    //getAll('barbers', tab=>console.log(tab) );
    getAll('appoinments', tab => setData(tab.filter(elem=>elem.barberId !== barber.barberId)));
    
  }, []);


  const renderItem = ({ item }) => {
    console.log(item);


    return (
      <BarberApointementListItem barber={item} onPressHandler={() => { console.log("remove apointement") }} />
    );

  }


  return (
    <View style={styles.container}>
      {data.length != 0 ?
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
      ></FlatList>
     : <Text >{barber.name}, vous n'avez aucun rendez-vous</Text>}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
  },
  flatList: {
    alignSelf: 'stretch',

  }

})

export default ListAppoinments;
