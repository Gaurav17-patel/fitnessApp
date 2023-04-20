import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ClassDetailsStyles';
import {
  CSearchBar,
  LabelText,
  CImage,
  CResources,
  CDetailBox,
} from '../../../components/index';
import {
  CoreStrengthFitness,
  BackArrow,
  deleteImg,
  arrowRight,
} from '../../../assets/index';
import {Colors} from '../../../theme/colors';

const ClassDetails = ({navigation}) => {
  const [classesDetail, setClassesDetail] = useState([
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

  const gotoDetailScreen = index => {
    if (index === 0) {
      navigation.navigate('BasicDetails');
    } else if (index === 1) {
      navigation.navigate('VenueAddressDetails');
    } else if (index === 2) {
      navigation.navigate('ExerciseLibraryDetails');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        icons={true}
        searchIcon={deleteImg}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Class detail'}
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <View style={[styles.processView, styles.shadow]}>
          <CResources
            footerStyle={styles.shadowStyle}
            imageUrl={CoreStrengthFitness}
            headerText={'Core Strength Fitness'}
            bodyText={'358 Swan Street, Richmond, VIC 3121'}
            timeLable
            timeText={'9:00 AM - 12:30 PM'}
            timeStyles={styles.timeStyle}
            imgStyles={{height: 52, width: 52}}
            dateLable={true}
            dateText={'Monthly 23 Jan'}
          />
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              borderTopWidth: 1,
              margin: 20,
              borderColor: Colors.border_color,
            }}
          />
          {classesDetail.map((item, index) => (
            <TouchableOpacity onPress={() => gotoDetailScreen(index)} key={index}>
              <CDetailBox
                mainViewStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: classesDetail.length - 1 === index ? 0 : 32,
                }}
                numberIndex={item.processId}
                label1={item.processName}
                label2={item.processDesc}
                arrow={true}
                arrowIcon={arrowRight}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassDetails;
