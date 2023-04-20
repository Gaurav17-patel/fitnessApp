import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  welcome: {
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(40),
    color: Colors.welcome_text,
  },
  loginHeader: {
    marginTop: 14,
    fontSize: dynamicSize(14),
    color: Colors.label_text,
    fontFamily: Fonts.fontRegular,
  },
  verifyBtn: {
    height: 54,
    borderRadius: 8,
    backgroundColor: Colors.btn_color,
  },
  disableVerifyBtn: {
    height: 54,
    borderRadius: 8,
    backgroundColor: 'gray',
  },
  verifyText: {
    color: '#FFFFFF',
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(18),
  },
  underlineStyleBase: {
    width: 68,
    height: 68,
    fontSize: 25,
    borderRadius: 8,
    borderWidth: 1.2,
    backgroundColor: '#FFFFFF',
    color: Colors.welcome_text,
    borderColor: Colors.border_color,
  },

  underlineStyleHighLighted: {
    borderWidth: 1.2,
    borderColor: 'red',
    borderColor: Colors.border_color,
  },
  otpInputStyle: {
    width: 65,
    height: 65,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#191919',
  },
  errMsg: {
    color: 'red',
    marginTop: 5,
    paddingLeft: 5,
  },
});
