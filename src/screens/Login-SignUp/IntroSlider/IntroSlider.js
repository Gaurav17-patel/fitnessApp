import React from 'react';
import styles from './IntroSliderStyles';
import {LabelText} from '../../../components/index';
import {dynamicSize} from '../../../constant/DynamicFontSize';
import AppIntroSlider from 'react-native-app-intro-slider-custom';
import {SliderImage01, ForwardArrow} from '../../../assets/index';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
];

const IntroSlider = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={{padding: dynamicSize(15)}}>
      <View style={styles.sliderImageStyle}>
        <Image
          source={SliderImage01}
          style={styles.sliderImg}
          resizeMode="contain"
        />
      </View>
      <LabelText
        label={'Challenge your Brain, and your Body'}
        labelStyle={styles.sliderText}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        data={slides}
        showNextButton={false}
        renderItem={renderItem}
        dotStyle={styles.normalDotStyle}
        activeDotStyle={styles.activedotStyle}
      />
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('Login')}>
        <Image
          resizeMode="contain"
          source={ForwardArrow}
          style={styles.nextButtonStyle}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroSlider;
