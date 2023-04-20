import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './MyScheduleStyles';
import {CResources, LabelText, CSearchBar} from '../../../../components/index';
import CCalendar from '../../../../components/CCalendar';
import {
  CoreStrengthFitness,
  MindRelaxation,
  Extraordinary,
  EverydayBliss,
  SuperBrain,
  BackArrow,
} from '../../../../assets/index';

const MySchedule = ({navigation}) => {
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
      monthlyDate: '23 Jan 2021',
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
      monthlyDate: '25 Jan 2021 ',
      time: '4:00 AM - 7:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
    {
      img: EverydayBliss,
      heading: 'Everyday Bliss',
      monthlyDate: '11 Feb 2021',
      time: '9:00 AM - 12:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
    {
      img: SuperBrain,
      heading: 'Super Brain',
      monthlyDate: '12 Feb 2021',
      time: '9:00 AM - 12:30 PM',
      bodyText: '358 Swan Street, Richmond, VIC 3121',
    },
  ]);

  const gotoClassDetails = index => {
    if (index === 0) {
      navigation.navigate('MarkAttendance');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'My Schedule'}
      />
      <View style={styles.container}>
      <View>
        <CCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>
        <ScrollView
          contentContainerStyle={{padding: 20}}
          showsVerticalScrollIndicator={false}>
          {exercise.map((item, index) => (
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
          ))}
          <LabelText label={'All classes'} labelStyle={styles.TitleStyles} />
          {exerciseClasses.map((item, index) => (
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
              onPress={() => navigation.navigate('AttendanceMarkedDetails')}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MySchedule;
