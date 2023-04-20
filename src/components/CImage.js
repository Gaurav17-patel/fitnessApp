import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const CImage = ({imgUrl, style}) => {
  return (
    <Image
      source={imgUrl}
      style={[styles.imgStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
  },
});

export default CImage;
