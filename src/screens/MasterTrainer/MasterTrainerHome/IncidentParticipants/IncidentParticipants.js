import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {
  CResources,
  CSearchBar,
  LabelText,
  CTemplate,
} from '../../../../components';
import styles from './IncidentParticipantsStyles';
import {
  BackArrow,
  CoreStrengthFitness,
  arrowRight,
  participant1,
  participant2,
} from '../../../../assets/index';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IncidentParticipants = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Incident'}
      />
      <CResources
        footerStyle={{
          marginTop: 0,
          backgroundColor: '#F6F9F9',
          padding: 20,
          borderRadius: 0,
        }}
        disabled={true}
        imageUrl={CoreStrengthFitness}
        headerText={'Core Strength Fitness'}
        bodyText={'358 Swan Street, Richmond, VIC 3121 >'}
        timeLable
        timeText={'9:00 AM - 12:30 PM'}
        timeStyles={styles.timeStyle}
        imgStyles={{height: 52, width: 52}}
        dateLable={true}
        dateText={'23 Jan 2021'}
      />
      <View style={{padding: 20, marginTop: 10}}>
        <LabelText
          label={'Incident Participants'}
          labelStyle={styles.headingStyle}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('IncidentDetail')}>
          <CTemplate
            style={{marginTop: 20}}
            imageUrl={participant1}
            imgStyles={{width: 42, height: 42}}
            headerText={'Jane Cooper'}
            bodyText={'Joined: 23 Jan 2021'}
            arrowImg={arrowRight}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <CTemplate
            imageUrl={participant2}
            imgStyles={{width: 42, height: 42}}
            headerText={'Robert Fox'}
            bodyText={'Joined: 23 Jan 2021'}
            arrowImg={arrowRight}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IncidentParticipants;
