import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { HEADER_TINT_COLOR, NAVIGATION_HEADER_COLOR } from './src/components/Colors';
import ClientView from './src/views/ClientView';
import BarberView from './src/views/BarberView';
import ChoosingPage from './src/views/ChoosingPage';
import { createTablesDb } from './src/db/SqlManager';
import {Notifications} from 'react-native-notifications';

const Stack = createNativeStackNavigator();

const App = () => {
  createTablesDb();
 

  return (
    <Provider store={store} >
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: NAVIGATION_HEADER_COLOR,
          },
          headerTintColor: HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: false,

        }}  >
          <Stack.Screen
            name="ChoosingPage"
            component={ChoosingPage}
            options={{
              headerTitle: 'Barber Time',
              headerShown: true,
            }} />
          <Stack.Screen
            name="ClientView"
            component={ClientView}
            options={{
            }} />
          <Stack.Screen
            name="BarberView"
            component={BarberView}
            options={{
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;
