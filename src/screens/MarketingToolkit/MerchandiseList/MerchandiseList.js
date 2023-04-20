import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './MerchandiseListStyles';
import {CSearchBar, CImage, LabelText} from '../../../components/index';
import {
  Search,
  BackArrow,
  arrowRight,
  TrackSuit1,
  TShirt,
  Women,
  Men,
} from '../../../assets/index';
import {Fonts} from '../../../constant';

const MerchandiseList = ({navigation}) => {
  const [trackSuit, setTrackSuit] = useState([
    {
      name: 'Navy Blue Track Suit',
      price: '$249.67',
      discount: '$299',
      img: TrackSuit1,
      tshirt: TShirt,
    },
    {
      name: 'Back & White Men Track Suit',
      price: '$186.23',
      img: TrackSuit1,
      tshirt: TShirt,
    },
    {
      name: 'Navy Blue Track Suit',
      price: '$249.67',
      discount: '$299',
      img: TrackSuit1,
      tshirt: TShirt,
    },
    {
      name: 'Back & White Men Track Suit',
      price: '$186.23',
      img: TrackSuit1,
      tshirt: TShirt,
    },
  ]);

  const navigateToNext = index => {
    if (index === 0) {
      navigation.navigate('MerchandiseDetails');
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        icons={true}
        searchIcon={Search}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Merchandise'}
      />
      <ScrollView
        style={{padding: 20, marginTop: 8}}
        contentContainerStyle={{paddingBottom: 80}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <LabelText label={'Track Suit'} labelStyle={styles.headerHeading} />
          <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
        </View>
        <FlatList
          data={trackSuit}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          // style={{margin: 10}}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{marginRight: 15, marginTop: 20}}
                onPress={() => navigateToNext(index)}>
                <CImage imgUrl={item.img} style={{width: 230, height: 280}} />
                <View
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                  }}>
                  <CImage imgUrl={Women} style={{width: 40, height: 24}} />
                </View>
                <View style={{flexDirection: 'row', marginTop: 12}}>
                  <LabelText
                    label={item.price}
                    labelStyle={styles.priceStyle}
                  />
                  <LabelText
                    label={item.discount}
                    labelStyle={styles.discountStyle}
                  />
                </View>
                <LabelText
                  label={item.name}
                  labelStyle={styles.trackSuitStyle}
                />
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 56,
          }}>
          <LabelText label={'T-Shirts'} labelStyle={styles.headerHeading} />
          <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
        </View>
        <FlatList
          data={trackSuit}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{marginRight: 15, marginTop: 20}}>
                <CImage
                  imgUrl={item.tshirt}
                  style={{width: 230, height: 210}}
                />
                <View
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 15,
                  }}>
                  <CImage imgUrl={Men} style={{width: 40, height: 24}} />
                </View>
                <View style={{flexDirection: 'row', marginTop: 12}}>
                  <LabelText
                    label={item.price}
                    labelStyle={styles.priceStyle}
                  />
                  <LabelText
                    label={item.discount}
                    labelStyle={styles.discountStyle}
                  />
                </View>
                <LabelText
                  label={item.name}
                  labelStyle={styles.trackSuitStyle}
                />
              </View>
            );
          }}
        />
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 56,
          }}>
          <LabelText label={'T-Shirts'} labelStyle={styles.headerHeading} />
          <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
        </View>
        <FlatList
          data={trackSuit}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{marginRight: 15}}>
                <CImage imgUrl={item.tshirt} style={{width: 230, height: 280}} />
                <View style={{flexDirection: 'row', marginTop: 12}}>
                  <LabelText
                    label={item.price}
                    labelStyle={styles.priceStyle}
                  />
                  <LabelText
                    label={item.discount}
                    labelStyle={styles.discountStyle}
                  />
                </View>
                <LabelText
                  label={item.name}
                  labelStyle={styles.trackSuitStyle}
                />
              </View>
            );
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchandiseList;
