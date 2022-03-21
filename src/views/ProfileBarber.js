import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getAll } from '../db/SqlManager';
import ListAppoinments from './ListAppoinments';


const ProfileBarber = ({route}) => {
  const barber = route.params.barber;
 
   const getAllAppoinments = ()=>{
     getAll('appoinments',(tab)=>{
       console.log(tab);
     });
   }
  return (
    <ListAppoinments />
  );
}

export default ProfileBarber;
