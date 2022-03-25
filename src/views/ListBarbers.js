import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { containerStyle } from '../components/Variables';
import BarberListItem from './../components/BarberListItem';
import { getAll } from './../db/SqlManager';
import { useSelector, useDispatch } from 'react-redux';
import * as clientActions from '../redux/actions/clientActions'

const ListBarbers = ({ navigation }) => {

  // const [data , setData] = useState([]);

  // useEffect(()=>{
  //   getAll('barbers' , tab=>setData(tab) );
  //   console.log("barber list :")
  //   console.log(data)
  // },[]);

  const dispatch = useDispatch();

  useEffect(() => {
    // redux actions : fetch barbers from db
    getAll('barbers', tab => dispatch(clientActions.fetchBarbers(tab)));
  }, [dispatch]);

   // redux (get) states
  const data = useSelector(state => state.client.barbers)
 

  const onPressHandler=(item)=>{
    console.log(item)
    dispatch(clientActions.selectedBarber(item));
     navigation.navigate('BarberDetail');
  }

  const renderItem = ({ item }) => {
    return (
      <BarberListItem name={item.name} adress={item.adress} onPress={()=>onPressHandler(item)}></BarberListItem>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Text>Choose a barber :</Text> */}
      <FlatList style={styles.flatList}
        data={data}
        renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
  },
  flatList: {
    alignSelf: 'stretch',
  }
})

export default ListBarbers;

