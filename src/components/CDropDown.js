import {Text, View} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../theme/colors';
import {dynamicSize, Fonts} from '../constant';

const CDropDown = ({
  openPicker,
  pickerValue,
  pickerItems,
  placeHolder,
  setOpenPicker,
  setPickerValue,
  setPickerItems,
  placeHolderTextColor,
  dropdownStyle,
  onPress,
}) => {
  return (
    <DropDownPicker
      open={openPicker}
      value={pickerValue}
      items={pickerItems}
      placeholder={placeHolder}
      placeholderStyle={[
        {color: Colors.placeholder_color},
        placeHolderTextColor,
      ]}
      mode="BADGE"
      autoScroll={true}
      setOpen={setOpenPicker}
      setValue={setPickerValue}
      setItems={setPickerItems}
      style={[
        {
          borderColor: Colors.border_color,
          marginTop: 10,
          height: dynamicSize(48),
          borderRadius: 6,
        },
        dropdownStyle,
      ]}
      dropDownContainerStyle={{
        borderColor: Colors.border_color,
        borderWidth: 1,
      }}
      textStyle={{fontSize: dynamicSize(16), fontFamily: Fonts.fontMedium}}
      listMode="SCROLLVIEW"
      onPress={onPress}
      dropDownDirection='BOTTOM'
    />
  );
};

export default CDropDown;
