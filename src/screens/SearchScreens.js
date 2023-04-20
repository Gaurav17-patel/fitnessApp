import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {CSearchBar} from '../components';
import {BackArrow} from '../../src/assets/index';
import {Colors} from '../theme/colors';

const SearchScreens = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        placeHolderColor={Colors.placeholder_color}
        searchPlaceHolder={'Search exercise'}
        // searchStyle={{}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default SearchScreens;
