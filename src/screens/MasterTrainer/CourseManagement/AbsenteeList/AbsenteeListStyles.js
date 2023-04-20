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
  exerciseView: {flexDirection: 'row', width: '100%', marginTop: 28},
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
    width: '20%',
    alignItems: 'flex-end',
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
});
