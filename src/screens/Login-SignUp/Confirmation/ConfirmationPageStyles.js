import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedBtnStyle: {
    height: 48,
    width: '90%',
    alignSelf: 'center',
    marginBottom: dynamicSize(40),
    backgroundColor: Colors.btn_color,
  },
  btnTextStyle: {
    color: '#FFFFFF',
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(16),
  },
  headerTextStyle: {
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(26),
    color: Colors.darkest_blue,
  },
  headerSubText: {
    textAlign: 'center',
    color: Colors.label_text,
    fontSize: dynamicSize(14),
    marginTop: dynamicSize(16),
    fontFamily: Fonts.fontRegular
  },
  subheaderSubText: {
    textAlign: 'center',
    color: Colors.welcome_text,
    fontSize: dynamicSize(14),
    marginTop: dynamicSize(16),
    width: "70%",
    fontFamily: Fonts.fontMedium
  },
  confirmationLogo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
    marginBottom: dynamicSize(40),
  },
});
