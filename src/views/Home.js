import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        {/* add logo here */}
        <Text>Barber Time</Text>
      </View>
      <TouchableOpacity
        onPress={() => { navigation.navigate('ListBarbers')}}
      >
        <Text>Trouver un barbier!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Login') }}
      >
        <Text>Connectez-vous en tant que barbier</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Signup') }}
      >
        <Text>Créez un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
})

