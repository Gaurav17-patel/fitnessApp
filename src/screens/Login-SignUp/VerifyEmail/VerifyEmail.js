import React, {useState, useEffect, useRef, useMemo} from 'react';
import styles from './VerifyEmailStyles';
import {BackArrow} from '../../../assets/index';
import {CImage, LabelText, CButton} from '../../../components/index';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/colors';
import {verify_email_code, forgot_password} from '../../../utils/ApiConstants';
import {PostRequest} from '../../../utils/ApiRequest';
import OTPTextView from 'react-native-otp-textinput';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {loader_action} from '../../../redux/action/action';
import {Add_item, Get_item} from '../../../utils/AsyncStorage';

const VerifyEmail = ({props, navigation, route}) => {
  const dispatch = useDispatch();
  let otpInput = useRef(null);
  const email = route.params.emailId;
  // const email = 'vidish@expertappdevs.dev';
  const [userId, setUserId] = useState('');
  const [otp, setOtp] = useState('');
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [emailVerifyMsg, setEmailVerifyMsg] = useState(
    'Email has been changed successfully',
  );

  useEffect(() => {
    getUserData();
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetOtpInputValue();
      setMinutes(2);
      setSeconds(0);
    });
    return unsubscribe;
  }, [navigation]);

  const getUserData = () => {
    Get_item('userData')
      .then(res => {
        let loggedUserData = JSON.parse(res);
        if (loggedUserData) {
          setUserId(loggedUserData?.data?.id);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const resetOtpInputValue = () => {
    otpInput.current.inputs[0].clear();
    otpInput.current.inputs[1].clear();
    otpInput.current.inputs[2].clear();
    otpInput.current.inputs[3].clear();
    otpInput.current.inputs[0].focus();
  };

  const verifyEmail = async () => {
    try {
      let data = {
        otp: otp,
        email: email,
      };
      dispatch(loader_action(true));
      await PostRequest(verify_email_code, data).then(res => {
        if (res.data.code === 200) {
          Toast.show(res.data.message, Toast.LONG);
          if (route.params.fromScreen === 'forgotPSW') {
            navigation.navigate('ResetPassword', {
              emailId: email,
            });
          } else if (route.params.fromScreen === 'PersonalDetails') {
            navigation.goBack('');
            Add_item('emailVerify', emailVerifyMsg);
            Toast.show(res.data.message, Toast.LONG);
          }
          dispatch(loader_action(false));
        } else {
          setOtp('');
          resetOtpInputValue();
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
        }
      });
    } catch (error) {
      console.log('error', error);
      dispatch(loader_action(false));
    }
  };

  const resendOTP = async () => {
    try {
      let data = {
        email: email,
      };
      dispatch(loader_action(true));
      await PostRequest(forgot_password, data).then(res => {
        if (res.data.code === 200) {
          setMinutes(2);
          setSeconds(0);
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
        } else {
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
        }
      });
    } catch (error) {
      console.log('error', error);
      dispatch(loader_action(false));
    }
  };

  const handleChange = otp => {
    if (otp.length && otp.length === 4) {
      setOtp(otp);
      otpInput = otp;
      // otpInputValues.pop();
      // otpInputValues.push(otp);
    } else {
      setOtp('');
    }
  };

  useMemo(() => {
    if (otp) {
      console.log('otp', otp);
    }
  }, [otp]);

  const resendCodeDisable = seconds === 0 ? false : true;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={{flex: 0.5, marginTop: 15}}
            onPress={() => navigation.goBack()}>
            <CImage imgUrl={BackArrow} style={{height: 12, width: 12}} />
          </TouchableOpacity>
          <View style={{flex: 3}}>
            <LabelText label={'Verify email'} labelStyle={styles.welcome} />
            <Text
              style={{
                fontSize: dynamicSize(16),
                color: Colors.label_text,
              }}
              numberOfLines={1}>{`We’ve sent a 4-digit code on ${email}`}</Text>
            <View style={{height: 110, marginTop: 20}}>
              <OTPTextView
                inputCount={4}
                keyboardType="numeric"
                ref={otpInput}
                handleTextChange={handleChange}
                textInputStyle={styles.otpInputStyle}
                tintColor={'gray'}
                clearInputs={otpInput}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: dynamicSize(14),
                  color: Colors.placeholder_color,
                  fontFamily: Fonts.fontRegular,
                }}>
                {minutes === 0 && seconds === 0
                  ? '00:00'
                  : `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
              </Text>
              <TouchableOpacity
                onPress={resendOTP}
                disabled={resendCodeDisable}>
                <Text
                  style={{
                    fontFamily: Fonts.fontBold,
                    fontSize: dynamicSize(14),
                    color: resendCodeDisable
                      ? Colors.placeholder_color
                      : Colors.selected_role_color,
                  }}>
                  Resend code
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <CButton
              btnText={'Verify'}
              style={otp != '' ? styles.verifyBtn : styles.disableVerifyBtn}
              btnOnPress={verifyEmail}
              btnTextStyle={styles.verifyText}
              disabled={otp != '' ? false : true}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default VerifyEmail;
