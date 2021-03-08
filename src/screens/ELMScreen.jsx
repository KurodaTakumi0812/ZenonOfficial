import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NotificationScreen from './NotificationScreen';

export default function ELMScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.studentContainer}>
        <Text>イメージ</Text>
        <View>
          <Text style={{ fontSize: 18, marginTop: 24 }}>99-9999</Text>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 28 }}>黒田　拓良</Text>
            <Text style={{ fontSize: 18 }}>さん</Text>
          </View>
          <Text style={{ fontSize: 18, color: '#3561D3' }}>【入室中】</Text>
          <Text style={{ fontSize: 14 }}>入室時間</Text>
          <Text style={{ fontSize: 14 }}>17:23</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'flex-start',
  },
  studentContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 184,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  }
});