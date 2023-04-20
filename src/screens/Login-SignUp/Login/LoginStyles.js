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
    padding: dynamicSize(18),
    marginTop: dynamicSize(22),
  },
  welcome: {
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(40),
    color: Colors.welcome_text,
  },
  loginHeader: {
    marginTop: dynamicSize(14),
    fontSize: dynamicSize(16),
    color: Colors.label_text,
    fontFamily: Fonts.fontRegular,
  },
  fgPsw: {
    marginTop: dynamicSize(10),
    fontFamily: Fonts.fontBold,
    alignSelf: 'flex-end',
    color: Colors.forgot_psw,
    fontSize: dynamicSize(14),
  },
  loginBtn: {
    height: dynamicSize(54),
    borderRadius: dynamicSize(8),
    backgroundColor: Colors.btn_color,
  },
  disableLoginBtn: {
    height: dynamicSize(54),
    borderRadius: dynamicSize(8),
    backgroundColor: 'gray',
  },
  loginText: {
    color: '#FFFFFF',
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(18),
  },
  fadingContainer: {
    padding: dynamicSize(20),
    marginBottom: dynamicSize(20),
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: dynamicSize(28),
  },
});
