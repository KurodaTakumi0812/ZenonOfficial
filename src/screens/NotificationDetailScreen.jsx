import { StatusBar } from 'expo-status-bar';
import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';

export default function NotificationScreen(props) {
  const { navigation, route } = props;
  const { date, title, body } = route.params;
  const replaceBody = body.replace(/\\n/g, '\n');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.bodyText}>{replaceBody}</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

NotificationScreen.propTypes = {
  route: shape({
    params: shape({ title: string, date: string, body: string }),
  }).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  titleContainer: {
    //height: 96,
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: '#5BB57A',
    justifyContent: 'center',
  },
  textDate: {
    color: '#FFFFFF',
    marginTop: 8,
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});