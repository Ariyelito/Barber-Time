import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import BarberApointementListItem from '../components/BarberApointementListItem';
import { containerStyle } from '../components/variables';
import { getAll } from '../db/SqlManager';


const ListAppoinments = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    //getAll('barbers', tab=>console.log(tab) );
    getAll('appoinments', tab => setData(tab));
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
     : <Text>Vous etes pas fresh</Text>}
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
