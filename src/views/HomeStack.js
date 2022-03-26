import { createStackNavigator } from '@react-navigation-stack';
import Home from './Home'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default HomeStack;