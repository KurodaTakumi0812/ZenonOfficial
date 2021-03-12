import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NotificationScreen from './NotificationScreen';

export default function ELMScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.studentContainer}>
        <Image
          style={styles.image}
          source={require('../img/enter.png')}
        />
        <View style={styles.containerRightSide}>
          <Text style={{ fontSize: 18 }}>99-9999</Text>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 28 }}>黒田　拓良</Text>
            <Text style={{ fontSize: 18, marginRight: 24 }}>さん</Text>
          </View>
          <Text style={{ fontSize: 18, color: '#3561D3' }}>【入室中】</Text>
          <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>入室時間</Text>
          <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>17:23</Text>
        </View>
      </View>
      <View style={styles.studentContainer}>
        <Image
          style={styles.image}
          source={require('../img/leave.png')}
        />
        <View style={styles.containerRightSide}>
          <Text style={{ fontSize: 18 }}>99-9998</Text>
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 28 }}>黒田　裕仁</Text>
            <Text style={{ fontSize: 18, marginRight: 24 }}>さん</Text>
          </View>
          <Text style={{ fontSize: 18, color: '#868686' }}>【退室中】</Text>
          <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>最終退室時間</Text>
          <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>3月21日　17:21</Text>
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  image: {
    width: 148,
    height: 148,
    resizeMode: 'cover',
    marginLeft: 8,
  },
  containerRightSide: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
});