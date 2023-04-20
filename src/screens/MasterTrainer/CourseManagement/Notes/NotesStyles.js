import {StyleSheet} from 'react-native';
import {Colors} from '../../../../theme/colors';
import {dynamicSize} from '../../../../constant/DynamicFontSize';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  container: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },
  boxTextStyle: {
    fontSize: dynamicSize(14),
    fontWeight: '600',
    color: '#4C545C',
  },
  flatListStyle: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  gridStyle: {
    flex: 1,
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
    margin: 8,
    backgroundColor: '#DAEAF8',
    borderRadius: 5,
  },
});
