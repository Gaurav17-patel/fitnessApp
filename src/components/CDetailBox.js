import {View, StyleSheet} from 'react-native';
import React from 'react';
import {LabelText, CImage} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';

const CDetailBox = ({
  mainViewStyle,
  numberIndex,
  label1,
  label2,
  arrowIcon,
  arrow,
}) => {
  return (
    <View style={mainViewStyle}>
      <View style={styles.processIndexView}>
        <LabelText label={numberIndex} labelStyle={styles.processIndex} />
      </View>
      <View
        style={{
          width: '82%',
          marginLeft: 12,
        }}>
        <LabelText label={label1} labelStyle={styles.processName} />
        <LabelText label={label2} labelStyle={styles.subProcess} />
      </View>
      {arrow && <CImage imgUrl={arrowIcon} style={{height: 12, width: 12}} />}
    </View>
  );
};

const styles = StyleSheet.create({
  processIndex: {
    color: '#799199',
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
  processName: {
    marginBottom: 5,
    fontFamily: Fonts.fontSemiBold,
    fontSize: dynamicSize(16),
    color: Colors.welcome_text,
  },
  subProcess: {
    fontFamily: Fonts.fontMedium,
    fontSize: dynamicSize(12),
    color: Colors.sub_process,
  },
});

export default CDetailBox;
