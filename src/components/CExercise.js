import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import {LabelText, CImage} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';
import {checkRight, unchecked} from '../assets/index';

const CExercise = ({
  style,
  imageUrl,
  exerciseName,
  exerciseTime,
  value,
  onValueChange,
  isCheckBox,
  arrowImg,
  onClick,
  isChecked,
  imgStyle,
  isPath,
}) => {
  return (
    <View style={[styles.listView, style]}>
      <View style={{width: '30%', alignItems: 'center'}}>
        {isPath ? (
          <CImage imgUrl={imageUrl} style={[{height: 90, width: 100}]} />
        ) : (
          <Image
            resizeMode="cover"
            source={{uri: imageUrl}}
            style={{height: 60, width: 100, borderRadius: 5}}
          />
        )}
      </View>
      <View style={{width: '60%', paddingLeft: 15, padding: 10}}>
        <Text
          style={{
            fontSize: dynamicSize(16),
            fontFamily: Fonts.fontSemiBold,
            color: Colors.welcome_text,
          }}>
          {exerciseName}
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontSize: dynamicSize(12),
            fontFamily: Fonts.fontRegular,
            color: Colors.sub_process,
          }}>
          {exerciseTime}
        </Text>
      </View>
      <View style={{width: '10%', alignSelf: 'center'}}>
        {isCheckBox ? (
          // <CheckBox
          //   disabled={false}
          //   value={value}
          //   onCheckColor={'#FFFFFF'}
          //   onFillColor={'#00B4DD'}
          //   onTintColor={'#00B4DD'}
          //   animationDuration={0.2}
          //   lineWidth={1.2}
          //   boxType={'circle'}
          //   onValueChange={onValueChange}
          // />
          <CheckBox
            onClick={onClick}
            isChecked={isChecked}
            checkBoxColor="#00B4DD"
            uncheckedCheckBoxColor="#E3E4EF"
            checkedImage={
              <Image source={checkRight} style={{height: 26, width: 26}} />
            }
            unCheckedImage={
              <Image source={unchecked} style={{height: 26, width: 26}} />
            }
          />
        ) : (
          <CImage
            imgUrl={arrowImg}
            style={[{height: 12, width: 30}, imgStyle]}
          />
        )}
      </View>
    </View>
    // <View style={[styles.footerView]}>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       alignItems: 'center',
    //       backgroundColor: 'red',
    //     }}>
    //     <CImage
    //   imgUrl={imageUrl}
    //   style={[{height: 80, width: 80}, imgStyles]}
    //     />
    //     <View style={styles.exerciseView}>
    //       <LabelText
    //         label={headerText}
    //         labelStyle={styles.exerciseHeaderStyle}
    //       />
    //       <LabelText label={bodyText} labelStyle={styles.exerciseBodyText} />
    //     </View>
    //     <CImage imgUrl={arrowImg} style={{height: 12, width: 12}} />
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
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  //   footerText: {
  //     fontSize: dynamicSize(20),
  //     fontWeight: 'bold',
  //     color: Colors.welcome_text,
  //     marginTop: 48,
  //   },
  //   footerView: {
  //     // padding: 24,
  //     // marginTop: 16,
  //     width: '100%',
  //     height: 'auto',
  //     borderRadius: 8,
  //     alignItems: 'center',
  //   },
  //   shadow: {
  //     shadowOffset: {
  //       width: 0,
  //       height: 0,
  //     },
  //     shadowRadius: 1,
  //     shadowOpacity: 0.2,
  //     elevation: 5,
  //   },
  //   exerciseView: {
  //     paddingLeft: 18,
  //     width: '90%',
  //   },
  //   exerciseHeaderStyle: {
  //     fontSize: dynamicSize(16),
  //     fontWeight: 'bold',
  //     color: Colors.welcome_text,
  //   },
  //   exerciseBodyText: {
  //     fontSize: dynamicSize(12),
  //     fontWeight: 'normal',
  //     marginTop: 4,
  //   },
  //   checkBox: {
  //     width: 20,
  //     height: 20,
  //     borderWidth: 0.6,
  //     borderColor: '#00B4DD',
  //   },
  listView: {
    flexDirection: 'row',
  },
});

export default CExercise;
