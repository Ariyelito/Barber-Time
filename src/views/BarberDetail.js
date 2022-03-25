import React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { containerStyle, mainTextStyle } from '../components/Variables';



const BarberDetail = ({navigation}) => {
  
    const barber = useSelector(state => state.client.selBarber);
    console.log(barber)
    
  return (
    <View style={styles.container}>
        <Text style={[styles.text,{marginTop:20}]}>Get a fresh cut from : {barber.name}</Text>
        <View style={styles.btnStyle}>
        <Text style={[styles.text,{marginTop:20}]}>Address :  {barber.adress}</Text>
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
        marginBottom:20,
    }, text:{
      ...mainTextStyle,
    }
    
  })
export default BarberDetail;
