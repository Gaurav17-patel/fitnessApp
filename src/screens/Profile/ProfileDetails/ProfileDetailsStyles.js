import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  processView: {
    padding: 20,
    marginTop: 32,
    width: '99%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  headerStyle: {
    color: Colors.welcome_text,
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(16),
    marginBottom: 20,
  },
  borderHeader: {
    borderBottomWidth: 1,
    marginBottom: 23,
    borderColor: Colors.border_color,
  },
});
