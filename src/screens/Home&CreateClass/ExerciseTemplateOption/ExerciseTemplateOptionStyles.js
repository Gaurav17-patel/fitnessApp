import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    marginTop: 44,
  },
  boxStyle: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: Colors.Primary_BG_Color,
    alignItems: 'center',
  },
  createTempStyle: {fontFamily: Fonts.fontBold, color: Colors.welcome_text},
  BtnStyle: {
    marginTop: 20,
    height: 48,
    backgroundColor: Colors.role_BG_Color,
    borderWidth: 1,
    borderColor: Colors.border_color,
  },
  Fillview: {
    marginTop: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderView: {
    borderBottomWidth: 1,
    width: 60,
    alignSelf: 'center',
    borderColor: '#DEE7E7',
  },
  FillText: {
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontBold,
    textAlign: 'center',
    color: Colors.placeholder_color,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.6,
    borderColor: '#00B4DD',
  },
  NextBtnStyle: {
    height: 48,
    backgroundColor: Colors.btn_color,
  },
});
