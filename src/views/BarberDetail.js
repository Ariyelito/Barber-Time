import React, { useState, useEffect } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import { containerStyle } from '../components/variables';



const BarberDetail = ({route , navigation}) => {
    const barber = route.params.barber;
  return (
    <View style={styles.container}>
        <Text>Barber Detail: {barber.name}</Text>

     

        <View style={styles.btnStyle}>
        <CustomButton text={'Show on Map'} onPress={()=>{navigation.navigate('BarberLocation' , {barber:barber});}}></CustomButton>
        <CustomButton text={'Book an appoinment'} onPress={()=>{}}></CustomButton>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      ...containerStyle , 
    } , 
    flatList:{
      alignSelf:'stretch',
    },
    btnStyle:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:20,
    },
    
  })
export default BarberDetail;
