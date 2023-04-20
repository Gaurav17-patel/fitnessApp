import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  headingStyle: {
    fontSize: dynamicSize(20),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text
  }
});
