import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {LabelText} from './index';
import {dynamicSize} from '../constant/index';
import {Colors} from '../theme/colors';
import { Fonts } from '../constant/Fonts';

const CPolicyText = ({
  labelOne,
  labelTwo,
  labelThree,
  labelFour,
  labelFive,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <LabelText
        label={labelOne}
        labelStyle={[styles.detailsText, {paddingLeft: 12}]}
      />
      <TouchableOpacity>
        <LabelText label={labelTwo} labelStyle={styles.detailsBtn} />
      </TouchableOpacity>
      <LabelText label={labelThree} labelStyle={styles.detailsText} />
      <TouchableOpacity>
        <LabelText label={labelFour} labelStyle={styles.detailsBtn} />
      </TouchableOpacity>
      <LabelText label={labelFive} labelStyle={styles.detailsText} />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.Header_Text_Color,
  },
  detailsBtn: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: '#00B4DD',
  },
});

export default CPolicyText;
