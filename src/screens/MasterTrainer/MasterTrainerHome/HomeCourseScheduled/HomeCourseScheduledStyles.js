import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: Colors.Primary_BG_Color,
    backgroundColor: '#E8E8E8',
  },
  container: {
    flex: 1,
    marginTop: 25,
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
  timeStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontMedium,
    marginTop: 2,
    color: '#283452',
  },
  createClass: {
    marginTop: 40,
    height: 48,
    backgroundColor: Colors.btn_color,
  },
});
