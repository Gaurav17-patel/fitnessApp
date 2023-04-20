import {StyleSheet} from 'react-native';
import {Colors} from '../../../../theme/colors';
import {dynamicSize, Fonts} from '../../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  headingStyle: {
    fontSize: dynamicSize(20),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  footerHeading: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
    marginLeft: 6,
  },
  nextBtnText: {
    fontFamily: Fonts.fontBold,
  },
  nextBtnStyle: {
    marginTop: 40,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
});
