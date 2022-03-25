import { View, Text } from 'react-native'
import React from 'react'

export default function SettingScreen() {
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