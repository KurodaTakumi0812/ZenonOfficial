import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { storage } from '../../storage'

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function SettingsScreen(props) {
  const { navigation } = props;
  const [studentID, setStudentID] = useState('');
  const [registered, setRegistered] = useState([]);

  let studentLength;
  let memberId;

  useEffect(() => {
    let unsubscribe = () => { };
    unsubscribe = storage.load({ key: 'student1' }).then(res => {
      const students = [];
      studentLength = Object.keys(res).length
      students.push({
        id: res.id,
        familyName: res.name[0],
        firstName: res.name[1],
      })
      setRegistered(students);
      console.log(registered);
    });
  }, []);

  function renderItem({ item }) {
    return (
      <View style={styles.studentList}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="person-circle-outline" size={32} color="#5BB57A" />
          <Text style={{ marginLeft: 16 }}>{item.id}</Text>
          <Text style={{ fontSize: 24, marginLeft: 16 }}>黒田　拓良</Text>
        </View>
        <TouchableOpacity onPress={() => { Alert.alert('削除') }}>
          <Entypo style={{}} name="cross" size={24} color="#868686" />
        </TouchableOpacity>
      </View>
    );
  }

  if (studentLength === 0) {
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

          <View>
            <View style={styles.studentList}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="person-circle-outline" size={32} color="#5BB57A" />
                <Text style={{ marginLeft: 16 }}>99-9999</Text>
                <Text style={{ fontSize: 24, marginLeft: 16 }}>黒田　拓良</Text>
              </View>
              <TouchableOpacity onPress={() => { Alert.alert('削除') }}>
                <Entypo style={{}} name="cross" size={24} color="#868686" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.settingHeader}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 16 }}>通知</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.settingHeader}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 16 }}>入室チェック</Text>
          </View>

          <View>
            <FlatList
              data={registered}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
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
  },
  studentList: {
    height: 48,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});