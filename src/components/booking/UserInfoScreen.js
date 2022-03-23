import React, { useState, useEffect } from 'react';
import { View, Text , TextInput , StyleSheet } from 'react-native';
import { textInputBackBorderColor, textInputBackgroundColor } from '../colors';
import { containerStyle, mainTextStyle } from '../variables';
import { useSelector, useDispatch } from 'react-redux';
import * as clientActions from './../../redux/actions/clientActions'
import CustomButton from '../CustomButton';




const UserInfoScreen = ({navigation}) => {

  const barber = useSelector(state => state.client.selBarber);

    const dispatch = useDispatch();

    const next = () => {
        //   if (name == '') {
        //     Alert.alert("Veuillez entrez votre nom.");
        //   } else if (email == '') {
        //     Alert.alert("Veuillez entrez votre émail.");
        //   } else {
        //     navigation.navigate('TimeAvalScreen');
        //   }
        navigation.navigate('CalendarScreen');
        }
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Book your appoinment here with {barber.name} !</Text>
    <TextInput 
    style={styles.input} 
    placeholder='Name' 
    onChangeText={(value) => {
      dispatch(clientActions.setName(value))
    }}
    >
    </TextInput>
    <TextInput 
    style={styles.input} 
    placeholder='Email' 
    onChangeText={(value) => {
      dispatch(clientActions.setEmail(value))
    }}
    >
    </TextInput>

    
    <CustomButton text={'next'} onPress={next}></CustomButton>
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
    },
    calendar: {
  
    },
    text: {
      ...mainTextStyle,
    }
  
  })

export default UserInfoScreen;
