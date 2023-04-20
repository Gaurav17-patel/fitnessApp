import {StyleSheet} from 'react-native';
import {Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/colors';
import {dynamicSize} from '../../../constant/DynamicFontSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  sliderText: {
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: dynamicSize(28),
    marginTop: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  nextBtn: {
    alignSelf: 'center',
    alignItems: 'center',
    width: dynamicSize(50),
    height: dynamicSize(50),
    justifyContent: 'center',
    marginTop: dynamicSize(15),
    marginBottom: dynamicSize(5),
    borderRadius: dynamicSize(6),
    backgroundColor: Colors.next_btn,
  },
  nextButtonStyle: {
    width: dynamicSize(22),
    height: dynamicSize(22),
  },
  activedotStyle: {
    width: dynamicSize(40),
    backgroundColor: Colors.selected_role_color,
  },
  normalDotStyle: {
    backgroundColor: Colors.selected_role_color,
  },
  sliderImageStyle: {
    borderRadius: 12,
    height: dynamicSize(498),
  },
  sliderImg: {
    width: '100%',
    height: '100%',
  },
});
