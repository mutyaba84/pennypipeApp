import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import AppNavigation from './navigation/AppNavigator';
import { registerForPushNotificationsAsync, setupNotificationListener } from './services/NotificationService';

export default function App() {
  useEffect(() => {
    (async () => {
      await registerForPushNotificationsAsync();
      setupNotificationListener();
    })();
  }, []);

  return (
    <ThemeProvider>
      <UserProvider>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </UserProvider>
    </ThemeProvider>
  );
}