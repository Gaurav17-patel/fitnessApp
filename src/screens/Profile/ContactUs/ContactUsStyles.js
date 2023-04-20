import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white_color,
  },
  container: {
    flex: 1,
    marginTop: 44,
  },
  detailsText: {
    fontSize: 12,
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  userNameText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 25,
    color: Colors.profile_text,
  },
  inputStyle: {
    // padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontRegular,
    backgroundColor: Colors.role_BG_Color,
    borderColor: Colors.border_color,
  },
  MessageStyle: {
    // padding: 14,
    borderWidth: 1,
    borderColor: Colors.border_color,
    backgroundColor: Colors.role_BG_Color,
    borderRadius: 4,
    marginTop: 8,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontRegular,
    height: dynamicSize(110),
  },
  SubmitBtnStyle: {
    marginTop: 40,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  phoneContainer: {
    width: '100%',
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 0.8,
    letterSpacing: 2,
    fontFamily: Fonts.fontRegular,
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    color: Colors.welcome_text,
    backgroundColor: Colors.white_color,
    borderColor: Colors.border_color,
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: Colors.white_color,
  },
  mobileNumberText: {
    fontFamily: Fonts.fontSemiBold,
    fontSize: dynamicSize(14),
    color: Colors.welcome_text,
  },
  SubmitBtnText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
  },
});
