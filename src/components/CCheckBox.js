import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';
import {squareCheck, squareUncheck} from '../assets/index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';

const CCheckBox = ({
  value,
  onValueChange,
  showPlaceholder,
  onClick,
  isChecked,
  onChangeText,
  editable,
  keyboardType,
  maxLength
}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '10%'}}>
        {/* <CheckBox
    //     style={styles.checkBox}
    //     disabled={false}
    //     value={value}
    //     onCheckColor={'#FFFFFF'}
    //     onFillColor={'#00B4DD'}
    //     onTintColor={'#00B4DD'}
    //     animationDuration={0.2}
    //     lineWidth={1.5}
    //     boxType={'square'}
    //     onValueChange={onValueChange}
    //   /> */}
        <CheckBox
          style={{justifyContent: 'center'}}
          onClick={onClick}
          isChecked={isChecked}
          checkBoxColor="#00B4DD"
          uncheckedCheckBoxColor="#E3E4EF"
          checkedImage={
            <Image source={squareCheck} style={{height: 26, width: 26}} />
          }
          unCheckedImage={
            <Image source={squareUncheck} style={{height: 26, width: 26}} />
          }
        />
      </View>
      <View style={{width: '90%'}}>
        <TextInput
          placeholder={showPlaceholder}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={Colors.placeholder_color}
          style={styles.tiStyle}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: dynamicSize(48),
    alignItems: 'center',
    marginTop: 20,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.6,
    borderColor: '#00B4DD',
    marginTop: 25,
  },
  tiStyle: {
    paddingLeft: 10,
    // marginTop: 10,
    borderRadius: 6,
    borderWidth: 0.8,
    fontFamily: Fonts.fontRegular,
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    color: Colors.welcome_text,
    backgroundColor: '#FFFFFF',
    borderColor: Colors.border_color,
    justifyContent: 'center',
  },
});

export default CCheckBox;
