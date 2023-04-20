import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './UpcomingClassesStyles';
import {
  CHomeClassHeader,
  CResources,
  LabelText,
} from '../../../components/index';
import {useSelector} from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import {
  CoreStrengthFitness,
  MindRelaxation,
  Extraordinary,
  EverydayBliss,
  SuperBrain,
} from '../../../assets/index';
import {useNavigation} from '@react-navigation/native';
import CCalendar from '../../../components/CCalendar';

const UpcomingClasses = ({navigation}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [exercise, setExercise] = useState([
    {
      img: CoreStrengthFitness,
      heading: 'Core Strength Fitness',
      time: '9:00 AM - 12:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
    {
      img: MindRelaxation,
      heading: 'Mind Relaxation',
      time: '4:00 PM - 7:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
  ]);
  const [exerciseClasses, setExerciseClasses] = useState([
    {
      img: CoreStrengthFitness,
      heading: 'Core Strength Fitness',
      monthlyDate: 'Monthly 23 Jan',
      time: '9:00 AM - 12:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
    {
      img: MindRelaxation,
      heading: 'Mind Relaxation',
      monthlyDate: '23 Jan 2021',
      time: '4:00 PM - 7:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
    {
      img: Extraordinary,
      heading: 'Be Extraordinary',
      monthlyDate: 'Daily ',
      time: '4:00 AM - 7:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
    {
      img: EverydayBliss,
      heading: 'Everyday Bliss',
      monthlyDate: 'Weekly Friday ',
      time: '9:00 AM - 12:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
    {
      img: SuperBrain,
      heading: 'Super Brain',
      monthlyDate: 'Yearly 23 Jan',
      time: '9:00 AM - 12:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
  ]);

  const gotoClassDetails = index => {
    if (index === 0) {
      navigation.navigate('ClassDetails');
    }
  };

  // useEffect(() => {
  //   navigation.setOptions({
  //     tabBarVisible: true,
  //   });
  // }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CHomeClassHeader
          date={'13 December'}
          headerText={'My classes'}
          bodyText={'Check your upcoming classes'}
        />
        <View>
          {/* <CalendarStrip
            scrollable
            style={{height: 70}}
            calendarHeaderStyle={{color: 'transparent'}}
            headerText={'.'}
            dateNumberStyle={{color: 'black', fontSize: 14, paddingTop: 10}}
            dateNameStyle={{color: 'black', fontSize: 11}}
            iconContainer={{flex: 0.1}}
          /> */}
          <CCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>
        <ScrollView
          contentContainerStyle={{padding: 20}}
          showsVerticalScrollIndicator={false}>
          {exercise.map((item, index) => (
            <View key={index}>
              <CResources
                onPress={() => gotoClassDetails(index)}
                footerStyle={{padding: 24}}
                imageUrl={item.img}
                headerText={item.heading}
                bodyText={item.bodyText}
                timeLable
                timeText={item.time}
                timeStyles={styles.timeStyle}
                imgStyles={{height: 52, width: 52}}
              />
            </View>
          ))}
          <LabelText label={'All classes'} labelStyle={styles.TitleStyles} />
          {exerciseClasses.map((item, index) => (
            <View key={index}>
              <CResources
                footerStyle={{padding: 24}}
                imageUrl={item.img}
                headerText={item.heading}
                bodyText={item.bodyText}
                timeLable
                timeText={item.time}
                timeStyles={styles.timeStyle}
                imgStyles={{height: 52, width: 52}}
                dateLable={true}
                dateText={item.monthlyDate}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UpcomingClasses;
