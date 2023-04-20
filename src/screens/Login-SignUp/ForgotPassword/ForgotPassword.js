import styles from './ForgotPasswordStyles';
import {Cross} from '../../../assets/index';
import React, {useCallback, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {PostRequest} from '../../../utils/ApiRequest';
import {forgot_password} from '../../../utils/ApiConstants';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {CImage, LabelText, CInput, CButton} from '../../../components/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../../../theme/colors';
import {loader_action} from '../../../redux/action/action';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';

const ForgotPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    reset,
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      email: '',
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
    reset({email: ''});
  };

  const forgotPSW = async data => {
    try {
      dispatch(loader_action(true));
      await PostRequest(forgot_password, data).then(res => {
        if (res.data.code === 200) {
          resetFieldsValue();
          navigation.navigate('VerifyEmail', {
            fromScreen: 'forgotPSW',
            emailId: data.email,
          });
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
            <LabelText label={'Forgot password'} labelStyle={styles.welcome} />
            <LabelText
              label={'Enter your email and forgot your password'}
              labelStyle={styles.resetHeader}
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
                  style={{marginTop: 40}}
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
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <CButton
              btnText={'Forgot password'}
              style={isValid ? styles.resetPswBtn : styles.disabledResetPswBtn}
              btnOnPress={handleSubmit(forgotPSW)}
              btnTextStyle={styles.resetPswText}
              disabled={!isValid}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
