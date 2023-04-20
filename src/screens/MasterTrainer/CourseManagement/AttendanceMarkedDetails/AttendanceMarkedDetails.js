import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  CButton,
  CImage,
  CResources,
  CSearchBar,
  LabelText,
} from '../../../../components';
import {
  BackArrow,
  warning,
  CoreStrengthFitness,
  participant1,
  participant2,
  participant3,
  participant4,
  participant5,
  participant6,
  participant7,
  participant8,
  Help,
} from '../../../../assets/index';
import styles from './AttendanceMarkedDetailsStyles';
import {Colors} from '../../../../theme/colors';

const AttendanceMarkedDetails = ({navigation}) => {
  const [list, setList] = useState([
    {
      name: 'Jane Cooper',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant1,
    },
    {
      name: 'Robert Fox',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant2,
      attention: 'Absent',
    },
    {
      name: 'Marvin McKinney',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant3,
      attention: 'Absent',
    },
    {
      name: 'Esther Howard',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant4,
    },
    {
      name: 'Wade Warren',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant5,
    },
    {
      name: 'Courtney Henry',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant6,
    },
    {
      name: 'Albert Flores',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant8,
    },
    {
      name: 'Theresa Webb',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant7,
    },
  ]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        icons={true}
        searchIcon={warning}
        iconStyle={{width: 22, height: 22}}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Class detail'}
      />
      <CResources
        footerStyle={{
          marginTop: 0,
          backgroundColor: Colors.other_BG_Color,
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
      <ScrollView
        style={{padding: 20, marginTop: 10}}
        contentContainerStyle={{paddingBottom: 60}}>
        <LabelText
          label={'Attendance Marked'}
          labelStyle={styles.headingStyle}
        />
        {list.map((item, index) => (
          <View style={styles.exerciseView}>
            <CImage imgUrl={item.img} style={{width: 42, height: 42}} />
            <View style={{width: '70%', paddingLeft: 12}}>
              <LabelText
                label={item.name}
                labelStyle={styles.exerciseHeaderStyle}
              />
              <LabelText
                label={item.joinDate}
                labelStyle={styles.exerciseBodyText}
              />
            </View>
            <View style={styles.btnStyle}>
              <LabelText
                label={item.attention}
                labelStyle={styles.btnTextStyle}
              />
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.needHelpBtn}>
          <CImage imgUrl={Help} style={{width: 20, height: 20}} />
          <LabelText label={'Need Help'} labelStyle={styles.needHelpText} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceMarkedDetails;
