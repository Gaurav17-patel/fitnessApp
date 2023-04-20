import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  headerText: {
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontBold,
    color: Colors.Header_Text_Color,
  },
  publishClass: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
    marginBottom: 4,
  },
  publishClassDetail: {
    fontSize: dynamicSize(11),
    fontFamily: Fonts.fontMedium,
    color: Colors.sub_process,
  },
  logoutBtn: {
    marginTop: 48,
    backgroundColor: '#EC7666',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.white_color,
    paddingLeft: 10,
  },
});
