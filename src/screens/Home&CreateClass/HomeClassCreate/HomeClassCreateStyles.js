import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: Colors.Primary_BG_Color,
    backgroundColor: '#E8E8E8',
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
  timeStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontMedium,
    marginTop: 2,
    color: '#283452',
  },
});
