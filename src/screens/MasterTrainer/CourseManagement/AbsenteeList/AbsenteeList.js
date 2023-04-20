import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  CButton,
  CImage,
  CSearchBar,
  CTemplate,
  LabelText,
} from '../../../../components';
import {BackArrow, participant3, participant2} from '../../../../assets/index';
import styles from './AbsenteeListStyles';

const AbsenteeList = ({navigation}) => {
  const [list, setList] = useState([
    {
      name: 'Robert Fox',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant2,
      btn: 'Edit',
    },
    {
      name: 'Marvin McKinney',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant3,
      btn: '+ Reason',
    },
  ]);

  const gotoNext = index => {
    if (index === 0) {
      console.log('edit');
    } else if (index === 1) {
      navigation.navigate('AbsentReason');
    }
  };

  const submitAttendance = () => {
    navigation.navigate('ConfirmationPage', {
      fromScreen: 'AbsenteeList',
    });
  };

  // const pressNext = () => {
  //   navigation.navigate('ConfirmationPage', {fromScreen: 'AbsenteeList'});
  // };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <CSearchBar
          onPress={() => navigation.goBack()}
          textInput={true}
          showSearchIcon={true}
          backArrow={BackArrow}
          textInput={false}
          inputText={'Absentee List'}
        />
        <View style={{padding: 20}}>
          <LabelText
            label={'Add reason for their absence'}
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
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => gotoNext(index)}>
                <LabelText label={item.btn} labelStyle={styles.btnTextStyle} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </SafeAreaView>
      <View
        style={{padding: 25, bottom: 20, width: '100%', position: 'absolute'}}>
        <CButton
          btnText={`Submit Attendance`}
          btnTextStyle={styles.startBtnText}
          style={styles.startBtnStyle}
          // btnOnPress={pressNext}
        />
      </View>
    </>
  );
};

export default AbsenteeList;
