import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView , StyleSheet , TextInput } from 'react-native';
import { containerStyle } from '../components/variables';


 const Login = () => {
  return (
    <View style={styles.container}>
    <ScrollView >
        <View >
            <Text>Barber Time</Text>
       
      <TextInput style={styles.input} placeholder='Email'></TextInput>
      <TextInput placeholder='Password'></TextInput>
        
            <Text>Login</Text>
        </View>
    </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
  } , 
  input:{
   
  }

})

export default Login;