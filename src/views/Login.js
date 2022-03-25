import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { textInputBackBorderColor, textInputBackgroundColor } from '../components/colors';
import CustomButton from '../components/CustomButton';
import { containerStyle } from '../components/variables';
import { barberExistOKConnection, getAll } from '../db/SqlManager';
import { useSelector, useDispatch } from 'react-redux';
import * as barberActions from '../redux/actions/barberActions'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const activeBarber = useSelector(state => state.barber.connected);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    tryLogin();
  },[])

  const login = () => {
    if (email != '' && password != '') {
      barberExistOKConnection({ email: email, password: password }, (exist, userFound) => {
        if (exist) {
          dispatch(barberActions.setActiveBarber(userFound[0]))
          saveLogin(userFound[0]);
          navigation.navigate('ProfileBarber');

        } else Alert.alert('User not found');
      })
    } else Alert.alert('Email and password are not valide');
  }

  saveLogin = async () => {
    try {
      await AsyncStorage.setItem('login', JSON.stringify(activeBarber))
    } catch (e) {
      console.log('error while saving login info' + e)
    }
  }

  tryLogin = async () => {
    try {
      const user = await AsyncStorage.getItem('login')
      console.log('found login user : ' + user);
      user != null ? dispatch(barberActions.setActiveBarber(JSON.parse(user))) : console.log('no login user found.')
      user != null ? navigation.navigate('ProfileBarber') : null
    } catch (error) {
      console.log('error while loading login user' + error)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Barber Time</Text>
      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>
      <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword}></TextInput>
      <CustomButton text={'Login'} onPress={() => { login() }}></CustomButton>
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
    backgroundColor: textInputBackgroundColor,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: textInputBackBorderColor,
    elevation: 8,
  }

});

export default Login;