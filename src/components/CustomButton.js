import React, { useState, useEffect } from 'react';
import { View, Image ,  Text, TouchableOpacity, StyleSheet } from 'react-native';


export const CustomButton = ({ text , onPress }) => {
  
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
    backgroundColor: "#2C3E50",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text : {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

