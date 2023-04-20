import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {dynamicSize} from '../constant/DynamicFontSize';
import {Colors} from '../theme/colors';
import {SelectedCheckBox} from '../assets/index';

const RolesBox = ({
  style,
  prefix,
  roleName,
  aboutRole,
  selected,
  onPress,
  uniqueKey,
}) => {
  return (
      <TouchableOpacity
        style={[
          styles.container,
          style,
          {
            borderColor: selected
              ? Colors.selected_role_color
              : Colors.deselected_role_color,
          },
        ]}
        activeOpacity={0.5}
        onPress={onPress}>
        <View style={{width: '60%'}}>
          <Text
            style={{
              fontSize: dynamicSize(16),
              color: selected
                ? Colors.selected_role_color
                : Colors.welcome_text,
            }}>
            {prefix} <Text style={{fontWeight: 'bold'}}>{roleName}</Text>
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: dynamicSize(12),
              color: Colors.welcome_text,
            }}>
            {aboutRole}
          </Text>
        </View>
        {selected && (
          <View style={{width: '40%', alignItems: 'flex-end'}}>
            <Image
              source={SelectedCheckBox}
              style={{height: 25, width: 25}}
              resizeMode="contain"
            />
          </View>
        )}
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: 112,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.role_BG_Color,
  },
});

export default RolesBox;
