import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant';
import {Colors} from '../../../theme/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  headerHeading: {
    fontSize: dynamicSize(18),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  priceStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  discountStyle: {
    paddingLeft: 6,
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontMedium,
    color: Colors.sub_process,
  },
  trackSuitStyle: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontMedium,
    color: Colors.sub_process,
  },
});
