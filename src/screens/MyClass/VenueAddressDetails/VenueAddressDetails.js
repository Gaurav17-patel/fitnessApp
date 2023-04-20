import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {BackArrow} from '../../../assets/index';
import styles from './VenueAddressDetailsStyles';
import {CSearchBar, LabelText, CInput} from '../../../components/index';
import { Colors } from '../../../theme/colors';

const VenueAddressDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Location'}
        btn={true}
        // editPress={() => navigation.navigate('VenueAddress')}
      />
      <ScrollView
        contentContainerStyle={{padding: 20}}
        showsVerticalScrollIndicator={false}>
        <CInput
          showPlaceholder={'Search or use current location'}
          inputStyle={styles.inputStyle}
          label={'Location'}
          labelTextStyle={styles.inputText}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
        <CInput
          showPlaceholder={'H No. 234, River towers'}
          inputStyle={styles.inputStyle}
          label={'House/Apt.'}
          labelTextStyle={styles.inputText}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
        <CInput
          showPlaceholder={'Select state'}
          inputStyle={styles.inputStyle}
          label={'State'}
          labelTextStyle={styles.inputText}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
        <CInput
          showPlaceholder={'Sydney'}
          inputStyle={styles.inputStyle}
          label={'City'}
          labelTextStyle={styles.inputText}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
        <CInput
          showPlaceholder={'23423'}
          inputStyle={styles.inputStyle}
          label={'Zip Code'}
          labelTextStyle={styles.inputText}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenueAddressDetails;
