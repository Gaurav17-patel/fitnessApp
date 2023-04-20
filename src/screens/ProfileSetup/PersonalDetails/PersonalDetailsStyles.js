import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    marginTop: 44,
  },
  containerStyle: {
    flexGrow: 1,
    padding: 20,
    marginTop: 15,
    paddingBottom: 60,
  },
  detailsText: {
    fontSize: 12,
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  processView: {
    marginTop: 20,
    width: '100%',
    height: 'auto',
    borderRadius: 8,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  processIndexView: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  processName: {
    marginBottom: 5,
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(16),
    color: Colors.welcome_text,
  },
  subProcess: {
    fontFamily: Fonts.fontRegular,
    fontSize: dynamicSize(12),
    color: Colors.sub_process,
  },
  Fillview: {
    marginTop: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderView: {
    borderBottomWidth: 1,
    width: 100,
    alignSelf: 'center',
    borderColor: '#DEE7E7',
  },
  FillText: {
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontBold,
    textAlign: 'center',
    color: Colors.placeholder_color,
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
  profileContainer: {
    marginTop: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileView: {
    borderRadius: 42,
    width: 84,
    height: 84,
    backgroundColor: Colors.role_BG_Color,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border_color,
  },
  profileImage: {
    borderRadius: 40,
    height: 'auto',
    overflow: 'hidden',
  },
  profileText: {
    fontSize: 12,
    fontFamily: Fonts.fontSemiBold,
    color: '#555C6F',
  },
  userNameMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
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
  verifyText: {
    color: Colors.sub_process,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontMedium,
    paddingLeft: 7,
  },
  nextBtnStyle: {
    marginTop: 40,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  disabledNextBtnStyle: {
    marginTop: 40,
    height: 48,
    backgroundColor: 'gray',
  },
  connectStyle: {
    color: '#3B78FC',
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(16),
    paddingLeft: 5,
  },
  uploadPicBtn: {
    color: Colors.forgot_psw,
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(16),
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
  nextBtnText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
  },
  errMsg: {
    color: 'red',
    marginTop: 5,
    paddingLeft: 5,
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
