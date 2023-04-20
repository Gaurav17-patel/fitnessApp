import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
  },
  inputText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 28,
  },
  gpsInput: {
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    height: dynamicSize(48),
    backgroundColor: '#FFFFFF',
    borderColor: Colors.border_color,
    flexDirection: 'row',
  },
  gpsPlaceholder: {
    fontFamily: Fonts.fontMedium,
    fontSize: dynamicSize(14),
    color: Colors.welcome_text
  },
  gpsView: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  inputStyle: {
    // padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    height: dynamicSize(48),
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontMedium,
    backgroundColor: Colors.role_BG_Color,
  },
  selectedInputStyle: {
    padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    height: dynamicSize(48),
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontMedium,
    backgroundColor: Colors.role_BG_Color,
    borderColor: Colors.forgot_psw,
  },
  selectedLabelText: {
    fontWeight: '600',
    marginTop: 28,
    fontSize: dynamicSize(14),
    color: Colors.forgot_psw,
  },
});
