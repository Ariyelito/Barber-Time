//import liraries
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { REGULAR_TEXT_COLOR } from './colors';
import { containerStyle } from './variables';

// create a component
const BarberApointementListItem = ({barber, onPressHandler}) => {
    return (
        <View style={styles.container} >
    
           
          
            <View  style={{flex:1}} >
            <Text style={styles.info}>
             {barber.emailClt}
            </Text>
            <Text style={styles.info}>
             {barber.nameClt}
            </Text>
            </View>
            <View style={{flex:1 }}>
            <Text style={styles.time}>
             {barber.time}
            </Text>
            <Text style={styles.time}>
             {barber.date}
            </Text>
           
            </View>
            
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
        flexDirection:'row',
      
      } , 
      name :{
        fontSize:15,
        textAlign: 'left',
        color:REGULAR_TEXT_COLOR
      }, 
      time: {
          fontSize: 15,
          fontWeight: 'bold',
          alignSelf:'flex-end',
          color:REGULAR_TEXT_COLOR
      },
      info: {
        fontSize: 15,
        color:REGULAR_TEXT_COLOR
    }
    
});

//make this component available to the app
export default BarberApointementListItem;
