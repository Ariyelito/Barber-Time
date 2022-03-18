import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

// views
import { Home } from './src/views/Home';
import { Login } from './src/views/Login';
import { Signup } from './src/views/Signup';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{}} />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{}} />
            <Stack.Screen
            name="Signup"
            component={Signup}
            options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
