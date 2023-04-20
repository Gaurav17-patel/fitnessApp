import {StyleSheet} from 'react-native';
import {Fonts} from '../../../constant';
import {dynamicSize} from '../../../constant/DynamicFontSize';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(40),
    color: Colors.welcome_text,
  },
  resetHeader: {
    marginTop: 14,
    fontSize: dynamicSize(14),
    color: Colors.label_text,
    fontFamily: Fonts.fontRegular,
  },
  resetPswBtn: {
    height: 54,
    borderRadius: 8,
    backgroundColor: Colors.btn_color,
  },
  disableResetPswBtn: {
    height: 54,
    borderRadius: 8,
    backgroundColor: 'gray',
  },
  resetPswText: {
    color: Colors.white_color,
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(18),
  },
  errMsg: {
    color: 'red',
    marginTop: 5,
    paddingLeft: 5,
  },
});
