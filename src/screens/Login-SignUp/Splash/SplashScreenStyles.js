import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize} from '../../../constant/DynamicFontSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary_BG_Color,
  },
  appLogo: {
    height: dynamicSize(92),
    width: dynamicSize(223),
  },
});
