import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/index';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  inputText: {
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
});
