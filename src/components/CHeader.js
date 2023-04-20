import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {CImage, LabelText, CProgressBar} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';
import {BackArrow} from '../assets/index';

const CHeader = ({
  backPress,
  headerText,
  bodyText,
  progressBarStep,
  progressStyle,
  progressBarLineColor,
  style,
}) => {
  return (
    <View style={style}>
      <TouchableOpacity style={{paddingLeft: 15}} onPress={backPress}>
        <CImage imgUrl={BackArrow} style={{height: 12, width: 12}} />
      </TouchableOpacity>
      <View style={{marginTop: 31, paddingLeft: 15}}>
        <LabelText label={headerText} labelStyle={styles.headerText} />
        <LabelText label={bodyText} labelStyle={styles.bodyText} />
      </View>
      <CProgressBar
        progressStep={progressBarStep}
        style={[progressStyle]}
        progressBarColor={progressBarLineColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: dynamicSize(24),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  bodyText: {
    marginTop: 10,
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontMedium,
    color: Colors.label_text,
  },
});

export default CHeader;
