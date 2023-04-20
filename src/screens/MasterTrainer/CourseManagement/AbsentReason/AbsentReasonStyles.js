import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  headingStyle: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  footerView: {
    width: '100%',
    alignItems: 'center',
  },
  exerciseView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.other_BG_Color,
    padding: 20,
  },
  exerciseHeaderStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  exerciseBodyText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontMedium,
    marginTop: 4,
  },
  btnStyle: {
    alignSelf: 'center',
    width: '10%',
  },
  btnTextStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
  },
  startBtnText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
  },
  startBtnStyle: {
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.6,
    borderColor: '#E3E4EF',
  },
  checkBoxText: {
    marginLeft: 12,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.label_text,
  },
  BioData: {
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
});
