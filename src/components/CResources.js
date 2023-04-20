import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import {LabelText, CImage} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';

const CResources = ({
  style,
  footerText,
  titleText,
  imageUrl,
  headerText,
  timeLable,
  timeText,
  timeStyles,
  bodyText,
  arrowImg,
  imgStyles,
  NextArrow,
  dateText,
  dateLable,
  footerStyle,
  onPress,
  disabled,
}) => {
  return (
    <View style={style}>
      {footerText && (
        <LabelText label={titleText} labelStyle={styles.footerText} />
      )}
      <TouchableOpacity
        style={[styles.footerView, styles.shadow, footerStyle]}
        onPress={onPress}
        disabled={disabled}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CImage
            imgUrl={imageUrl}
            style={[{height: 24, width: 24}, imgStyles]}
          />
          <View style={styles.exerciseView}>
            <LabelText
              label={headerText}
              labelStyle={styles.exerciseHeaderStyle}
            />
            {timeLable && (
              <View style={{flexDirection: 'row', marginTop: 6}}>
                {dateLable && (
                  <View
                    style={{
                      backgroundColor: Colors.ProgressBar_Line_Color,
                      alignSelf: 'center',
                      marginRight: 6,
                      padding: 3,
                      borderRadius: 5,
                    }}>
                    <LabelText
                      label={dateText}
                      labelStyle={styles.dateStyles}
                    />
                  </View>
                )}
                <LabelText label={timeText} labelStyle={timeStyles} />
              </View>
            )}
            <LabelText label={bodyText} labelStyle={styles.exerciseBodyText} />
          </View>
          <View style={{marginLeft: 5}}>
            {NextArrow && (
              <CImage imgUrl={arrowImg} style={{height: 12, width: 12}} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: dynamicSize(20),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
    marginTop: 48,
  },
  footerView: {
    // padding: 24,
    marginTop: 16,
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  exerciseView: {
    paddingLeft: 18,
    width: '85%',
  },
  exerciseHeaderStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  exerciseBodyText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    marginTop: 4,
  },
  dateStyles: {
    color: Colors.role_BG_Color,
    fontSize: dynamicSize(13),
    fontFamily: Fonts.fontRegular,
  },
});

export default CResources;
