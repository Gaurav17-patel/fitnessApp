import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Colors} from '../theme/colors';
import {CImage, LabelText} from './index';
import {dynamicSize, Fonts} from '../constant/index';

const CSearchBar = ({
  onPress,
  backArrow,
  searchPlaceHolder,
  labelText,
  searchText,
  textInput,
  searchIcon,
  showSearchIcon,
  searchStyle,
  placeHolderColor,
  inputText,
  btn,
  icons,
  editPress,
  editableText,
  saveLabel,
  iconStyle,
  textStyle,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.searchView}>
      <TouchableOpacity onPress={onPress} style={{width: '8%'}}>
        <CImage imgUrl={backArrow} style={{height: 12, width: 12}} />
      </TouchableOpacity>
      <View style={{width: '75%'}}>
        {textInput ? (
          <TextInput
            placeholder={searchPlaceHolder}
            placeholderTextColor={placeHolderColor}
            style={[
              {
                fontSize: dynamicSize(18),
                fontFamily: Fonts.fontMedium,
                color: Colors.welcome_text,
              },
              searchStyle,
            ]}
            onChangeText={onChangeText}
            value={value}
          />
        ) : (
          <LabelText
            label={inputText}
            labelStyle={[
              {
                color: '#000000',
                fontSize: dynamicSize(18),
                fontFamily: Fonts.fontSemiBold,
              },
              textStyle,
            ]}
          />
        )}
      </View>
      {showSearchIcon && (
        <TouchableOpacity
          onPress={editPress}
          style={{width: '15%', alignItems: 'flex-end'}}>
          {icons && (
            <CImage
              imgUrl={searchIcon}
              style={[{height: 18, width: 18}, iconStyle]}
            />
          )}
          {btn && (
            <LabelText
              label={saveLabel ? 'Save' : 'Edit'}
              labelStyle={styles.editBtn}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1.2,
    justifyContent: 'space-between',
    borderColor: Colors.border_color,
  },
  editBtn: {
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    width: '100%',
    borderColor: Colors.selected_role_color,
    color: Colors.selected_role_color,
    fontFamily: Fonts.fontBold,
    fontSize: dynamicSize(14),
  },
});

export default CSearchBar;
