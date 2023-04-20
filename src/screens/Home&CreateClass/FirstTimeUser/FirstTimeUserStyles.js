import {Platform, StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/colors';

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
    marginTop: 15,
    width: Platform.OS === 'ios' ? '100%' : '90%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  processIndexView: {
    borderRadius: 14,
    backgroundColor: Colors.index_Bg_color,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignSelf: 'center',
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
  resourceStyle: {
    width: '90%',
    marginBottom: 8,
    alignSelf: 'center',
  },
});
