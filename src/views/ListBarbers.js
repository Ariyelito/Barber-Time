import React, { useState, useEffect } from 'react';
import { View, Text , FlatList , StyleSheet } from 'react-native';
import { containerStyle } from '../components/variables';
import BarberListItem from './../components/BarberListItem';
import {getAll} from './../db/SqlManager';

 const ListBarbers = ({ navigation }) => {


 
  const [data , setData] = useState([]);

  useEffect(()=>{
    getAll('barbers' , tab=>setData(tab) );
  },[]);
 

  const renderItem = ({item}) =>{
    return( 
     <BarberListItem name={item.name} adress={item.adress} onPress={()=>{navigation.navigate('BarberDetail' , {barber:item});}}></BarberListItem>
       
    );
};
  return (
    <View style={styles.container}>
        <Text>Choose a barber :</Text>
        <FlatList style={styles.flatList}
        data={data}
        renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle ,
  } , 
  flatList:{
    alignSelf:'stretch',
  }
})

export default ListBarbers;

