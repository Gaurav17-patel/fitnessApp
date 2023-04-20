import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/index';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white_color,
  },
  detailsText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  headerScrollList: {
    fontFamily: Fonts.fontRegular,
    fontSize: dynamicSize(14)
  },
  saveBtnStyle: {
    // backgroundColor: '#BABDC0',
    backgroundColor: Colors.btn_color,
    height: dynamicSize(48),
    position: 'absolute',
    // top: 0,
    bottom: 40,
    width: '90%',
    alignSelf: 'center',
    // marginTop: 40,
    // marginBottom: 40,
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
});
