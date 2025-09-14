import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BillShareScreen from '../screens/BillShareScreen';
import FundraisingScreen from '../screens/FundraisingScreen';
import P2PScreen from '../screens/P2PScreen';
import WalletScreen from '../screens/WalletScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Wallet') iconName = 'wallet';
          else if (route.name === 'P2P') iconName = 'people';
          else if (route.name === 'Fundraising') iconName = 'heart';
          else if (route.name === 'Bill Share') iconName = 'receipt';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="P2P" component={P2PScreen} />
      <Tab.Screen name="Fundraising" component={FundraisingScreen} />
      <Tab.Screen name="Bill Share" component={BillShareScreen} />
    </Tab.Navigator>
  );
}
