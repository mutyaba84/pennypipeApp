import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BillShare from '../screens/BillShare';
import Dashboard from '../screens/Dashboard';
import Fundraising from '../screens/Fundraising';
import SendMoney from '../screens/SendMoney';
import TransactionHistory from '../screens/TransactionHistory';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="SendMoney" component={SendMoney} />
      <Tab.Screen name="BillShare" component={BillShare} />
      <Tab.Screen name="Fundraising" component={Fundraising} />
      <Tab.Screen name="Transactions" component={TransactionHistory} />
    </Tab.Navigator>
  );
}