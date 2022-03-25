import React, { useState, useEffect } from 'react';
import { View, Image ,  Text, TouchableOpacity, StyleSheet } from 'react-native';
import  CustomButton  from './../components/CustomButton';
import { containerStyle, mainTextStyle } from '../components/Variables';
import { createTables } from '../db/SqlManager';



 const Home = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
       
       <Image style={styles.logo} source={require('./../../images/logo.png')}></Image>
        <Text style={styles.text}>Barber Time</Text>
      
     
      <CustomButton text={'Trouver un barbier!'} onPress={()=>{navigation.navigate('ListBarbers')}}></CustomButton>
     
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle ,
  } , 
  logo:{
    width:200,
    height : 200,
  },
  button:{
    
  },
  text:{
    ...mainTextStyle,
  }
})
export default Home;
