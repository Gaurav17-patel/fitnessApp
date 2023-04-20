import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {CHomeClassHeader, CResources} from '../../../../components/index';
import styles from './ManagementToolkitStyles';
import {mySchedule, document, arrowRight} from '../../../../assets/index';
import {useState} from 'react';

const ManagementToolkit = ({navigation}) => {
  const [toolkit, setToolkit] = useState([
    {
      icon: mySchedule,
      heading: 'My Schedules',
      bodyText: 'List of all the courses that have been scheduled for you',
      next: arrowRight,
    },
    {
      icon: document,
      heading: 'Course Documents',
      bodyText:
        'Flyer, brochure, business template, and even promotion templates',
      next: arrowRight,
    },
  ]);

  const gotoNext = index => {
    if (index === 0) {
      navigation.navigate('MySchedule');
    } else if (index === 1) {
      navigation.navigate('CourseDocuments');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CHomeClassHeader
        headerText={'Management'}
        bodyText={'Manage all your courses'}
      />
      <View style={{padding: 15}}>
        {toolkit.map((item, index) => (
          <CResources
            onPress={() => gotoNext(index)}
            footerStyle={{padding: 24}}
            imageUrl={item.icon}
            headerText={item.heading}
            bodyText={item.bodyText}
            NextArrow={true}
            arrowImg={item.next}
            imgStyles={{width: 26, height: 26}}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ManagementToolkit;
