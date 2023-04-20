import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, btnText} from 'react-native';
import {dynamicSize} from '../constant/DynamicFontSize';

const CButton = ({style, btnText, btnOnPress, btnTextStyle, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.btnStyle, style]}
      onPress={btnOnPress}
      disabled={disabled}>
      <Text
        style={[{color: '#ffffff', fontSize: dynamicSize(16)}, btnTextStyle]}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CButton;
