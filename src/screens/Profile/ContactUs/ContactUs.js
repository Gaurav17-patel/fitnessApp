import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './ContactUsStyles';
import {
  LabelText,
  CInput,
  CButton,
  CSearchBar,
} from '../../../components/index';
import {BackArrow} from '../../../assets/index';
import {Colors} from '../../../theme/colors';
import PhoneInput from 'react-native-phone-number-input';

const ContactUs = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);

  const pressNext = () => {
    // navigation.navigate('Address');
    navigation.navigate('ConfirmationPage', {
      fromScreen: 'ContactUs',
    });
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <CSearchBar
            onPress={() => navigation.goBack()}
            textInput={true}
            showSearchIcon={true}
            backArrow={BackArrow}
            textInput={false}
            inputText={'Contact Us'}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 20,
              marginTop: 15,
              paddingBottom: 60,
            }}>
            <Text style={styles.detailsText}>
              Fill the form below with your{' '}
              <Text
                style={{
                  color: Colors.welcome_text,
                }}>
                message,
              </Text>{' '}
              <Text>our</Text>{' '}
              <Text
                style={{
                  color: Colors.welcome_text,
                }}>
                team will go through it and get back to you on provided email/
                number.
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 32,
              }}>
              <View
                style={{
                  width: '48%',
                }}>
                <CInput
                  showPlaceholder={'John'}
                  inputStyle={styles.inputStyle}
                  mt={-16}
                  label={'First name'}
                  labelTextStyle={styles.userNameText}
                  placeholderColor={Colors.placeholder_color}
                />
              </View>
              <View
                style={{
                  width: '48%',
                }}>
                <CInput
                  showPlaceholder={'Doe'}
                  inputStyle={styles.inputStyle}
                  mt={-16}
                  label={'Last name'}
                  labelTextStyle={styles.userNameText}
                  placeholderColor={Colors.placeholder_color}
                />
              </View>
            </View>
            <CInput
              showPlaceholder={'john@gmail.com'}
              inputStyle={styles.inputStyle}
              label={'Email'}
              placeholderColor={'#000000'}
              labelTextStyle={styles.userNameText}
            />
            <LabelText
              label={'Mobile number'}
              labelStyle={styles.userNameText}
            />
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="AU"
              layout="first"
              autoFocus={false}
              disableArrowIcon={false}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
              onChangeFormattedText={text => {
                setPhoneNumber(text);
              }}
            />
            <CInput
              showPlaceholder={'Briefly describe yourself'}
              inputStyle={styles.MessageStyle}
              label={'Message'}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={6}
              labelTextStyle={styles.userNameText}
              placeholderColor={Colors.placeholder_color}
            />
            <CButton
              btnText={`Submit`}
              btnTextStyle={styles.SubmitBtnText}
              style={styles.SubmitBtnStyle}
              btnOnPress={pressNext}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ContactUs;
