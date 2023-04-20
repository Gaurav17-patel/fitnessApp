import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/colors';
import {dynamicSize} from '../../../constant/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    flex: 1,
    marginTop: 25,
  },
  detailsText: {
    fontSize: dynamicSize(12),
    fontWeight: 'normal',
    color: Colors.Header_Text_Color,
  },
  detailsBtn: {
    fontSize: dynamicSize(12),
    fontWeight: 'bold',
    color: '#00B4DD',
  },
  inputText: {
    fontSize: dynamicSize(12),
    fontWeight: '600',
    marginTop: 28,
    color: Colors.welcome_text,
  },
  gpsInput: {
    padding: 5,
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
    fontWeight: '500',
    fontSize: dynamicSize(14),
  },
  gpsView: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  inputStyle: {
    padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    height: dynamicSize(48),
    fontSize: dynamicSize(14),
    fontWeight: '500',
    backgroundColor: Colors.role_BG_Color,
    borderColor: Colors.border_color,
  },
  nextBtnStyle: {
    marginTop: 40,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
  progressHeader: {
    marginTop: 21,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.6,
    borderColor: '#00B4DD',
  },
});
