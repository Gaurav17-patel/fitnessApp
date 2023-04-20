import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

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
    fontFamily: Fonts.fontRegular,
    marginTop: 2,
    color: '#283452',
  },
  TitleStyles: {
    marginTop: 48,
    fontSize: dynamicSize(20),
    fontFamily: Fonts.fontBold,
    color: Colors.darkest_blue,
    marginBottom: 10,
  },
});
