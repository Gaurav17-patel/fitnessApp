import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    marginTop: 44,
  },
  inputText: {
    marginTop: 28,
    fontSize: dynamicSize(12),
    color: Colors.welcome_text,
    fontFamily: Fonts.fontSemiBold,
  },
  gpsInput: {
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    height: dynamicSize(48),
    backgroundColor: '#FFFFFF',
    borderColor: Colors.border_color,
    flexDirection: 'row',
  },
  gpsPlaceholder: {
    fontFamily: Fonts.fontMedium,
    fontSize: dynamicSize(14),
    color: Colors.welcome_text,
  },
  gpsView: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  inputStyle: {
    // padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    height: dynamicSize(48),
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontMedium,
    backgroundColor: Colors.role_BG_Color,
    borderColor: Colors.border_color,
  },
  nextBtnStyle: {
    marginTop: 78,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  nextDisableBtnStyle: {
    marginTop: 78,
    height: 48,
    backgroundColor: 'gray',
  },
  nextBtnText: {
    fontFamily: Fonts.fontBold,
  },
  errMsg: {
    color: 'red',
    marginTop: 5,
    paddingLeft: 5,
  },
});
