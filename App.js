import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase';

import NotificationDetailScreen from './src/screens/NotificationDetailScreen';
import MainDrawerNavigator from './src/screens/MainDrawerNavigator';
import AddStudentScreen from './src/screens/AddStudentScreen';
import InquiriesScreen from './src/screens/InquiriesScreens';
import SettingsScreen from './src/screens/SettingsScreen';

import { firebaseConfig } from './env';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
require('firebase/firestore');

LogBox.ignoreLogs(['Setting a timer']);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainDrawer"
      >
        <Stack.Screen
          name="MainDrawer"
          component={MainDrawerNavigator}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="NotificationDetail"
          component={NotificationDetailScreen}
          options={{
            title: '詳細',
            headerStyle: {
              backgroundColor: '#5BB57A',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: '設定',
            headerStyle: {
              backgroundColor: '#3E42A7',
            },
            headerTintColor: '#FFFFFF',
          }} />
        <Stack.Screen
          name="AddStudent"
          component={AddStudentScreen}
          options={{
            title: '生徒の登録',
            headerStyle: {
              backgroundColor: '#3E42A7',
            },
            headerTintColor: '#FFFFFF',
          }} />
        <Stack.Screen
          name="Inquiries"
          component={InquiriesScreen}
          options={{
            title: 'お問い合わせ',
            headerStyle: {
              backgroundColor: '#3E42A7',
            },
            headerTintColor: '#FFFFFF',
          }} />
      </Stack.Navigator>
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
