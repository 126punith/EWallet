import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Color from '../Constants/Color';
import LinearGradient from 'react-native-linear-gradient';

const Contact = () => {
  // background: linear-gradient(114.15deg, #0DA6C2 20.67%, #0E39C6 89.64%);

  const [selectedField, setSelectedField] = useState('Access');
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={styles.titleText}>Statistics</Text>
      </View>
      <View style={styles.titleContainer}>
        {selectedField === 'Access' ? (
          <LinearGradient
            useAngle={true}
            angle={114.15}
            start={{x: 0.0, y: 0.2067}}
            end={{x: 0.8964, y: 1.0}}
            locations={[0, 0.95]}
            colors={['#0DA6C2', '#0E39C6']}
            style={styles.titleBtn}>
            <TouchableOpacity
              style={styles.titleBtn}
              onPress={() => {
                setSelectedField('Access');
              }}>
              <Text style={styles.titleBtnText}> Access</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <TouchableOpacity
            style={[
              styles.titleBtn,
              styles.btnDarkBGcolor,
              {
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              },
            ]}
            onPress={() => {
              setSelectedField('Access');
            }}>
            <Text style={[styles.titleBtnText, styles.btnDarkBGcolor]}>
              {' '}
              Access
            </Text>
          </TouchableOpacity>
        )}
        {selectedField === 'Consent' ? (
          <LinearGradient
            useAngle={true}
            angle={114.15}
            start={{x: 0.0, y: 0.2067}}
            end={{x: 0.8964, y: 1.0}}
            locations={[0, 0.95]}
            colors={['#0DA6C2', '#0E39C6']}
            style={styles.titleBtn}>
            <TouchableOpacity
              style={styles.titleBtn}
              onPress={() => {
                setSelectedField('Consent');
              }}>
              <Text style={styles.titleBtnText}> Consent</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <TouchableOpacity
            style={[styles.titleBtn, styles.btnDarkBGcolor]}
            onPress={() => {
              setSelectedField('Consent');
            }}>
            <Text style={[styles.titleBtnText, styles.btnDarkBGcolor]}>
              {' '}
              Consent
            </Text>
          </TouchableOpacity>
        )}
        {selectedField === 'Approve' ? (
          <LinearGradient
            useAngle={true}
            angle={114.15}
            start={{x: 0.0, y: 0.2067}}
            end={{x: 0.8964, y: 1.0}}
            locations={[0, 0.95]}
            colors={['#0DA6C2', '#0E39C6']}
            style={styles.titleBtn}>
            <TouchableOpacity
              style={styles.titleBtn}
              onPress={() => {
                setSelectedField('Approve');
              }}>
              <Text style={styles.titleBtnText}> Approve</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <TouchableOpacity
            style={[
              styles.titleBtn,
              styles.btnDarkBGcolor,
              {
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              },
            ]}
            onPress={() => {
              setSelectedField('Approve');
            }}>
            <Text style={styles.titleBtnText}> Approve</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Contact;

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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Color.white,
    textAlign: 'left',
  },
  titleBtn: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Color.white,
    borderRadius: 15,
  },
  titleBtnText: {
    fontSize: 15,
    fontWeight: '400',
    color: Color.white,
    paddingVertical: 8,
    lineHeight: 22,
  },
  btnDarkBGcolor: {
    backgroundColor: Color.darkBlue,
    flexGrow: 1,
    borderRadius: 0,
  },
});
