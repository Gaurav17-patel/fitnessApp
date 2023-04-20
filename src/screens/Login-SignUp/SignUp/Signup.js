import React, {useState} from 'react';
import styles from './SignupStyles';
import {Cross} from '../../../assets/index';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CImage, LabelText, CInput, CButton} from '../../../components/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [CPasswordFocus, setCPasswordFocus] = useState(false);

  const signupAccount = () => {
    navigation.navigate('VerifyEmail');
  };
  return (
    // // <SafeAreaView style={styles.mainContainer}>
    // <ScrollView
    //   keyboardShouldPersistTaps="handled"
    //   contentContainerStyle={{flexGrow: 1}}>
    //   <View style={styles.container}>
    // <TouchableOpacity
    //   style={{flex: 0.5}}
    //   onPress={() => navigation.goBack()}>
    //   <CImage imgUrl={Cross} style={{height: 12, width: 12}} />
    // </TouchableOpacity>
    //     <View style={{flex: 3}}>
    // <LabelText label={'Create account'} labelStyle={styles.welcome} />
    // <LabelText
    //   label={'Enter details mentioned below to continue'}
    //   labelStyle={styles.loginHeader}
    // />
    // <CInput
    //   label={'Email'}
    //   value={email}
    //   onChangeText={text => setEmail(text)}
    //   style={{marginTop: 40}}
    //   secureTextEntry={false}
    //   showPlaceholder={'john@gmail.com'}
    // />
    // <CInput
    //   label={'Password'}
    //   value={password}
    //   onChangeText={text => setPassword(text)}
    //   secureTextEntry={true}
    //   style={{marginTop: 32}}
    //   showPlaceholder={'***************'}
    // />
    // <CInput
    //   label={'Confirm Password'}
    //   value={cPassword}
    //   onChangeText={text => setCPassword(text)}
    //   secureTextEntry={true}
    //   style={{marginTop: 32}}
    //   showPlaceholder={'***************'}
    // />
    //     </View>
    // <View style={{flex: 1, justifyContent: 'flex-end'}}>
    //   <CButton
    //     btnText={'Create account'}
    //     style={styles.loginBtn}
    //     btnOnPress={signupAccount}
    //     btnTextStyle={styles.loginText}
    //   />
    // </View>
    //   </View>
    // </ScrollView>
    // // </SafeAreaView>
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={{padding: 20, marginTop: 20}}>
          <TouchableOpacity
            style={{flex: 0.5, marginTop: 15}}
            onPress={() => navigation.goBack()}>
            <CImage imgUrl={Cross} style={{height: 12, width: 12}} />
          </TouchableOpacity>
          <ScrollView
            style={{marginTop: 55}}
            contentContainerStyle={{flexGrow: 1, paddingBottom: 100}}
            showsVerticalScrollIndicator={false}>
            <LabelText label={'Create account'} labelStyle={styles.welcome} />
            <LabelText
              label={'Enter details mentioned below to continue'}
              labelStyle={styles.loginHeader}
            />
            <CInput
              label={'Email'}
              value={email}
              onChangeText={text => setEmail(text)}
              style={{marginTop: 40}}
              secureTextEntry={false}
              showPlaceholder={'john@gmail.com'}
              labelTextStyle={emailFocus && styles.selectedLabelText}
              inputStyle={emailFocus && styles.selectedInputStyle}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <CInput
              label={'Password'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={{marginTop: 32}}
              showPlaceholder={'***************'}
              labelTextStyle={passwordFocus && styles.selectedLabelText}
              inputStyle={passwordFocus && styles.selectedInputStyle}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <CInput
              label={'Confirm Password'}
              value={cPassword}
              onChangeText={text => setCPassword(text)}
              secureTextEntry={true}
              style={{marginTop: 32}}
              showPlaceholder={'***************'}
              labelTextStyle={CPasswordFocus && styles.selectedLabelText}
              inputStyle={CPasswordFocus && styles.selectedInputStyle}
              onFocus={() => setCPasswordFocus(true)}
              onBlur={() => setCPasswordFocus(false)}
            />
          </ScrollView>
        </View>
        <View
          style={{
            padding: 20,
            position: 'absolute',
            bottom: 20,
            width: '100%',
          }}>
          <CButton
            btnText={'Create account'}
            style={styles.loginBtn}
            btnOnPress={signupAccount}
            btnTextStyle={styles.loginText}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Signup;
