import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function SettingsScreen(props) {
  const { navigation } = props;
  const [studentID, setStudentID] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.settingHeader}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 16 }}>入室チェック</Text>
        </View>
        <View style={styles.ELSettingContainer}>
          <Text>登録されている生徒がいません。</Text>
          <View style={{ marginTop: 24 }}>
            <Button
              mode="contained"
              color='#3E42A7'
              onPress={() => { navigation.navigate('AddStudent') }}
            >生徒の登録</Button>
          </View>
        </View>
        <View style={styles.settingHeader}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 16 }}>通知</Text>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  settingHeader: {
    backgroundColor: '#3E42A7',
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
  ELSettingContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  }
});