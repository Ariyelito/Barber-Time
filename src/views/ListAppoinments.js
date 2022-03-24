import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import BarberApointementListItem from '../components/BarberApointementListItem';
import { containerStyle } from '../components/variables';
import { getAll } from '../db/SqlManager';
import { useSelector } from 'react-redux';


const ListAppoinments = () => {
  const barber = useSelector(state => state.barber.connected);


  const [data, setData] = useState([]);

  useEffect(() => {
    //getAll('barbers', tab=>console.log(tab) );
    getAll('appoinments', tab => setData(tab.filter(elem=>elem.barberId === barber.barberId)));
    
  }, []);


  const renderItem = ({ item }) => {
    console.log(item);


    return (
      <BarberApointementListItem time={item.time} name={item.nameClt} email={item.emailClt} onPressHandler={() => { console.log("remove apointement") }} />
    );

  }


  return (
    <View>
      {data.length != 0 ?
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
      ></FlatList>
     : <Text style={styles.message}>{barber.name}, vous n'avez aucun rendez-vous</Text>}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
  },
  flatList: {
    alignSelf: 'stretch',

  },
  message : {
    alignItems:'center'
  }

})

export default ListAppoinments;
