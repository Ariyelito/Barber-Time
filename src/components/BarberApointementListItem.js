//import liraries
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { containerStyle } from './variables';

// create a component
const BarberApointementListItem = ({barber, onPressHandler}) => {
    return (
        <View style={styles.container} >
    
            <Text style={styles.time}>
             {barber.time}
            </Text>
            <Text style={styles.name}>
             {barber.name}
            </Text>
            <Text style={styles.email}>
             {barber.email}
            </Text>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        ...containerStyle ,
        alignItems :'flex-start',
        
        paddingHorizontal:10,
        marginVertical:3,
        paddingVertical:10,
        elevation:7,
        borderBottomWidth:0.5,
        flexDirection:'row'
      } , 
      name :{
        fontSize:15,
        textAlign: 'left',
        marginLeft:'auto',

      }, 
      time: {
          fontSize: 15,
          fontWeight: 'bold',
      },
      email: {
          marginLeft:'auto',
        fontSize: 15
    }
    
});

//make this component available to the app
export default BarberApointementListItem;
