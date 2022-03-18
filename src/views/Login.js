import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView , StyleSheet } from 'react-native';
import { containerStyle } from '../components/variables';


 const Login = () => {
  return (
    <View style={styles.container}>
<ScrollView >
        <View >
            <Text>Barber Time</Text>
        </View>
        <View>
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
  logo:{
    width:200,
    height : 200,
  },
  button:{
    
  },
})

export default Login;