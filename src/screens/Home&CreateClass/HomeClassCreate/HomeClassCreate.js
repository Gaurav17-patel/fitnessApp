import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import styles from './HomeClassCreateStyles';
import {CHomeClassHeader, CResources} from '../../../components/index';
import {
  play,
  arrowRight,
  MindRelaxation,
  TrainingManual,
  CoreStrengthFitness,
} from '../../../assets/index';
import CCalendar from '../../../components/CCalendar';

const HomeClassCreate = ({navigation}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CHomeClassHeader
          date={'13 December'}
          headerText={'Hi John'}
          bodyText={'Check your upcoming classes'}
          userImg={true}
        />
        <View style={{paddingTop: 5, paddingBottom: 5}}>
          <CCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>
        <ScrollView
          contentContainerStyle={{padding: 20, paddingBottom: 60}}
          showsVerticalScrollIndicator={false}>
          <CResources
            footerStyle={{padding: 24}}
            imageUrl={CoreStrengthFitness}
            headerText={'Core Strength Fitness'}
            bodyText={'358 Swan Street, Richmond, VIC 3121'}
            timeLable
            timeText={'9:00 AM - 12:30 PM'}
            timeStyles={styles.timeStyle}
            imgStyles={{height: 52, width: 52}}
          />
          <CResources
            footerStyle={{padding: 24}}
            imageUrl={MindRelaxation}
            headerText={'Mind Relaxation'}
            bodyText={'358 Swan Street, Richmond, VIC 3121'}
            timeLable
            timeText={'4:00 PM - 7:30 PM'}
            timeStyles={styles.timeStyle}
            imgStyles={{height: 52, width: 52}}
          />
          <CResources
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
            onPress={() => navigation.navigate('TrainingManual')}
            footerStyle={{padding: 24}}
            style={{marginTop: 8}}
            imageUrl={TrainingManual}
            headerText={'Training Manual'}
            bodyText={
              'Checkout our training manual to create the best experience'
            }
            NextArrow
            arrowImg={arrowRight}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeClassCreate;
