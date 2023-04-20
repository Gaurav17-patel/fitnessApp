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
    marginTop: 44,
  },
  duration: {
    marginTop: 10,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  inputTextStyle: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 25,
    color: Colors.input_Text_Color,
  },
  inputStyle: {
    // padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    width: '100%',
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontRegular,
    backgroundColor: Colors.role_BG_Color,
    borderColor: Colors.border_color,
  },
  footerText: {
    marginTop: 28,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  footerBody: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    marginTop: 6,
    color: Colors.sub_process,
  },
  SyncStyles: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
    paddingLeft: 8,
  },
  disableSyncStyles: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontBold,
    color: 'gray',
    paddingLeft: 8,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.6,
    borderColor: '#00B4DD',
    marginTop: 20,
  },
  footerInputText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 28,
    color: Colors.welcome_text,
  },
  specialNote: {
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: Colors.border_color,
    backgroundColor: Colors.role_BG_Color,
    borderRadius: 4,
    marginTop: 18,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontRegular,
    height: dynamicSize(110),
    color: Colors.welcome_text,
  },
  nextBtnText: {
    fontFamily: Fonts.fontBold,
  },
  nextBtnStyle: {
    marginTop: 40,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  disableBtn: {
    marginTop: 40,
    height: 48,
    backgroundColor: 'gray',
  },
  repeatClassView: {
    width: '25%',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    padding: 10,
    margin: 5,
  },
  repeatClass: {
    textAlign: 'center',
    fontFamily: Fonts.fontSemiBold,
    fontSize: dynamicSize(14),
  },
  repeatClass1: {
    marginTop: 18,
    borderRadius: 6,
    borderWidth: 0.1,
    width: '30%',
    padding: 10,
    textAlign: 'center',
    fontFamily: Fonts.fontRegular,
    marginRight: 20,
  },
  errMsg: {
    color: 'red',
    marginTop: 5,
    paddingLeft: 5,
  },
});
