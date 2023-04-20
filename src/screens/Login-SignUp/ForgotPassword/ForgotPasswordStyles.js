import {StyleSheet} from 'react-native';
import {dynamicSize} from '../../../constant/DynamicFontSize';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: dynamicSize(40),
    color: Colors.welcome_text,
  },
  resetHeader: {
    marginTop: 14,
    fontSize: dynamicSize(14),
    color: Colors.label_text,
  },
  resetPswBtn: {
    height: 54,
    borderRadius: 8,
    backgroundColor: Colors.btn_color,
  },
  disabledResetPswBtn: {
    height: 54,
    borderRadius: 8,
    backgroundColor: 'gray',
  },
  resetPswText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: dynamicSize(18),
  },
});
