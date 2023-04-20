import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {dynamicSize} from '../constant/DynamicFontSize';
import {Colors} from '../theme/colors';
import {Fonts} from '../constant/Fonts';

const LabelText = ({label, labelStyle}) => {
  return <Text style={[styles.headerTextStyle, labelStyle]}>{label}</Text>;
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: dynamicSize(16),
    color: Colors.label_text,
  },
});

export default LabelText;
