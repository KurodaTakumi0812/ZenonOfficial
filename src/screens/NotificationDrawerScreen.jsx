import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import ELMScreen from './ELMScreen';
import NotificationScreen from './NotificationScreen';
import { HeaderBackground } from '@react-navigation/stack';

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
      initialRouteName="お知らせ"
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

export default function NotificationDrawerScreen() {
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