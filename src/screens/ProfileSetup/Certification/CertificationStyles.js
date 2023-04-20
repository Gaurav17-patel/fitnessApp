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
  detailsText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  processView: {
    // marginTop: 29,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
  },
  // progressBarStyle: {
  //   // marginTop: 6,
  //   backgroundColor: 'red',
  // },
  // updateLoading: {
  //   fontSize: dynamicSize(12),
  //   fontFamily: Fonts.fontBold,
  //   color: Colors.ProgressBar_Line_Color,
  // },
  // userNameText: {
  //   fontSize: dynamicSize(12),
  //   fontFamily: Fonts.fontSemiBold,
  //   color: Colors.welcome_text,
  // },
  // inputStyle: {
  //   // padding: 14,
  //   marginTop: 8,
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   height: dynamicSize(48),
  //   fontSize: dynamicSize(16),
  //   fontFamily: Fonts.fontMedium,
  //   backgroundColor: Colors.role_BG_Color,
  //   borderColor: Colors.border_color,
  // },
  nextBtnStyle: {
    marginTop: 78,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  disableNextBtnStyle: {
    marginTop: 78,
    height: 48,
    backgroundColor: 'gray',
  },
  // borderStyle: {
  //   width: '100%',
  //   borderBottomWidth: 1,
  //   borderColor: Colors.ProgessBar_BG_Color,
  // },

  disableBtn: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontBold,
    color: 'gray',
  },
  buttonTextStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
  },
});
