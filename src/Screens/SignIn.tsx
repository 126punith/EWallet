import {
  Button,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Color from '../Constants/Color';
import Images from '../assets/Images';
import CenterModal from '../ReUseableComponents/CenterModal';
import OTPTextInput from 'react-native-otp-textinput';
const {width} = Dimensions.get('window');

const SignIn = props => {
  const [mobileNumber, setMobileNumber] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = num => {
    otpInput.current.setValue(num);
    setMobileNumber(otpInput.current);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <StatusBar backgroundColor={Color.primary} />
      <View style={styles.container}>
        <Image
          source={Images.appLogo}
          style={[styles.appLogoImage, styles.appLogoContainer]}
        />
        <View style={styles.marginTop}>
          <Text style={styles.titleText}>Please enter your Mobile Number</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            onBlur={openModal}
            maxLength={10}
          />
        </View>
        <CenterModal showModal={isModalOpen} modalHandler={closeModal}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <OTPTextInput
              ref={e => (otpInput = e)}
              inputCellLength={1}
              textInputStyle={{
                marginBottom: 20,
              }}
            />
            <Button
              title="Submit"
              onPress={() => {
                props.navigation.navigate('Main');
                closeModal();
              }}
            />
          </View>
        </CenterModal>
      </View>
    </>
  );
};

export default SignIn;

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
  appLogoContainer: {position: 'absolute', left: '50%'},
  appLogoImage: {
    width: 53,
    height: 33,
    resizeMode: 'cover',
  },
  textInput: {
    width: width * 0.8,
    height: 40,
    backgroundColor: Color.white,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 14,
    color: Color.white,
    fontWeight: '700',
    lineHeight: 22,
  },
  marginTop: {
    marginTop: width * 0.5,
  },
});
