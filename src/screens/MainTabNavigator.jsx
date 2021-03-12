import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ELMScreen from './ELMScreen';
import NotificationScreen from './NotificationScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
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
      <Tab.Screen name="入室チェック" component={ELMScreen} />
      <Tab.Screen name="お知らせ" component={NotificationScreen} options={{ tabBarBadge: 2 }} />
    </Tab.Navigator>
  );
}