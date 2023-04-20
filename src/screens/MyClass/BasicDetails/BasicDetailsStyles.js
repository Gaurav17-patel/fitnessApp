import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  inputTextStyle: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 25,
    color: Colors.Detail_input_heading,
  },
  inputStyle: {
    borderWidth: 0,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontMedium,
    backgroundColor: Colors.Detail_input_Color,
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
  repeatClass: {
    textAlign: 'center',
    fontFamily: Fonts.fontRegular,
    color: Colors.Detail_input_Text_Color
  },
});
