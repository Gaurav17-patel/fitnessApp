import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {CImage} from '.';
import LabelText from './LabelText';
import CImage from './CImage';

const CContentBox = ({inedxID}) => {
  return (
    <View>
      <View style={styles.processIndexView}>
        {inedxID ? (
          <LabelText label={itemID} labelStyle={itemStyle} />
        ) : (
          <CImage imgUrl={imageUrl} style={imageStyle} />
        )}
      </View>
      <View
        style={{
          width: '82%',
          marginLeft: 12,
        }}>
        <LabelText label={item.processName} labelStyle={styles.processName} />
        <LabelText label={item.processDesc} labelStyle={styles.subProcess} />
      </View>
    </View>
  );
};

export default CContentBox;
