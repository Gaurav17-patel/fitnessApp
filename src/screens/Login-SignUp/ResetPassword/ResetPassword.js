import React, {useMemo, useState} from 'react';
import styles from './ResetPasswordStyles';
import {Cross} from '../../../assets/index';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {CImage, LabelText, CInput, CButton} from '../../../components/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../../../theme/colors';
import {PostRequest} from '../../../utils/ApiRequest';
import {change_password} from '../../../utils/ApiConstants';
import {loader_action} from '../../../redux/action/action';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';

const ResetPassword = ({navigation, route}) => {
  const dispatch = useDispatch();
  const email = route.params.emailId;
  const [password, setPassword] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [cPasswordErrMsg, setCPasswordErrMsg] = useState('');
  const [btnDisabledPsw, setBtnDisabledPsw] = useState(false);
  const [btnDisabledCPsw, setBtnDisabledCPsw] = useState(false);

  let passwordRegx = /^\S*$/;

  const resetPsw = async () => {
    try {
      let data = {
        email: email,
        password: password,
        password_confirmation: cPassword,
      };
      dispatch(loader_action(true));
      await PostRequest(change_password, data).then(res => {
        if (res.data.code === 200) {
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
          navigation.navigate('ConfirmationPage', {
            fromScreen: 'ResetPassword',
          });
        } else {
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
        }
      });
    } catch (error) {
      dispatch(loader_action(false));
    }
  };

  useMemo(() => {
    if (password === '') {
      setBtnDisabledCPsw(false);
      setBtnDisabledPsw(false);
      setPasswordErrMsg('Please enter password');
    } else if (password.length < 6) {
      setBtnDisabledCPsw(false);
      setBtnDisabledPsw(false);
      setPasswordErrMsg('Password length should be minimum of 6 digits');
    } else if (!passwordRegx.test(password)) {
      setBtnDisabledCPsw(false);
      setBtnDisabledPsw(false);
      setPasswordErrMsg('Password does not contain white space');
    } else {
      setPasswordErrMsg('');
    }
  }, [password]);

  useMemo(() => {
    if (cPassword === '') {
      setBtnDisabledPsw(false);
      setBtnDisabledCPsw(false);
      setCPasswordErrMsg('Please enter confirm-password');
    } else if (password != cPassword) {
      setBtnDisabledPsw(false);
      setBtnDisabledCPsw(false);
      setCPasswordErrMsg('Password and confirm password doesn’t match');
    } else {
      setBtnDisabledPsw(true);
      setBtnDisabledCPsw(true);
      setCPasswordErrMsg('');
    }
  }, [cPassword]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}
        scrollEnabled={false}>
        <View style={styles.container}>
          <TouchableOpacity
            style={{flex: 0.5}}
            onPress={() => navigation.goBack()}>
            <CImage imgUrl={Cross} style={{height: 12, width: 12}} />
          </TouchableOpacity>
          <View style={{flex: 3}}>
            <LabelText label={'Reset password'} labelStyle={styles.welcome} />
            <LabelText
              label={'Enter your new password'}
              labelStyle={styles.resetHeader}
            />
            <CInput
              label={'Create Password'}
              value={password}
              onChangeText={psw => {
                setPassword(psw);
              }}
              secureTextEntry={true}
              style={{marginTop: 32}}
              showPlaceholder={'***************'}
              placeholderColor={Colors.placeholder_color}
            />
            {passwordErrMsg.length > 0 && (
              <Text style={styles.errMsg}>{passwordErrMsg}</Text>
            )}
            <CInput
              label={'Confirm Password'}
              value={cPassword}
              onChangeText={cpsw => setCPassword(cpsw)}
              secureTextEntry={true}
              style={{marginTop: 32}}
              showPlaceholder={'***************'}
              placeholderColor={Colors.placeholder_color}
            />
            {cPasswordErrMsg.length > 0 && (
              <Text style={styles.errMsg}>{cPasswordErrMsg}</Text>
            )}
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <CButton
              btnText={'Reset password'}
              style={
                btnDisabledPsw && btnDisabledCPsw
                  ? styles.resetPswBtn
                  : styles.disableResetPswBtn
              }
              btnOnPress={resetPsw}
              btnTextStyle={styles.resetPswText}
              disabled={!btnDisabledPsw && !btnDisabledCPsw}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
