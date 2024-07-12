import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import Color from '../Constants/Color';
import {BlurView} from '@react-native-community/blur';
const {height, width} = Dimensions.get('screen');
const CenterModal = (props: {
  showModal: boolean;
  modalHandler: () => void;
  children: React.ReactNode;
}) => {
  return props.showModal ? (
    <View style={styles.alertContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.showModal}
        onRequestClose={props.modalHandler}>
        <View style={styles.flexGrowOne}>
          <BlurView
            style={styles.blurContainer}
            blurType="extraDark"
            blurRadius={20}
            blurAmount={5}
            overlayColor={'rgba(0, 0, 0, 0)'}
            reducedTransparencyFallbackColor="white">
            <TouchableWithoutFeedback onPress={props.modalHandler}>
              <View
                style={{
                  paddingHorizontal: 16,
                  height: Dimensions.get('window').width * 1,
                  width: '100%',
                  borderRadius: 24,
                  //   backgroundColor: Color.white,
                  alignItems: 'center',
                }}>
                {props.children}
              </View>
            </TouchableWithoutFeedback>
          </BlurView>
        </View>
      </Modal>
    </View>
  ) : null;
};
const styles = StyleSheet.create({
  alertContainer: {
    height: height,
    width: width,
    position: 'absolute',
    zIndex: 1000,
  },
  blurContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 52,
    marginVertical: Dimensions.get('window').width * 0.3,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  flexGrowOne: {
    flexGrow: 1,
  },
});
export default CenterModal;
