import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  searchView: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  headingText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  inputText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 28,
    color: Colors.welcome_text,
  },
  BioData: {
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
  userNameText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 25,
    color: Colors.profile_text,
  },
  detailsText: {
    marginTop: 17,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.6,
    borderColor: '#00B4DD',
  },
  checkBoxText: {
    marginLeft: 12,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.label_text,
  },
  nextBtnText: {
    fontFamily: Fonts.fontBold,
  },
  nextBtnStyle: {
    marginTop: 28,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  disableBtn: {
    marginTop: 28,
    height: 48,
    backgroundColor: 'gray',
  },
  errMsg: {
    color: 'red',
    marginTop: 5,
    // paddingLeft: 5,
  },

  //RBSheets

  rbSheetButton: {
    paddingTop: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },
  rbSheetsBtnText: {
    fontSize: dynamicSize(20),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.forgot_psw,
  },
  rbSheetBorderStyle: {
    borderBottomWidth: 1,
    borderColor: Colors.border_color,
  },
  rbSheetCancleBtn: {
    paddingTop: 20,
    alignItems: 'center',
  },
});
