import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../Constants/Color';

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Color.primary,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 15,
  },
});
