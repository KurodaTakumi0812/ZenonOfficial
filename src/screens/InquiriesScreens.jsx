import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function InquiriesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.inquiriesHeader}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 16 }}>アクセス</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 16, paddingHorizontal: 16 }}>
          <Image style={styles.buildingImage} source={require('../img/building.jpg')} />
          <View style={{ marginHorizontal: 16 }}>
            <Text style={{ fontSize: 20, color: '#3E42A7' }}>Zenon玉手山校</Text>
            <Text style={{ marginTop: 8 }}>大阪府柏原市玉手町4-49{"\n"}玉手山内外ハイツ407</Text>
          </View>
        </View>
        <View style={styles.inquiriesHeader}>
          <Text style={{ color: '#FFFFFF', fontSize: 16, marginLeft: 16 }}>電話でのお問い合わせ</Text>
        </View>
        <View style={{ padding: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Feather name="phone-call" size={36} color="#3E42A7" />
            <View style={{ marginHorizontal: 16 }}>
              <Text style={{ color: '#3E42A7' }}>Tel/Fax</Text>
              <Text style={{ fontSize: 20, color: '#3E42A7' }}>072-977-7241</Text>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', marginTop: 16 }}>開校時間</Text>
          <Text style={{ fontWeight: 'bold' }}>月～土　16：00～22：00</Text>
          <Text>日・祝日は校舎クローズです。その他休塾日がございます。ご了承ください。</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inquiriesHeader: {
    backgroundColor: '#3E42A7',
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
  buildingImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
});