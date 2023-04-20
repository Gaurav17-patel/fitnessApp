import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
  },
  processView: {
    // marginTop: 10,
    padding: 20,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
  },
  headerText: {
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontBold,
    color: Colors.Header_Text_Color,
  },
  textStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.Detail_input_Text_Color,
  },
  expireDateStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.Detail_input_Text_Color,
  },
  expireDateStyle2: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontSemiBold,
    color: 'red',
  },
  indexNumber: {
    width: 25,
    height: 25,
    paddingTop: 2,
    borderRadius: 12,
    textAlign: 'center',
    borderWidth: 0.5,
  },
});
