import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {LabelText, CImage} from './index';
import DatePicker from 'react-native-date-picker';
import {Colors} from '../theme/colors';
import {dynamicSize, Fonts} from '../constant/index';

const CDateTimeDropDown = ({
  inputHeading,
  value,
  placeholder,
  downIcon,
  onPress,
  mode,
  openPicker,
  showDate,
  onConfirm,
  onCancel,
  datePlaceholder2,
  onDateChange,
  editable,
  onFocus,
  onBlur,
  ref,
  maximumDate,
  minimumDate,
  onFocusBtn
}) => {
  return (
    <>
      <LabelText label={inputHeading} labelStyle={styles.inputText} />
      <View style={styles.dateInput}>
        <View style={{width: '85%', justifyContent: 'center'}}>
          <TextInput
            placeholder={placeholder}
            value={value}
            placeholderTextColor={Colors.placeholder_color}
            style={[styles.datePlaceholder, datePlaceholder2]}
            onFocus={onFocus}
            onBlur={onBlur}
            editable={editable}
            ref={ref}
          />
        </View>
        <TouchableOpacity style={styles.dateView} onPress={onPress}>
          <CImage imgUrl={downIcon} style={{height: 8, width: 12}} />
        </TouchableOpacity>
        <DatePicker
          mode={mode}
          modal
          open={openPicker}
          date={showDate}
          onConfirm={onConfirm}
          onCancel={onCancel}
          onDateChange={onDateChange}
          maximumDate={maximumDate}
          minimumDate={minimumDate}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    marginTop: 28,
    color: Colors.input_Text_Color,
  },
  dateInput: {
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 1,
    height: dynamicSize(48),
    backgroundColor: '#FFFFFF',
    borderColor: Colors.border_color,
    flexDirection: 'row',
  },
  datePlaceholder: {
    fontFamily: Fonts.fontMedium,
    fontSize: dynamicSize(14),
    color: Colors.welcome_text,
  },
  dateView: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CDateTimeDropDown;
