import { createStackNavigator } from '@react-navigation-stack';
import SettingScreen from './SettingScreen';

const screens = {
    Settings: {
        screen: SettingScreen,
        navigationOptions: {
            title: 'Settings',
        }
    },
}

const SettingStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default SettingStack