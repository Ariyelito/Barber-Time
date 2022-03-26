import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
import SettingStack from './SettingStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Settings: {
        screen: SettingStack,
    }
});

export default createAppContainer(RootDrawerNavigator);