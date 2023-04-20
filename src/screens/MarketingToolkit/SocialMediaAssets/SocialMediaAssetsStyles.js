import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  bodyTextStyle: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontMedium,
    color: Colors.sub_process,
    marginTop: 4,
  },
});
