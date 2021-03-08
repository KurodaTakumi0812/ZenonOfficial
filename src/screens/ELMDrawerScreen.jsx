import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ELMScreen from './ELMScreen'
import NotificationScreen from './NotificationScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="入室チェック"
      screenOptions={{
        headerShown: true,
        headerTitle: 'Zenon',
        headerStyle: { backgroundColor: '#5BB57A' },
        headerTitleStyle: { color: '#FFFFFF' },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Drawer.Screen name="入室チェック" component={ELMScreen} />
      <Drawer.Screen name="お知らせ" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}

export default function ELMDrawerScreen() {
  return (
    <MyDrawer />
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