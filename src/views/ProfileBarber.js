import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getAll } from '../db/SqlManager';
import ListAppoinments from './ListAppoinments';


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
   
    <ListAppoinments />
  );
}

export default ProfileBarber;
