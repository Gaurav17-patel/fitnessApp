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
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0.0,
    shadowOpacity: 0.0,
    elevation: 0,
  },
  processView: {
    padding: 20,
    marginTop: 20,
    width: '99%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center'
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  timeStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontRegular,
    marginTop: 2,
    color: '#283452',
  },
});
