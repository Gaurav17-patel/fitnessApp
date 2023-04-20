import React, {useEffect, useState} from 'react';
import {BackArrow, Facebook, Google, Apple} from '../../../assets/index';
import {
  LabelText,
  CImage,
  CButton,
  SocialButton,
} from '../../../components/index';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './LoginOptionsStyles';
import {Get_item} from '../../../utils/AsyncStorage';

const LoginOptions = ({navigation}) => {
  const [role, setRole] = useState('');
  useEffect(() => {
    getSelectedRoleFromAsyncStorage();
  }, []);

  const getSelectedRoleFromAsyncStorage = async () => {
    const Get_Selected_Role = await Get_item('selected_role');
    if (Get_Selected_Role && Get_Selected_Role != null) {
      setRole(Get_Selected_Role);
    }
  };

  const loginAccount = () => navigation.navigate('Login');
  const facebookLogin = () => {
    alert("I'm facebook");
  };
  const googleLogin = () => {
    navigation.navigate('ResetPassword');
  };
  const appleLogin = () => {
    navigation.navigate('ConfirmationPage');
  };
  const signupAccount = () => {
    navigation.navigate('Signup');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{flex: 0.5, marginTop: 15}}
          onPress={() => navigation.goBack()}>
          <CImage imgUrl={BackArrow} style={{height: 12, width: 12}} />
        </TouchableOpacity>
        <View style={{flex: 3, height: 'auto'}}>
          <LabelText label={'Welcome'} labelStyle={styles.welcome} />
          <LabelText label={role} labelStyle={styles.masterTrainer} />
          <LabelText
            label={'Please login to continue using the platform'}
            labelStyle={styles.headerText}
          />
          <CButton
            btnText={'Log in'}
            style={styles.loginBtn}
            btnOnPress={loginAccount}
            btnTextStyle={styles.loginText}
          />
          <SocialButton
            socialLogo={Facebook}
            socialPress={facebookLogin}
            mainStyle={styles.socialBtns}
            socialLoginText={'Continue with Facebook'}
          />
          <SocialButton
            socialLogo={Google}
            socialPress={googleLogin}
            mainStyle={styles.socialBtns}
            socialLoginText={'Continue with Google'}
          />
          <SocialButton
            socialLogo={Apple}
            socialPress={appleLogin}
            mainStyle={styles.socialBtns}
            socialLoginText={'Continue with Apple'}
          />
        </View>
        <View style={styles.signUpView}>
          <LabelText
            label={"Dont't have an account?" + ' '}
            labelStyle={styles.footerTextOne}
          />
          <TouchableOpacity onPress={signupAccount}>
            <LabelText label={'Sign up'} labelStyle={styles.footerTextTwo} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginOptions;
