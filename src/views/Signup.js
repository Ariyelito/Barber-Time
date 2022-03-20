import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput , Alert } from 'react-native';
import { textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import CustomButton from '../components/CustomButton';
import { containerStyle } from '../components/variables';
import {  insertBarber , getAll, dropDatabase, insertAppoinment, barberExist } from '../db/SqlManager';


const Signup = ({navigation}) => {

  const [name , setName] = useState('');

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [adress , setAdress] = useState('');

  const addBarber = ()=>{
   
    if(email !='' && password !=''  ){
      if( adress !=''){
        if(name !=''){
          
          barberExist({name:name,email:email ,adress:adress},exist=>{
            if(!exist){
              insertBarber(name , email , password , adress);
              Alert.alert('Barber was added'  );
              navigation.navigate('HomeBarber');
            } else Alert.alert('Barber already exist');
          });
          
        } else Alert.alert('name required');
        
      } else Alert.alert('Address required');
      
   

    } else Alert.alert('Email and password are not valide');
  };
  return (
    <View style={styles.container}>


      <Text>Barber Time</Text>

      <TextInput style={styles.input} placeholder='Name' onChangeText={setName}></TextInput>
      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>
      <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword}></TextInput>
      <TextInput style={styles.input} placeholder='Adress' onChangeText={setAdress}></TextInput>

      <CustomButton text={'Sign up'} onPress={() => { addBarber(); }}></CustomButton>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
  },
  input: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center',
    backgroundColor: textInputBackgroundColor,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: textInputBackBorderColor,
    elevation: 8,
  }

});

export default Signup;


