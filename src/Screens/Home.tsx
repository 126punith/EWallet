import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../Constants/Color';
import Images from '../assets/Images';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appLogoContainer}>
        <Image source={Images.appLogo} style={styles.appLogoImage} />
      </View>
    </View>
  );
};

export default Home;

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
  appLogoContainer: {position: 'absolute', left: '50%', top: '-10'},
  appLogoImage: {
    width: 53,
    height: 33,
    resizeMode: 'cover',
  },
});
