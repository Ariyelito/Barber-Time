import React, { useState, useEffect } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import CustomButton from '../components/CustomButton';
import { containerStyle } from '../components/variables';



const BarberLocation = ({route}) => {
    const barber = route.params.barber;

    const tokyoRegion = {
        latitude: 45.552198625534196,
          longitude: -73.64205341789872,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      };
  return (
    <View style={styles.container}>
       

        <MapView
        style={styles.map}
        initialRegion={tokyoRegion}
      >
           <MapView.Marker coordinate={tokyoRegion} />
      </MapView>

        <View style={styles.btnStyle}>
        <CustomButton text={'Book an appoinment with ' + barber.name} onPress={()=>{}}></CustomButton>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      ...containerStyle , 
    } , 
   
    map:{ 
      ...StyleSheet.absoluteFillObject,

    }
  })
export default BarberLocation;
