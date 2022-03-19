import React, { useState, useEffect } from 'react';
import { View, Text , FlatList , StyleSheet } from 'react-native';
import { containerStyle } from '../components/variables';
import BarberListItem from './../components/BarberListItem';

 const ListBarbers = ({ navigation }) => {


  const DATA = [
    {
      id:1,
      name : 'Hakam' , 
      adress : '123 rue somewhere'
    },
    {
      id:2,
      name : 'Orlando' , 
      adress : '123 avn in some place'
    },
  ]


  const renderItem = ({item}) =>{
    return( 
     <BarberListItem name={item.name} adress={item.adress} onPress={()=>{navigation.navigate('BarberDetail' , {barber:item});}}></BarberListItem>
       
    );
};
  return (
    <View style={styles.container}>
        <Text>Choose a barber :</Text>
        <FlatList style={styles.flatList}
        data={DATA}
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

