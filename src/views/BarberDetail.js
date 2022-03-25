import React, { useState, useEffect } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { containerStyle, mainTextStyle } from '../components/Variables';



const BarberDetail = ({navigation}) => {
  
    const barber = useSelector(state => state.client.selBarber);
    
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Barber Detail: {barber.name}</Text>
        <View style={styles.btnStyle}>
        <CustomButton text={'Show on Map'} onPress={()=>{navigation.navigate('BarberLocation');}}></CustomButton>
        <CustomButton text={'Book an appoinment'} onPress={()=>{navigation.navigate('Booking');}}></CustomButton>
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
    }, text:{
      ...mainTextStyle,
    }
    
  })
export default BarberDetail;
