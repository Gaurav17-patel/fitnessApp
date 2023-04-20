import {StyleSheet} from 'react-native';
import {Colors} from '../../../../theme/colors';
import {dynamicSize} from '../../../../constant/DynamicFontSize';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  imgStyle: {
      backgroundColor: 'red',
      alignSelf: 'center',
      width: '100%',
      height: '50%'
  }
});
