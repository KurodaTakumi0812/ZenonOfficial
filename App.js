import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import { Alert, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Platform } from 'react-native';
import firebase from 'firebase';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';


import NotificationDetailScreen from './src/screens/NotificationDetailScreen';
import MainDrawerNavigator from './src/screens/MainDrawerNavigator';
import AddStudentScreen from './src/screens/AddStudentScreen';
import InquiriesScreen from './src/screens/InquiriesScreens';
import SettingsScreen from './src/screens/SettingsScreen';

import { firebaseConfig } from './env';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
require('firebase/firestore');

LogBox.ignoreLogs(['Setting a timer']);

const Stack = createStackNavigator();

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const saveDeviceToken = async (token) => {
  try {
    const db = firebase.firestore();
    const docRef = await db.collection('tokens').add({ token })
  } catch (err) { }
};

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      setExpoPushToken(token)
      Alert.alert(expoPushToken);
      saveDeviceToken(token);
    });
    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
