import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  searchView: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 20
  },
  headingText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
    marginBottom: 18
  },
  timeStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontRegular,
    marginTop: 2,
    color: '#283452',
  },
});
