import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getAll } from '../db/SqlManager';
import ListAppoinments from './ListAppoinments';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SettingScreen from './SettingScreen';

const Drawer = createDrawerNavigator();

const ProfileBarber = () => {
  const barber = useSelector(state => state.barber.connected);
  console.log("barbier connecté:")
  console.log(barber)
  // const barber = useSelector(state => state.client.selBarber).selBarber;
 
   const getAllAppoinments = ()=>{
     getAll('appoinments',(tab)=>{
       console.log(tab);
     });
   }
  return (

    <><NavigationContainer>
      <Drawer.Navigator initialRouteName="ProfileBarber">
        <Drawer.Screen name="Appointments" component={ListAppoinments} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
    <ListAppoinments /></>

    
  );
}

export default ProfileBarber;
