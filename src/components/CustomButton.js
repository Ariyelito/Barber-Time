import React, { useState, useEffect } from 'react';
import { View, Image ,  Text, TouchableOpacity, StyleSheet } from 'react-native';
import { customButtonBackground, customButtonText } from './colors';


const CustomButton = ({ text , onPress }) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>onPress()} style={styles.button}>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical:10,
  } , 
  
  button:{
    elevation: 8,
    backgroundColor: customButtonBackground,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text : {
    fontSize: 18,
    color: customButtonText,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default CustomButton;