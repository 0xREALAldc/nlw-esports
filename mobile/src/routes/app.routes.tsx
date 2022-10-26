import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Ads } from '../screens/Ads'

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false}}
    >
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="ads"
        component={Ads}
      />
    </Navigator>
  )
}