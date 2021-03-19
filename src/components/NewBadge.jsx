import { instanceOf } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NewBadge(props) {
  const { date } = props;
  const today = Date.now();

  if (today - date.getTime() > 1000 * 3600 * 24 * 7) {
    return null;
  } else {
    return (
      <View style={styles.newBadge}>
        <Text style={{ fontSize: 14, color: '#FFFFFF' }}>New</Text>
      </View>
    );
  }
}

NewBadge.propTypes = {
  date: instanceOf(Date).isRequired,
};

const styles = StyleSheet.create({
  newBadge: {
    backgroundColor: '#dc143c',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderBottomRightRadius: 8,
  },
});