import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function NotificationScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.notificationContainer} onPress={() => { navigation.navigate('NotificationDetail') }}>
        <Text style={styles.textDate}>2021-03-25 22:00</Text>
        <Text style={styles.textTitle}>Zenon公式アプリリリースのお知らせ</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  notificationContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 64,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  textDate: {
    fontSize: 14,
    color: '#868686',
    marginTop: 8,
    marginLeft: 16,
  },
  textTitle: {
    fontSize: 18,
    marginTop: 2,
    marginLeft: 40,
  }
});