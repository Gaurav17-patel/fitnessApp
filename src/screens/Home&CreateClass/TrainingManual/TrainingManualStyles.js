import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  boxTextStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontSemiBold,
    color: '#4C545C',
  },
});
