import React, {useEffect, useState, useMemo} from 'react';
import styles from './ConfirmationPageStyles';
import {Confirmation} from '../../../assets/index';
import {View, SafeAreaView} from 'react-native';
import {CButton, LabelText, CImage} from '../../../components/index';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';

const ConfirmationPage = ({navigation}) => {
  const route = useRoute();
  const date = new Date().toDateString().split(' ');
  const [screenName, setScreenName] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const moveToScreen = () => {
    clearParams();
  };

  const clearParams = () => {
    screenName === 'Certification'
      ? navigation.navigate('TabNavigator')
      : screenName === 'ResetPassword'
      ? navigation.navigate('Login')
      : // : screenName === 'loggedIn'
      // ? navigation.navigate('SetupAccount')
      screenName === 'ExerciseTemplateLibrary'
      ? navigation.navigate('TabNavigator')
      : // : screenName === 'PersonalDetails'
      // ? navigation.navigate('Address')
      screenName === 'AbsentReason'
      ? navigation.navigate('ManagementToolkit')
      : screenName === 'ContactUs'
      ? navigation.navigate('ProfileScreen')
      : null;
  };

  // useMemo(() => {
  //   const {fromScreen} = route.params;
  //   setScreenName(fromScreen);
  // }, [screenName]);

  useEffect(() => {
    if (route.params?.fromScreen) {
      getDateFormat();
      setScreenName(route.params.fromScreen);
      navigation.setParams({fromScreen: null});
    }
  }, [route.params?.fromScreen]);

  const getDateFormat = () => {
    const date = new Date().toDateString().split(' ');
    const day = date[2];
    const month = date[1];
    const year = date[3];
    const time = moment().format('h:mm A');
    const dateFormat = `${day} ${month}, ${year} - ${time}`;
    setCurrentDate(dateFormat);
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <CImage imgUrl={Confirmation} style={styles.confirmationLogo} />
          <LabelText
            label={
              screenName === 'ResetPassword'
                ? 'Password changed'
                : screenName === 'Certification'
                ? 'Profile Completed'
                : screenName === 'ExerciseTemplateLibrary'
                ? 'Class created'
                : screenName === 'AbsentReason'
                ? 'Attendance Marked'
                : screenName === 'ContactUs'
                ? 'Message Sent'
                : ''
            }
            labelStyle={styles.headerTextStyle}
          />
          <LabelText
            label={
              // screenName === 'loggedIn'
              //   ? 'Your account has been created successfully. Please log in to continue.'
              // screenName === 'PersonalDetails'
              //   ? 'Your email has been updated successfully.'
              screenName === 'ResetPassword'
                ? 'Your password has been updated successfully. Please log in to continue.'
                : screenName === 'Certification'
                ? 'Your profile has been completed successfully. You can edit your profile details anytime from the settings option..'
                : screenName === 'ExerciseTemplateLibrary'
                ? 'Your class has been created successfully, with the following date & time.'
                : screenName === 'AbsentReason'
                ? 'Atendance has been marked successfully, for the following date & time.'
                : screenName === 'ContactUs'
                ? 'Your message has been sent successfully.'
                : ''
            }
            labelStyle={styles.headerSubText}
          />
          <LabelText
            label={
              screenName === 'ExerciseTemplateLibrary'
                ? `${currentDate}`
                : screenName === 'AbsentReason'
                ? `${currentDate}`
                : screenName === 'ContactUs'
                ? 'Our team will reach back to you on your provided email/ number soon!'
                : ''
            }
            labelStyle={styles.subheaderSubText}
          />
        </View>
      </SafeAreaView>
      <CButton
        btnText={
          // screenName === 'loggedIn'
          //   ? 'Proceed'
          screenName === 'ResetPassword'
            ? 'Log in '
            : screenName === 'Certification'
            ? 'Take me home'
            : screenName === 'ExerciseTemplateLibrary'
            ? 'Take me home'
            : screenName === 'AbsentReason'
            ? 'Take me home'
            : screenName === 'ContactUs'
            ? 'Ok, got it'
            : ''
        }
        style={styles.proceedBtnStyle}
        btnTextStyle={styles.btnTextStyle}
        btnOnPress={moveToScreen}
      />
    </>
  );
};

export default ConfirmationPage;
