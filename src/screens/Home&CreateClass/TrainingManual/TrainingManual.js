import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './TrainingManualStyles';
import {CSearchBar, LabelText, CPolicyText} from '../../../components/index';
import {Search, BackArrow} from '../../../assets/index';

const TrainingManual = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Training Manual'}
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: '35%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              padding: 24,
              width: '46%',
              height: '100%',
              borderRadius: 8,
              backgroundColor: '#DAEAF8',
            }}></View>
          <View style={{width: '7%'}} />
          <View
            style={{
              padding: 24,
              width: '46%',
              height: '100%',
              borderRadius: 8,
              backgroundColor: '#DAEAF8',
            }}></View>
        </View>
        <View style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
          <View style={{width: '50%'}}>
            <LabelText
              label={'Foundation Course'}
              labelStyle={styles.boxTextStyle}
            />
          </View>
          <View style={{width: '50%', alignItems: 'center'}}>
            <LabelText
              label={'Do’s and Don’t Guide'}
              labelStyle={styles.boxTextStyle}
            />
          </View>
        </View>
      </View>
      <View style={{alignSelf: 'center', marginBottom: 28}}>
        <CPolicyText
          labelOne={'Read our '}
          labelTwo={'Term of Service '}
          labelThree={'& '}
          labelFour={'Privacy Policy '}
          labelFive={'statement'}
        />
      </View>
    </SafeAreaView>
  );
};

export default TrainingManual;
