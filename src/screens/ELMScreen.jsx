import { StatusBar } from 'expo-status-bar';
import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-paper';
import { storage } from '../../storage'
import firebase from 'firebase';

import { logInTimeToString } from '../utils';
import { logOutTimeToString } from '../utils';
import Loading from '../components/Loading';

import NotificationScreen from './NotificationScreen';

const { height, width } = Dimensions.get('window');

export default function ELMScreen(props) {
  const { navigation } = props;
  const [registered, setRegistered] = useState([]);
  const [update, setUpdate] = useState('')
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('students');
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      let students = [];
      storage.load({ key: 'student1' }).then(res => {
        ref.doc(res.id).onSnapshot((doc) => {
          if (students === []) {

          } else {
            students = students.filter(elem => !(elem.id === res.id))
          }
          if (doc.exists) {
            const data = doc.data()
            students.push({
              id: res.id,
              familyName: data.familyName,
              firstName: data.firstName,
              logInStatus: data.logInStatus,
              logInTime: data.logInTime.toDate(),
              logOutTime: data.logOutTime.toDate(),
            });
            students.sort(compare);
            setRegistered(students);
          }
        })
      }).catch(() => {
        storage.load({ key: 'student2' }).then(() => { }).catch(() => {
          storage.load({ key: 'student3' }).then(() => { }).catch(() => { setRegistered([]) });
        });
      });
      storage.load({ key: 'student2' }).then(res => {
        ref.doc(res.id).onSnapshot((doc) => {
          if (students === []) {

          } else {
            students = students.filter(elem => !(elem.id === res.id))
          }
          if (doc.exists) {
            const data = doc.data()
            students.push({
              id: res.id,
              familyName: data.familyName,
              firstName: data.firstName,
              logInStatus: data.logInStatus,
              logInTime: data.logInTime.toDate(),
              logOutTime: data.logOutTime.toDate(),
            });
            students.sort(compare);
            setRegistered(students);
          }
        })
      }).catch(() => { });
      storage.load({ key: 'student3' }).then(res => {
        ref.doc(res.id).onSnapshot((doc) => {
          if (students === []) {

          } else {
            students = students.filter(elem => !(elem.id === res.id))
          }
          if (doc.exists) {
            const data = doc.data()
            students.push({
              id: res.id,
              familyName: data.familyName,
              firstName: data.firstName,
              logInStatus: data.logInStatus,
              logInTime: data.logInTime.toDate(),
              logOutTime: data.logOutTime.toDate(),
            });
            students.sort(compare);
            setRegistered(students);
          }
          setLoading(false);
        })
      }).catch(() => { setLoading(false); });
      console.log(students)
    });
    return unsubscribe;
  }, [navigation]);

  function compare(a, b) {
    const cA = a.logInStatus;
    const cB = b.logInStatus;
    let comparison = 0;
    if (cA > cB) {
      comparison = 1;
    } else if (cA <= cB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  function renderItem({ item }) {
    if (item.logInStatus) {
      return (
        <View style={styles.studentContainer}>
          <Image
            style={styles.image}
            source={require('../img/enter.png')}
          />
          <View style={styles.containerRightSide}>
            <Text style={{ fontSize: 18 }}>{item.id.substr(0, 2)}-{item.id.substr(2)}</Text>
            <View style={styles.nameContainer}>
              <Text style={{ fontSize: 26, width: width - 216 }} numberOfLines={1} ellipsizeMode='tail'>{item.familyName}   {item.firstName}</Text>
              <Text style={{ fontSize: 18, right: 24, position: 'absolute' }}>さん</Text>
            </View>
            <Text style={{ fontSize: 18, color: '#3561D3' }}>【入室中】</Text>
            <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>入室時間</Text>
            <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>{logInTimeToString(item.logInTime)}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.studentContainer}>
          <Image
            style={styles.image}
            source={require('../img/leave.png')}
          />
          <View style={styles.containerRightSide}>
            <Text style={{ fontSize: 18 }}>{item.id.substr(0, 2)}-{item.id.substr(2)}</Text>
            <View style={styles.nameContainer}>
              <Text style={{ fontSize: 26, width: width - 216 }} numberOfLines={1} ellipsizeMode='tail'>{item.familyName}   {item.firstName}</Text>
              <Text style={{ fontSize: 18, right: 24, position: 'absolute' }}>さん</Text>
            </View>
            <Text style={{ fontSize: 18, color: '#868686' }}>【退室中】</Text>
            <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>最終退室時間</Text>
            <Text style={{ fontSize: 14, alignSelf: 'flex-end', marginRight: 24 }}>{logOutTimeToString(item.logInTime)}</Text>
          </View>
        </View>
      );
    }
  }


  if (registered.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Loading loading={loading} />
        <Text>登録されている生徒がいません。設定画面から生徒の登録を行ってください。</Text>
        <Button
          style={{ marginTop: 40 }}
          mode="contained"
          color='#3E42A7'
          onPress={() => { navigation.navigate('Settings') }}
        >設定へ</Button>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Loading loading={loading} />
        <FlatList
          data={registered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View >
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'flex-start',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
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