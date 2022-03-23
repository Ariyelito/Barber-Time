//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { insertAppoinment } from '../../db/SqlManager';
import { textInputBackBorderColor, textInputBackgroundColor } from '../colors';
import CustomButton from '../CustomButton';
import { containerStyle, mainTextStyle } from '../variables';

// create a component
const AppointmentConfirmation = ({navigation}) => {
    
    const barber = useSelector(state => state.client.selBarber);
    const name = useSelector(state => state.client.name);
    const email = useSelector(state => state.client.email);
    const daySelected = useSelector(state => state.client.day);
    const time = useSelector(state => state.client.time);
 
    console.log(time);
    const cancelAppointment=()=>{
      navigation.navigate('BarberDetail');
    }
    const confirmAppointment=()=>{
      insertAppoinment(email, name, daySelected, time, barber.barberId);
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Text style={styles.text}>Date of rendezvous:</Text>
                <Text style={styles.text}>{daySelected}</Text>  

                <Text style={styles.text}>Barber:</Text>
                <Text style={styles.text}>{barber.name}</Text>  

                <Text style={styles.text} >Name: {name}</Text>
                <Text style={styles.text} >Email: {email}</Text>  
                <Text style={styles.text} >Time: {time}</Text>    
  
            </View>

            <View>
                    <CustomButton text={"Cancel"} onPress={cancelAppointment}/>
                    <CustomButton text={"Confirm"} onPress={confirmAppointment}/>
            </View>
        </View>
        



    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        ...containerStyle,
      
      },
      containerInfo: {
        ...containerStyle,
        alignItems: "flex-start",
      },
      input: {
        alignSelf: 'stretch',
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign: 'center',
        backgroundColor: textInputBackgroundColor,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: textInputBackBorderColor,
        elevation: 8,
      },
      calendar: {
    
      },
      text: {
        ...mainTextStyle,
      }
    
   
});

//make this component available to the app
export default AppointmentConfirmation;
