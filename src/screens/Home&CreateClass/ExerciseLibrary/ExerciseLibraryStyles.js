import {StyleSheet} from 'react-native';
import { dynamicSize, Fonts } from '../../../constant/index';
import { Colors } from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
  headingText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.Header_Text_Color,
  },
  headerText2: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    marginTop: 7,
    color: Colors.welcome_text,
  },
  footerText2: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    marginTop: 7,
    color: Colors.welcome_text,
  },
});
