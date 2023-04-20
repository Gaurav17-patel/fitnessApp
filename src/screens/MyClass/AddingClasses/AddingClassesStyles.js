import { StyleSheet, Platform } from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ? 20 : 0,
  },
  processView: {
    padding: 24,
    width: Platform.OS === "ios" ? '100%' : '90%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 10
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
  createClassStyles: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
    paddingRight: 11,
  },
  borderHeader: {
    borderBottomWidth: 1,
    marginBottom: 23,
    borderColor: Colors.border_color,
  },
  borderFooter: {
    width: '100%',
    alignSelf: 'center',
    borderTopWidth: 1,
    margin: 23,
    borderColor: Colors.border_color,
  },
});
