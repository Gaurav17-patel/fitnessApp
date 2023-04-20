import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './SocialMediaAssetsStyles';
import {CSearchBar, LabelText, CImage} from '../../../components/index';
import {BackArrow, arrowRight} from '../../../assets/index';
import { Colors } from '../../../theme/colors';

const SocialMediaAssets = ({navigation}) => {
  const [mediaAsset, setMediaAsset] = useState([
    {heading: 'Flyers & Brochures', bodyText: 'Name, date, time, and charges'},
    {heading: 'Business Templates', bodyText: 'Venue address'},
    {heading: 'Event Promo Template', bodyText: 'Exercise videos and music'},
  ]);

  const gotoNextScreen = index => {
    if (index === 0) {
      navigation.navigate('Brochures');
    } else {
      console.log('Hello');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Social Media Assets'}
      />
      <View style={{marginTop: 10}} />
      {mediaAsset.map((item, index) => (
        <>
          <TouchableOpacity
            style={styles.container}
            onPress={() => gotoNextScreen(index)}>
            <View>
              <LabelText
                label={item.heading}
                labelStyle={styles.headingStyle}
              />
              <LabelText
                label={item.bodyText}
                labelStyle={styles.bodyTextStyle}
              />
            </View>
            <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
          </TouchableOpacity>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              borderBottomWidth: mediaAsset.length - 1 === index ? 0 : 0.8,
              borderColor: Colors.border_color,
            }}
          />
        </>
      ))}
    </SafeAreaView>
  );
};

export default SocialMediaAssets;
