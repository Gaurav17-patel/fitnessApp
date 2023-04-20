import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  directionView: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  detailsIcon: {
    backgroundColor: Colors.Detail_input_Color,
    width: 35,
    height: 35,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsName: {
    paddingLeft: 18,
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  nextBtn: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtn: {
    marginTop: 48,
    backgroundColor: '#EC7666',
    padding: 18,
    width: '35%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.white_color,
    paddingLeft: 10,
  },
  footerText: {
    fontSize: dynamicSize(10),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  footerTextDate: {
    fontSize: dynamicSize(13),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.sub_process,
  },

  MTrainerBtn: {
    backgroundColor: '#EC7666',
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
  },
  MTrainerText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.white_color,
  },
});
