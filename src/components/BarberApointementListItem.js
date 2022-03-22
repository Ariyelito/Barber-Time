//import liraries
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { containerStyle } from './variables';

// create a component
const BarberApointementListItem = ({time,name,email, onPressHandler}) => {
    return (
        <View style={styles.container} >
    
            <Text style={styles.name}>
             {time}
            </Text>
            <Text style={styles.name}>
             {name}
            </Text>
            <Text style={styles.name}>
             {email}
            </Text>
        <TouchableOpacity onPress={()=>onPressHandler()}>
            <Text  style={styles.name}>
                X
            </Text>
        </TouchableOpacity>
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
        borderBottomWidth:1,
      } , 
      name :{
        fontSize:30,
        
      }, 
    
});

//make this component available to the app
export default BarberApointementListItem;
