import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/index';

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
    padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontRegular,
    backgroundColor: Colors.Detail_input_Color,
    borderColor: Colors.border_color,
  },
  BioData: {
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border_color,
    backgroundColor: Colors.Detail_input_Color,
    borderRadius: 4,
    marginTop: 8,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontRegular,
    height: dynamicSize(110),
  },
});
