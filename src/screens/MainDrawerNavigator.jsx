import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import MainTabNavigator from './MainTabNavigator';
import SettingScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text>メニュー</Text>
      <DrawerItemList {...props} />
      <DrawerItem label="設定" onPress={() => { }} />
      <Text>その他</Text>
      <DrawerItem label="公式サイト" onPress={() => { }} />
      <DrawerItem label="問い合わせ" onPress={() => { }} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: true,
        headerTitle: 'Zenon',
        headerStyle: { backgroundColor: '#5BB57A' },
        headerTitleStyle: { color: '#FFFFFF' },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Drawer.Screen name="MainTab" component={MainTabNavigator} />
      <Drawer.Screen
        name="Setting"
        options={{
          headerTitle: '設定',
          headerStyle: { backgroundColor: '#3E42A7' },
        }}
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
}

export default function MainDrawerNavigator() {
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