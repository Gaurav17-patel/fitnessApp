import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CResources,
  CSearchBar,
  LabelText,
  CTemplate,
  CImage,
  CButton,
} from '../../../../components';
import styles from './MarkAttendanceStyles';
import {
  BackArrow,
  CoreStrengthFitness,
  arrowRight,
  email,
  participant1,
  participant2,
  participant3,
  participant4,
  participant5,
  participant6,
  participant7,
  participant8,
  warning,
} from '../../../../assets/index';
import {Add_item} from '../../../../utils/AsyncStorage';

const MarkAttendance = ({navigation}) => {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(true);
  const [attendance, setAttendance] = useState([
    {
      name: 'Jane Cooper',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant1,
      selected: true,
    },
    {
      name: 'Robert Fox',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant2,
      selected: false,
    },
    {
      name: 'Marvin McKinney',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant3,
      selected: false,
    },
  ]);

  const [mainAsking, setMainAsking] = useState([
    {
      username: 'Esther Howard',
      joinDate: 'Joined: 23 Jan 2021',
      userImg: participant4,
      selected: true,
    },
    {
      username: 'Wade Warren',
      joinDate: 'Joined: 23 Jan 2021',
      userImg: participant5,
      selected: true,
    },
    {
      username: 'Courtney Henry',
      joinDate: 'Joined: 23 Jan 2021',
      userImg: participant6,
      selected: true,
    },
    {
      username: 'Albert Flores',
      joinDate: 'Joined: 23 Jan 2021',
      userImg: participant8,
      selected: true,
    },
    {
      username: 'Theresa Webb',
      joinDate: 'Joined: 23 Jan 2021',
      userImg: participant7,
      selected: true,
    },
  ]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const selectRole = item => {
    let updatedRoles = attendance.map((val, index) => {
      if (item === index) {
        Add_item('selected_role', val.list);
        return {
          ...val,
          selected: true,
        };
      }
      return {...val, selected: false};
    });
    setAttendance(updatedRoles);
  };

  const selectUser = item => {
    let updatedRoles = mainAsking.map((val, index) => {
      if (item === index) {
        Add_item('selected_role', val.list);
        return {
          ...val,
          selected: true,
        };
      }
      return {...val, selected: false};
    });
    setMainAsking(updatedRoles);
  };

  const pressNext = () => {
    navigation.navigate('AbsenteeList');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        icons={true}
        searchIcon={warning}
        // editPress={() => navigation.navigate('AttendanceMarkedDetails')}
        iconStyle={{width: 22, height: 22}}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Class detail'}
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
      <ScrollView
        style={{padding: 20, marginTop: 10}}
        contentContainerStyle={{paddingBottom: 60}}
        showsVerticalScrollIndicator={false}>
        <LabelText label={'Mark attendance'} labelStyle={styles.headingStyle} />
        <FlatList
          data={attendance}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          key={item => item.id}
          contentContainerStyle={{padding: 5}}
          renderItem={({item, index}) => (
            <CTemplate
              imageUrl={item.img}
              imgStyles={{width: 42, height: 42}}
              headerText={item.name}
              bodyText={item.joinDate}
              checkBox={true}
              onClick={() => selectRole(index)}
              isChecked={item.selected}
            />
          )}
        />
        <View style={{borderBottomWidth: 2, borderColor: '#F0F2F5'}} />
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 16}}>
          <CImage imgUrl={email} style={{width: 20, height: 20}} />
          <LabelText
            label={'Mail asking for reason'}
            labelStyle={styles.footerHeading}
          />
        </View>
        <FlatList
          data={mainAsking}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          key={item => item.id}
          contentContainerStyle={{padding: 5}}
          renderItem={({item, index}) => (
            <CTemplate
              imageUrl={item.userImg}
              imgStyles={{width: 42, height: 42}}
              headerText={item.username}
              bodyText={item.joinDate}
              checkBox={true}
              onClick={() => selectUser(index)}
              isChecked={item.selected}
            />
          )}
        />
        <CButton
          btnText={`Next`}
          btnTextStyle={styles.nextBtnText}
          style={styles.nextBtnStyle}
          btnOnPress={pressNext}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarkAttendance;
