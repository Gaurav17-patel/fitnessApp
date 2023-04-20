import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {CHomeClassHeader, CResources} from '../../../components/index';
import styles from './MarketingToolkitStyles';
import {userTag, shoppingBag, play, arrowRight} from '../../../assets/index';
import {useState} from 'react';

const MarketingToolkit = ({navigation}) => {
  const [toolkit, setToolkit] = useState([
    {
      icon: userTag,
      heading: 'Social Media Assets',
      bodyText:
        'Flyer, brochure, business template, and even promotion templates',
      next: arrowRight,
    },
    {
      icon: play,
      heading: 'Video Library',
      bodyText: 'All training videos from stickfit including all the exercises',
      next: arrowRight,
    },
    {
      icon: shoppingBag,
      heading: 'Purchase Merchandise',
      bodyText:
        'Buy our merchandise such as t-shit, hoodies with stickfit logo',
      next: arrowRight,
    },
  ]);

  const gotoNext = index => {
    if (index === 0) {
      navigation.navigate('SocialMediaAssets');
    } else if (index === 1) {
      navigation.navigate('VideoLibrary');
    } else if (index === 2) {
      // navigation.navigate('MerchandiseList');
      console.log('Merchindise');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CHomeClassHeader
        headerText={'Marketing Toolkit'}
        bodyText={'Helpful marketing resources'}
      />
      <View style={{padding: 15}}>
        {toolkit.map((item, index) => (
          <View key={index}>
            <CResources
              onPress={() => gotoNext(index)}
              footerStyle={{padding: 24}}
              imageUrl={item.icon}
              headerText={item.heading}
              bodyText={item.bodyText}
              NextArrow={true}
              arrowImg={item.next}
              imgStyles={{width: 26, height: 26}}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MarketingToolkit;
