import { Button, View, Switch, Text } from 'react-native';
import React, { useState, useEffect } from 'react';


const SettingScreen = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Text>Stay signed in</Text>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

export default SettingScreen