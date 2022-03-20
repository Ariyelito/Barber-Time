import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getAll } from '../db/SqlManger';


const ProfileBarber = ({route}) => {
  const barber = route.params.barber;

  // const getAllAppoinments = ()=>{
  //   getAll('appoinments',(tab)=>{
  //     console.log(tab);
  //   });
  // }
  return (
    <View>
        <Text>Barber profile! {barber.email}</Text>
        {/* ajouter un flat liste qui contient tous les rendez-vous */}
    </View>
  );
}

export default ProfileBarber;
