import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  backgroundVideo: {
    backgroundColor: '#000',
    width: '100%',
    height: 250,
    overflow: 'visible',
  },
  headerText: {
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontBold,
    color: Colors.Header_Text_Color,
    letterSpacing: 0.12,
  },
  headerText2: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    marginTop: 7,
    color: Colors.white_color,
  },
  bestDatStyles: {
    paddingLeft: 6,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    color: '#CBD2D8',
  },
  videoExercise: {
    paddingLeft: 5,
  },
});
