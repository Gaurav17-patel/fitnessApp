import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {LabelText, CImage} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';
import {squareCheck, squareUncheck, play} from '../assets/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const CTemplate = ({
  style,
  imageUrl,
  headerText,
  bodyText,
  arrowImg,
  imgStyles,
  value,
  onValueChange,
  checkBox,
  onClick,
  isChecked,
  playSound,
  playIcon,
  onPress,
  selectedIndex,
  playProgress,
  index,
}) => {
  // const [icon, setIcon] = useState(playIcon);
  // useEffect(() => {
  //   setIcon(playIcon);
  // }, [playIcon]);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.footerView}>
        <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
          <CImage
            imgUrl={imageUrl}
            style={[{height: 24, width: 24}, imgStyles]}
          />
          <View style={styles.exerciseView}>
            <LabelText
              label={headerText}
              labelStyle={styles.exerciseHeaderStyle}
            />
            <LabelText label={bodyText} labelStyle={styles.exerciseBodyText} />
          </View>
          {playSound ? (
            <Pressable
              disabled={selectedIndex >= 0 && selectedIndex !== index}
              onPress={onPress}>
              <AnimatedCircularProgress
                duration={900}
                arcSweepAngle={360}
                size={35}
                padding={1}
                width={2.5}
                fill={
                  selectedIndex === index && playProgress >= 0
                    ? playProgress
                    : 0
                }
                rotation={0}
                tintColor={Colors.blueTextColor}
                lineCap={'round'}
                backgroundColor="#CFF9ED">
                {(fill) => (
                  <CImage imgUrl={playIcon} style={{ height: 15, width: 15 }} />
                )}
              </AnimatedCircularProgress>
            </Pressable>
            // <TouchableOpacity
            //   onPress={onPress}
            //   style={{
            //     borderRadius: 15,
            //     borderWidth: 1,
            //     padding: 5,
            //     borderColor: Colors.placeholder_color,
            //   }}>
            //   <CImage imgUrl={playIcon} style={{height: 15, width: 15}} />
            // </TouchableOpacity>
          ) : (
            <CImage imgUrl={arrowImg} style={{height: 12, width: 12}} />
          )}
          {checkBox && (
            // <CheckBox
            //   style={styles.checkBox}
            //   disabled={false}
            //   value={value}
            //   onCheckColor={'#FFFFFF'}
            //   onFillColor={'#00B4DD'}
            //   onTintColor={'#00B4DD'}
            //   animationDuration={0.2}
            //   lineWidth={1.5}
            //   boxType={'square'}
            //   onValueChange={onValueChange}
            // />
            <CheckBox
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
          )}
        </View>
      </View>
    </View>
  );
};

CTemplate.defaultProps = {
  selectedIndex: -1,
  playProgress: -1,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  footerView: {
    padding: 20,
    // marginTop: 16,
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    alignItems: 'center',
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
    flex: 1,
  },
  exerciseHeaderStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  exerciseBodyText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontMedium,
    marginTop: 4,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.6,
    borderColor: '#00B4DD',
  },
});

export default CTemplate;
