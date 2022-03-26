import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { TEXT_INPUT_BACK_BORDER_COLOR, TEXT_INPUT_BACKGROUND_COLOR } from '../components/Colors';
import CustomButton from '../components/CustomButton';
import { containerStyle, mainTextStyle } from '../components/Variables';
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
  }, [])

  const login = () => {
    if (email != '' && password != '') {
      barberExistOKConnection({ email: email, password: password }, (exist, userFound) => {
        if (exist) {
          dispatch(barberActions.setActiveBarber(userFound[0]))
          console.log('login() as :')
          console.log(activeBarber)
          saveLogin(userFound[0]);
          navigation.navigate('ProfileBarber');
        } else Alert.alert('User not found');
      })
    } else Alert.alert('Please enter valid email and password');
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@login')
    } catch (e) {
      console.log('error while erasing login info' + e)
    }
  }

  const saveLogin = async (user) => {
    try {
      // const activeBarber1 = useSelector(state => state.barber.connected);
      await AsyncStorage.setItem('@login', JSON.stringify(user))
      console.log('saved login from :')
      console.log(user)
    } catch (e) {
      console.log('error while saving login info' + e)
    }
  }

  const tryLogin = async () => {
    try {
      const user = await AsyncStorage.getItem('@login')
      console.log('found stored login user : ');
      console.log(user)
      user != null ? dispatch(barberActions.setActiveBarber(JSON.parse(user))) : console.log('no login user found.')
      // user != null ? navigation.navigate('ProfileBarber') : null
    } catch (error) {
      console.log('error while loading login user' + error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginTop: 20, marginBottom: 10 }]}>Barber Time</Text>
      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail}></TextInput>
      <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword}></TextInput>
      <CustomButton text={'Login'} onPress={() => { login() }}></CustomButton>
      <CustomButton text={'Continue as ' + activeBarber.name} onPress={() => { navigation.navigate('ProfileBarber') }}></CustomButton>

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
  text: {
    ...mainTextStyle,
  }

});

export default Login;