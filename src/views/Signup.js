import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import CustomButton from '../components/CustomButton';
import { containerStyle } from '../components/variables';


const Signup = () => {
  return (
    <View style={styles.container}>


      <Text>Barber Time</Text>

      <TextInput style={styles.input} placeholder='Email'></TextInput>
      <TextInput style={styles.input} placeholder='Password'></TextInput>

      <CustomButton text={'Sign up'} onPress={() => { }}></CustomButton>


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


