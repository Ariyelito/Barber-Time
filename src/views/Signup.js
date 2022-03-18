import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput , Alert } from 'react-native';
import { textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import CustomButton from '../components/CustomButton';
import { containerStyle } from '../components/variables';
import { dropDatabaseUser, getAllUsers, insertUser } from '../manger/SqlManger';


const Signup = ({navigation}) => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const addUser = ()=>{
    if(email !='' && password !=''){
      insertUser(email , password);
      Alert.alert('User was added'  );
      navigation.navigate('Home');
   

    } else Alert.alert('Email and password are not valide');
  };
  return (
    <View style={styles.container}>


      <Text>Barber Time</Text>

      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>
      <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword}></TextInput>

      <CustomButton text={'Sign up'} onPress={() => { addUser(); }}></CustomButton>


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


