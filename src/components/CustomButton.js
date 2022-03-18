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
    justifyContent: "center"
  } , 
  
  button:{
    
  },
  text : {

  },
})

