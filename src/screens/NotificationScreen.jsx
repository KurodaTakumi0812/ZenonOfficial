import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

import NewBadge from '../components/NewBadge';
import { announcementDateToString } from '../utils';

const { height, width } = Dimensions.get('window');

export default function NotificationScreen(props) {
  const { navigation } = props;
  const [list, setList] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    let unsubscribe = () => { };
    const ref = db.collection('announcements').orderBy('date', 'desc');
    unsubscribe = ref.onSnapshot((snapshot) => {
      const getList = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        getList.push({
          id: doc.id,
          title: data.title,
          body: data.body,
          date: data.date.toDate(),
        });
      });
      setList(getList);
      console.log(getList);
    }, (error) => {
      Alert.alert('データの読み込みに失敗しました', '時間をあけて再度お試しください。')
    });
    return unsubscribe;
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.notificationContainer} onPress={() => { navigation.navigate('NotificationDetail', { date: announcementDateToString(item.date), title: item.title, body: item.body }) }}>
        <View style={{ flexDirection: 'row' }}>
          <NewBadge date={item.date} />
          <Text style={styles.textDate}>{announcementDateToString(item.date)}</Text>
        </View>
        <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    marginBottom: 8,
    marginLeft: 40,
    width: width - 48,
  },
});