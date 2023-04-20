import {StyleSheet} from 'react-native';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary_BG_Color,
  },
  headingStyle: {
    fontSize: dynamicSize(20),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  exerciseView: {flexDirection: 'row', width: '100%', marginTop: 28},
  exerciseHeaderStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  exerciseBodyText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontMedium,
    marginTop: 4,
  },
  btnStyle: {
    alignSelf: 'center',
    width: '20%',
    alignItems: 'flex-end',
  },
  btnTextStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontBold,
    color: '#EC7666',
  },
  needHelpText: {
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
    marginLeft: 8,
    fontSize: dynamicSize(16),
  },
  needHelpBtn: {
    borderWidth: 1,
    borderColor: Colors.forgot_psw,
    borderRadius: 6,
    marginTop: 40,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
