import styles from './LoginStyles';
import {useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Add_item} from '../../../utils/AsyncStorage';
import {PostRequest} from '../../../utils/ApiRequest';
import {login_api} from '../../../utils/ApiConstants';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {LabelText, CInput, CButton} from '../../../components/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  loader_action,
  user_login_data_action,
} from '../../../redux/action/action';
import {Colors} from '../../../theme/colors';
import Toast from 'react-native-simple-toast';
import {dynamicSize} from '../../../constant/DynamicFontSize';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [userToken, setUserToken] = useState('');
  const {
    reset,
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      resetFieldsValue();
    });
    return unsubscribe;
  }, [navigation]);

  const resetFieldsValue = () => {
    reset({
      email: '',
      password: '',
    });
  };

  const loggedIn = async data => {
    try {
      dispatch(loader_action(true));
      await PostRequest(login_api, data).then(res => {
        if (res?.data?.code === 200) {
          resetFieldsValue();
          dispatch(user_login_data_action(res.data));
          Add_item('token', res.data.token);
          Add_item('userData', JSON.stringify(res.data));
          setUserId(res?.data?.data?.id);
          setUserToken(res?.data?.token);
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

  useEffect(() => {
    console.log({userToken, userId});
    if (userToken && userId) {
      getSetupProfileRes();
    }
  }, [userToken, userId]);

  const getSetupProfileRes = () => {
    try {
      fetch(
        `http://ec2-3-235-29-132.compute-1.amazonaws.com/api/isProfileSetup/${userId}`,
        {
          method: 'get',
          headers: {
            Authorization: 'Bearer ' + userToken,
            Accept: 'application/json',
          },
        },
      )
        .then(res => res.json())
        .then(response => {
          if (response?.key === 0) {
            setUserId('');
            setUserToken('');
            navigation.navigate('SetupAccount');
          } else {
            setUserId('');
            setUserToken('');
            navigation.navigate('TabNavigator', {screen: 'Home'});
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}
        scrollEnabled={false}>
        <View style={styles.container}>
          <View style={{flex: 3}}>
            <LabelText label={'Welcome!'} labelStyle={styles.welcome} />
            <LabelText
              label={'Enter your email and password'}
              labelStyle={styles.loginHeader}
            />
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter email',
                },
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/,
                  message: 'Please enter valid email',
                },
              }}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched},
              }) => (
                <CInput
                  label={'Email'}
                  value={value}
                  onChangeText={onChange}
                  style={{marginTop: dynamicSize(40)}}
                  secureTextEntry={false}
                  showPlaceholder={'john@gmail.com'}
                  placeholderColor={Colors.placeholder_color}
                  keyboardType={'email-address'}
                  onBlur={onBlur}
                  onFocus={onBlur}
                  errorMessage={
                    isTouched && errors.email ? errors.email.message : ''
                  }
                />
              )}
              name="email"></Controller>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter Password',
                },
              }}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched},
              }) => (
                <CInput
                  label={'Password'}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={true}
                  style={{marginTop: dynamicSize(32)}}
                  showPlaceholder={'***************'}
                  placeholderColor={Colors.placeholder_color}
                  onBlur={onBlur}
                  onFocus={onBlur}
                  errorMessage={
                    isTouched && errors.password ? errors.password.message : ''
                  }
                />
              )}
              name="password"></Controller>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <LabelText
                  label={'Forgot Password?'}
                  labelStyle={styles.fgPsw}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <CButton
              btnText={'Log in'}
              style={isValid ? styles.loginBtn : styles.disableLoginBtn}
              btnOnPress={handleSubmit(loggedIn)}
              btnTextStyle={styles.loginText}
              disabled={!isValid}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
