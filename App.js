import React, { useState,V } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import  Signup  from './src/views/Signup';
import  ListBarbers  from './src/views/ListBarbers';
import Home from './src/views/Home';
import Login from './src/views/Login';
import { headerTintColor, navigationHeaderColor } from './src/components/colors';
import ProfileBarber from './src/views/ProfileBarber';
import BarberDetail from './src/views/BarberDetail';
import BarberLocation from './src/views/BarberLocation';
import Booking from './src/views/Booking';
import ClientView from './src/views/ClientView';
import BarberView from './src/views/BarberView';
import ChoosingPage from './src/views/ChoosingPage';

import { createTablesDb } from './src/db/SqlManager';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {


createTablesDb();
 

return (
  <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: navigationHeaderColor,
        },
        headerTintColor: headerTintColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      
      }}  >
          <Stack.Screen
            name="ChoosingPage"
            component={ChoosingPage}
            options={{
              headerShown: false

            }} />
           <Stack.Screen
            name="ClientView"
            component={ClientView}
            options={{  headerShown: false
            }} />
            <Stack.Screen
            name="BarberView"
            component={BarberView}
            options={{
              headerShown: false
            }} /> 
           
        </Stack.Navigator>
    </NavigationContainer>
  
    
);




    /*
    <Provider store={store} >
      <NavigationContainer  >
      <Tab.Navigator > 
        
      <Tab.Screen name="Client" component={ClientView}  />
      <Tab.Screen name="Barber" component={BarberView} />

      </Tab.Navigator>


      
       
      </NavigationContainer>
    </Provider>*/
 
}

export default App;
