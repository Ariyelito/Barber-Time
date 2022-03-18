import React, { useState, useEffect } from 'react';
import { View, Text , StyleSheet , TextInput , Alert } from 'react-native';
import { textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import CustomButton from '../components/CustomButton';
import { containerStyle } from '../components/variables';
import { getAllUsers } from '../manger/SqlManger';

 const Login = () => {

  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = ()=>{
    if(email !='' && password !=''){
      getAllUsers((tab)=>{
        let userFound = tab.filter(elem=> elem.email != email && elem.password !=password);
        if(userFound.lenght != 0){
          Alert.alert('1');
        } else  Alert.alert('2');
      });
    } else Alert.alert('Email and password are not valide');
  };
  return (
    <View style={styles.container}>
   
        
            <Text>Barber Time</Text>
       
      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>
      <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword}></TextInput>
        
        <CustomButton text={'Login'} onPress={()=>{login()}}></CustomButton>
        
  
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
  } , 
  input:{
   alignSelf:'stretch',
   marginHorizontal:20,
   marginVertical:10,
   textAlign:'center' , 
   backgroundColor:textInputBackgroundColor,
   borderWidth:2,
   borderRadius:20,
   borderColor:textInputBackBorderColor,
   elevation : 8,
  }

});

export default Login;