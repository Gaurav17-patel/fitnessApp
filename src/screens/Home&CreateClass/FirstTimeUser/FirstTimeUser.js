import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import styles from './FirstTimeUserStyles';
import {
  CHomeClassHeader,
  LabelText,
  CImage,
  CResources,
  CDetailBox,
} from '../../../components/index';
import {arrow, play, arrowRight, TrainingManual} from '../../../assets/index';

const FirstTimeUser = ({navigation}) => {
  const [accountSetup, setAccountSetup] = useState([
    {
      processId: 1,
      processName: 'Basics',
      processDesc: 'Name, date, time, and charges',
    },
    {
      processId: 2,
      processName: 'Location',
      processDesc: 'Venue address',
    },
    {
      processId: 3,
      processName: 'Exercise Template',
      processDesc: 'Exercise videos and music',
    },
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CHomeClassHeader
        date={'13 December'}
        headerText={'Hi John'}
        bodyText={'Good to see you!'}
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}>
        <View style={[styles.processView, styles.shadow]}>
          <LabelText
            label={'Complete these steps to setup your very first class.'}
            labelStyle={styles.headerStyle}
          />
          <View style={styles.borderHeader} />
          {accountSetup.map((item, index) => (
            <View key={index}>
              <CDetailBox
                mainViewStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: accountSetup.length - 1 === index ? 0 : 32,
                }}
                numberIndex={item.processId}
                label1={item.processName}
                label2={item.processDesc}
              />
            </View>
          ))}
          <View style={styles.borderFooter} />
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('Basics')}>
            <LabelText
              label={'Create class'}
              labelStyle={styles.createClassStyles}
            />
            <CImage imgUrl={arrow} style={{width: 16, height: 16}} />
          </TouchableOpacity>
        </View>
        <CResources
          style={Platform.OS === 'android' && styles.resourceStyle}
          onPress={() => navigation.navigate('ExerciseLibrary')}
          footerStyle={{padding: 24}}
          footerText
          titleText={'Resources'}
          imageUrl={play}
          headerText={'Exercise Library'}
          bodyText={
            'All training videos from stickfit including all the exercises'
          }
          NextArrow
          arrowImg={arrowRight}
        />
        <CResources
          style={Platform.OS === 'android' && styles.resourceStyle}
          onPress={() => navigation.navigate('TrainingManual')}
          footerStyle={{padding: 24}}
          imageUrl={TrainingManual}
          headerText={'Training Manual'}
          bodyText={
            'Checkout our training manual to create the best experience'
          }
          NextArrow
          arrowImg={arrowRight}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstTimeUser;
