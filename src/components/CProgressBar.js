import {View, Text} from 'react-native';
import React from 'react';
import {ProgressBar} from 'react-native-paper';
import {Colors} from '../theme/colors';

const CProgressBar = ({progressStep, style, progressBarColor}) => {
  return (
    <ProgressBar
      progress={progressStep}
      color={progressBarColor}
      style={[style, {backgroundColor: Colors.ProgessBar_BG_Color}]}
    />
  );
};

export default CProgressBar;
