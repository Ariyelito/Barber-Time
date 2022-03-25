import React from 'react';
import { View,   Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CUSTOM_BUTTON_BACKGROUND, CUSTOM_BUTTON_TEXT } from './Colors';


const CustomButton = ({ text , onPress }) => {
  
  return (
    <View style={ styles.container}>
      <TouchableOpacity onPress={()=>onPress()} style={styles.button}>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  } , 
  
  button:{
    elevation: 8,
    backgroundColor: CUSTOM_BUTTON_BACKGROUND,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    minWidth:160
  },
  text : {
    fontSize: 18,
    color: CUSTOM_BUTTON_TEXT,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default CustomButton;