import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CImage} from '../../../components/index';
import styles from './SearchLocationStyles';
import {BackArrow} from '../../../assets/index';
import {dynamicSize, Fonts} from '../../../constant/index';

const SearchLocation = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{width: '10%'}}>
          <CImage imgUrl={BackArrow} style={{height: 12, width: 12}} />
        </TouchableOpacity>
        <View style={{width: '100%'}}>
          <TextInput
            placeholder="Type in your street/locality"
            style={{
              fontSize: dynamicSize(16),
              fontFamily: Fonts.fontMedium
            }}
            multiline={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchLocation;
