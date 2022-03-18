import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* add logo here */}
        <Text>Barber Time</Text>
      </View>
      <TouchableOpacity>
        <Text>Trouver un barbier!</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Connectez-vous en tant que barbier</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Créez un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent: "center"
  }
})

export default Home;
