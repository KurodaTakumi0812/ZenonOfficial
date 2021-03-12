import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function AddStudentScreen() {
  const [studentID, setStudentID] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text>入室チェック</Text>
        <Text>登録されている生徒がいません。</Text>
        <TextInput
          style={styles.textInput}
          label="生徒ID"
          value={studentID}
          onChangeText={studentID => setStudentID(studentID)}
        />
        <TextInput
          style={styles.textInput}
          label="生徒ID"
          value={studentID}
          onChangeText={studentID => setStudentID(studentID)}
        />
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
  textInput: {
    width: '80%',
    backgroundColor: '#FFFFFF',
  },
});