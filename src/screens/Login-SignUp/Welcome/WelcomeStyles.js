import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize} from '../../../constant/DynamicFontSize';
import { Fonts } from '../../../constant/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  stickLogo: {
    height: 56,
    width: 48,
  },
  bannerText: {
    fontSize: 40,
    color: Colors.welcome_text,
  },
  appText: {
    // marginTop: 7,
    fontWeight: 'bold',
    fontSize: dynamicSize(40),
    color: Colors.welcome_text,
  },
  roleHeaderText: {
    marginTop: 14,
    fontSize: dynamicSize(14),
  },
  roleBox: {
    marginTop: dynamicSize(26),
  },
  proceedBtnStyle: {
    height: 48,
    // marginTop: dynamicSize(112),
    backgroundColor: Colors.btn_color,
  },
});
