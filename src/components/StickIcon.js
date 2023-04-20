import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const StickIcon = ({icon, style}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={[styles.iconStyle, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  iconStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export default StickIcon;
