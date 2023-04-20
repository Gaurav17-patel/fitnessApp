import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize, Fonts} from '../../../constant/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  headerText: {
    // fontWeight: 'bold',
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(24),
    color: Colors.welcome_text,
  },
  subHeader: {
    marginTop: 10,
    // fontWeight: '500',
    fontFamily: Fonts.fontMedium,
    fontSize: dynamicSize(14),
    color: Colors.label_text,
  },
  processView: {
    padding: 24,
    marginTop: 32,
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  processIndex: {
    color: '#799199',
    // fontWeight: 'bold',
    fontFamily: Fonts.fontBold,
    textAlign: 'center',
    fontSize: dynamicSize(12),
  },
  processIndexView: {
    borderRadius: 14,
    backgroundColor: Colors.index_Bg_color,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  TextDetails: {
    fontWeight: 'bold',
    fontSize: dynamicSize(16),
    color: '#091D2F',
    position: 'absolute',
  },
  TextBody: {
    fontSize: dynamicSize(12),
  },
  processName: {
    marginBottom: 5,
    // fontWeight: '600',
    fontFamily: Fonts.fontSemiBold,
    fontSize: dynamicSize(16),
    color: Colors.welcome_text,
  },
  subProcess: {
    // fontWeight: '500',
    fontFamily: Fonts.fontMedium,
    fontSize: dynamicSize(12),
    color: Colors.sub_process,
  },
  startBtnText: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold
  },
  startBtnStyle: {
    height: 48,
    backgroundColor: Colors.btn_color,
  },
});
