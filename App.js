import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ELMScreen from './src/screens/ELMScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ELMDrawerScreen from './src/screens/ELMDrawerScreen';
import NotificationDrawerScreen from './src/screens/NotificationDrawerScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === '入室チェック') {
              iconName = focused
                ? 'door-open'
                : 'door-open';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            } else if (route.name === 'お知らせ') {
              iconName = focused
                ? 'notification'
                : 'notification';
              return <AntDesign name={iconName} size={size} color={color} />
            }
          },
        }
        )}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveBackgroundColor: '#333399',
          activeBackgroundColor: '#5BB57A',
          inactiveBackgroundColor: '#A9DEBB',
        }}
      >
        <Tab.Screen name="入室チェック" component={ELMDrawerScreen} />
        <Tab.Screen name="お知らせ" component={NotificationDrawerScreen} options={{ tabBarBadge: 2 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
