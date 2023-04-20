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
    padding: 15,
    marginTop: 25
  },
  signUpView: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTextOne: {
    color: Colors.label_text,
    fontSize: 16,
  },
  footerTextTwo: {
    color: Colors.selected_role_color,
    fontWeight: 'bold',
    fontSize: 16,
  },
  welcome: {
    fontSize: dynamicSize(40),
    color: Colors.welcome_text,
  },
  masterTrainer: {
    fontWeight: 'bold',
    fontSize: dynamicSize(40),
    color: Colors.welcome_text,
  },
  headerText: {
    marginTop: 14,
    // fontWeight: '500',
    color: Colors.label_text,
    fontSize: dynamicSize(14),
  },
  loginBtn: {
    height: 56,
    marginTop: 42,
    borderRadius: 8,
    backgroundColor: Colors.btn_color,
  },
  socialBtns: {
    height: 56,
    marginTop: 25,
  },
  loginText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: dynamicSize(18),
  },
});
