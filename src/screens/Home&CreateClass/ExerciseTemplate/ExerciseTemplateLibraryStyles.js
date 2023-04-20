import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/index';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white_color,
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F9F9',
  },
  headerText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.ProgressBar_Line_Color,
  },
  headerText2: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    marginTop: 7,
    color: Colors.welcome_text,
  },
  footerText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: '#EC7666',
  },
  footerText2: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    marginTop: 7,
    color: Colors.welcome_text,
  },
  addExercise: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
    paddingLeft: 12,
  },
  disableAddExercise: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: 'gray',
    paddingLeft: 12,
  },
  saveBtnStyle: {
    // backgroundColor: '#BABDC0',
    backgroundColor: Colors.btn_color,
    height: dynamicSize(48),
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  disableSaveBtnStyle: {
    backgroundColor: '#BABDC0',
    height: dynamicSize(48),
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  btnText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
  },
  chooseSong: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.forgot_psw,
    paddingLeft: 8,
  },
  disableChooseSong: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    color: 'gray',
    paddingLeft: 8,
  },
});
