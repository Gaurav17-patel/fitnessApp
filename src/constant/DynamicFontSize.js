import React from 'react';
import {Dimensions, PixelRatio, Platform} from 'react-native';

// const { height, width } = Dimensions.get('window')

// export const dynamicSize = (size) => {
//     const percentage = (size / 850) * 100
//     return (percentage * height) / 100
// }

// export const screenWidth = width

const {height, width} = Dimensions.get('window');

const guidelineBaseWidth = 375;

export const horizontalScale = size => (width / guidelineBaseWidth) * size;

export function dynamicSize(size) {
  let newSize = horizontalScale(size);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}

// export function getLineHeight(fontSize) {
//     const multiplier = (fontSize > 20) ? 1.5 : 1;
//     return parseInt(fontSize + (fontSize * multiplier), 10);
//   }
