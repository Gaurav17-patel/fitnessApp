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
  loginHeader: {
    marginTop: 14,
    fontSize: dynamicSize(14),
    color: Colors.label_text,
  },
  fgPsw: {
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    color: Colors.forgot_psw,
    fontSize: dynamicSize(12),
  },
  loginBtn: {
    height: 54,
    borderRadius: 8,
    backgroundColor: Colors.btn_color,
  },
  loginText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: dynamicSize(18),
  },
  selectedInputStyle: {
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 0.8,
    fontWeight: '400',
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    color: Colors.welcome_text,
    backgroundColor: '#FFFFFF',
    borderColor: Colors.forgot_psw,
  },
  selectedLabelText: {
    fontWeight: '600',
    fontSize: dynamicSize(14),
    color: Colors.forgot_psw,
  },
});
