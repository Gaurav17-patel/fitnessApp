import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {dynamicSize, Fonts} from '../constant/index';
import LabelText from './LabelText';
import {Colors} from '../theme/colors';

const CInput = props => {
  const {
    label,
    mt,
    value,
    showPlaceholder,
    style,
    secureTextEntry,
    labelTextStyle,
    inputStyle,
    placeholderColor,
    selectedInput,
    onFocus,
    onBlur,
    editable,
    errorMessage,
    ref,
    keyboardType,
    maxLength,
  } = props;
  return (
    <View style={[{marginTop: mt}, style]}>
      <LabelText
        label={label}
        labelStyle={[styles.labelText, labelTextStyle]}
      />
      <TextInput
        {...props}
        placeholder={showPlaceholder ? showPlaceholder : ''}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        // placeholderTextColor={Colors.placeholder_color}
        placeholderTextColor={placeholderColor}
        // style={!value ? [styles.tiStyle, inputStyle] : selectedInput}
        style={[styles.tiStyle, inputStyle]}
        onFocus={onFocus}
        onBlur={onBlur}
        scrollEnabled={false}
        value={value}
        editable={editable}
        ref={ref}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {errorMessage && errorMessage != undefined ? (
        <Text style={{color: 'red', marginTop: 5, paddingLeft: 5}}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  tiStyle: {
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 0.8,
    fontFamily: Fonts.fontRegular,
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    color: Colors.welcome_text,
    backgroundColor: Colors.white_color,
    borderColor: Colors.border_color,
  },
  labelText: {
    fontFamily: Fonts.fontSemiBold,
    fontSize: dynamicSize(14),
    color: Colors.welcome_text,
  },
});

export default CInput;
