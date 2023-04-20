import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {CButton, LabelText, CImage} from '../../../components/index';
import {
  TrackSuit2,
  TrackSuit1,
  Women,
  Men,
  BackArrow,
  cartIcon,
} from '../../../assets/index';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './MerchandiseDetailsStyles';
import {Colors} from '../../../theme/colors';
import {Add_item} from '../../../utils/AsyncStorage';

const MerchandiseDetails = ({navigation}) => {
  const [slider, setSlider] = useState([TrackSuit2, TrackSuit1]);
  const [selectSize, setSelectSize] = useState([
    {
      select: 'S',
      selected: false,
    },
    {select: 'M', selected: false},
    {select: 'L', selected: false},
    {select: 'XL', selected: false},
  ]);

  const onSelectExercise = item => {
    let updatedRole = selectSize.map((val, index) => {
      if (item === index) {
        Add_item('selected_role', val.select);
        return {
          ...val,
          selected: true,
        };
      }
      return {...val, selected: false};
    });
    setSelectSize(updatedRole);
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{paddingBottom: 10}}>
        <SliderBox
          images={slider}
          sliderBoxHeight={524}
          resizeMode={'cover'}
          dotColor="#FFF"
          inactiveDotColor="#FFF"
          resizeMode={'cover'}
          ImageComponentStyle={{width: '100%'}}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 16,
            top: 48,
            backgroundColor: '#FFFFFF',
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CImage imgUrl={BackArrow} style={{width: 10, height: 12}} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            right: 26,
            top: 57,
          }}>
          <CImage imgUrl={Women} style={{width: 41, height: 24}} />
        </View>
        <View style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <LabelText
              label={'Navy Blue Cotton Track Suit '}
              labelStyle={styles.mainHeading}
            />
            <LabelText label={'$249.67'} labelStyle={styles.priceStyles} />
          </View>
          <LabelText
            label={
              'Small detail about the product to let the user know what they will get, shouldn’t be more than 2-3 lines.'
            }
            labelStyle={styles.detailStyle}
          />
          <LabelText label={'CHOOSE SIZE'} labelStyle={styles.chooseSize} />
          <ScrollView
            horizontal
            contentContainerStyle={{marginTop: 20}}
            showsHorizontalScrollIndicator={false}>
            {selectSize.map((item, index) => (
              <TouchableOpacity
                onPress={() => onSelectExercise(index)}
                activeOpacity={0.6}
                style={{
                  borderWidth: 1,
                  borderColor:
                    item.selected === true
                      ? Colors.forgot_psw
                      : Colors.border_color,
                  borderRadius: 20,
                  backgroundColor:
                    item.selected === true ? '#F5FDFF' : '#FFFFFF',
                  marginRight: 10,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                }}>
                <LabelText
                  label={item.select}
                  labelStyle={styles.headerScrollList}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          {/* <CButton
            btnText={`Add to cart`}
            btnTextStyle={styles.nextBtnText}
            style={styles.nextBtnStyle}
            // btnOnPress={pressNext}
          /> */}
          <TouchableOpacity style={styles.nextBtnStyle}>
            <View style={{flexDirection: 'row'}}>
              <CImage imgUrl={cartIcon} style={{width: 24, height: 24}} />
              <LabelText
                label={`Add to cart`}
                labelStyle={styles.nextBtnText}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchandiseDetails;
