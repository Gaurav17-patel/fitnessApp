import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/index';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
  headerText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.Detail_input_Text_Color,
  },
  bestDatStyles: {
    paddingLeft: 6,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.Detail_input_Text_Color,
  },
  headerText2: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    marginTop: 7,
    color: Colors.welcome_text,
  },
  footerText2: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    marginTop: 7,
    color: Colors.welcome_text,
  },
  addExercise: {
    fontSize: dynamicSize(12),
    fontWeight: 'bold',
    color: '#00B4DD',
    paddingLeft: 12,
  },
  saveBtnStyle: {
    backgroundColor: '#BABDC0',
    height: dynamicSize(48),
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  btnText: {
    fontSize: dynamicSize(16),
    fontWeight: 'bold',
  },
});
