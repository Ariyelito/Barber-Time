import React, { useState} from 'react';
import { View, Text , Alert,TextInput , StyleSheet } from 'react-native';
import { TEXT_INPUT_BACK_BORDER_COLOR, TEXT_INPUT_BACKGROUND_COLOR } from '../colors';
import { containerStyle, mainTextStyle } from '../Variables';
import { useSelector, useDispatch } from 'react-redux';
import * as clientActions from './../../redux/actions/clientActions'
import CustomButton from '../CustomButton';




const UserInfoScreen = ({navigation}) => {

  const barber = useSelector(state => state.client.selBarber);

  const [email,setEmail] = useState('');
  const [name,setName] = useState('');

    const dispatch = useDispatch();

    const next = () => {
          if (name == '') {
            Alert.alert("Veuillez entrez votre nom.");
          } else if (email == '') {
            Alert.alert("Veuillez entrez votre émail.");
          } else {
          dispatch(clientActions.setName(name))
          dispatch(clientActions.setEmail(email))
          navigation.navigate('CalendarScreen');
          }
        
        }
      
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Book your appoinment here with {barber.name} !</Text>
    <TextInput 
    style={styles.input} 
    placeholder='Name' 
    onChangeText={ setName}
    >
    </TextInput>
    <TextInput 
    style={styles.input} 
    placeholder='Email' 
    onChangeText={setEmail}
    >
    </TextInput>

    
    <CustomButton text={'next'} onPress={next}></CustomButton>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      ...containerStyle,
  
    },
    input: {
      alignSelf: 'stretch',
      marginHorizontal: 20,
      marginVertical: 10,
      textAlign: 'center',
      backgroundColor: TEXT_INPUT_BACKGROUND_COLOR,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: TEXT_INPUT_BACK_BORDER_COLOR,
      elevation: 8,
    },
    calendar: {
  
    },
    text: {
      ...mainTextStyle,
    }
  
  })

export default UserInfoScreen;
