import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';


const ProfileBarber = ({route}) => {
  const barber = route.params.barber;
  return (
    <View>
        <Text>Barber profile! {barber.email}</Text>
    </View>
  );
}

export default ProfileBarber;
