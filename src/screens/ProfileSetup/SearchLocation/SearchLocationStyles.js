import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  searchView: {
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1.2,
    borderColor: Colors.border_color,
  },
});
