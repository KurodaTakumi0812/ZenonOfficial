import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';

import MainTabNavigator from './MainTabNavigator';
import SettingScreen from './SettingsScreen';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <StatusBar backgroundColor={"#5BB57A"} />
      <View style={{ height: 32, backgroundColor: '#5BB57A', justifyContent: 'center', marginTop: 8 }}><Image style={styles.drawerLogo} source={require('../img/logoWhite.png')} /></View>
      <Text style={{ color: '#868686', marginLeft: 8, marginTop: 8 }}>メニュー</Text>
      <View style={{ borderBottomColor: '#868686', borderBottomWidth: 1, marginTop: 8 }} />
      <DrawerItemList {...props} />
      <DrawerItem
        label="設定"
        onPress={() => { navigation.navigate('Settings') }}
        icon={config => <View style={styles.iconSetting} ><Ionicons name="settings-sharp" size={20} color="#FFFFFF" /></View>}
      />
      <Text style={{ color: '#868686', marginLeft: 8 }}>その他</Text>
      <View style={{ borderBottomColor: '#868686', borderBottomWidth: 1, marginTop: 8 }} />
      <DrawerItem
        label="公式サイト"
        onPress={() => { Linking.openURL("https://www.google.co.jp/") }}
        icon={config => <View style={styles.iconOfficial}><Entypo name="home" size={20} color="#FFFFFF" /></View>}
      />
      <DrawerItem
        label="アクセス・問い合わせ"
        onPress={() => { navigation.navigate('Inquiries') }}
        icon={config => <View style={styles.iconInquiries}><Foundation name="telephone" size={20} color="#FFFFFF" /></View>}
      />
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
      <Drawer.Screen
        name="MainTab"
        options={{
          drawerIcon: config => <View style={styles.iconMein}><FontAwesome5 name="door-open" size={20} color="#FFFFFF" /></View>,
          drawerLabel: 'メイン',
        }}
        component={MainTabNavigator}
      />
    </Drawer.Navigator>
  );
}

export default function MainDrawerNavigator(props) {
  const { navigation } = props;
  return (
    <MyDrawer navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeader: {
    marginTop: 0,
    height: 88,
    width: '100%',
    resizeMode: 'cover',
  },
  drawerLogo: {
    height: 32,
    width: 80,
    resizeMode: 'contain',
    marginLeft: 4,
  },
  icon: {
    height: 24,
    width: 24,
    backgroundColor: 'red',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMein: {
    height: 24,
    width: 24,
    backgroundColor: '#37a34a',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSetting: {
    height: 24,
    width: 24,
    backgroundColor: '#ffdc00',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconOfficial: {
    height: 24,
    width: 24,
    backgroundColor: '#0075c2',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInquiries: {
    height: 24,
    width: 24,
    backgroundColor: '#e95388',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});