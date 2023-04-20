import {StyleSheet} from 'react-native';
import {Fonts, dynamicSize} from '../../../constant/index';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainHeading: {
    fontSize: dynamicSize(24),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
    width: '70%',
  },
  priceStyles: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    color: '#61D173',
  },
  detailStyle: {
    marginTop: 10,
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontRegular,
    color: Colors.sub_process,
  },
  chooseSize: {
    marginTop: 28,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.placeholder_color,
  },
  headerScrollList: {
    fontFamily: Fonts.fontMedium,
    fontSize: dynamicSize(14),
    textAlign: 'center',
    color: Colors.label_text,
  },
  nextBtnText: {
    fontFamily: Fonts.fontBold,
    color: Colors.white_color,
    fontSize: dynamicSize(16),
    paddingLeft: 12,
    textAlign: 'center',
  },
  nextBtnStyle: {
    marginTop: 32,
    height: 48,
    backgroundColor: Colors.btn_color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
