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
  userNameText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 25,
    color: Colors.Detail_input_heading,
  },
  inputStyle: {
    borderWidth: 0,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontMedium,
    backgroundColor: Colors.Detail_input_Color,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileView: {
    borderRadius: 42,
    width: 84,
    height: 84,
    backgroundColor: Colors.role_BG_Color,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border_color,
  },
  profileText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
    paddingLeft: 20,
  },
  BioData: {
    borderWidth: 0,
    backgroundColor: Colors.Detail_input_Color,
    marginTop: 8,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontRegular,
    height: dynamicSize(100),
  },
});
