import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './AddingClassesStyles';
import {
  CHomeClassHeader,
  LabelText,
  CImage,
  CDetailBox,
} from '../../../components/index';
import {arrow} from '../../../assets/index';

const AddingClasses = ({navigation}) => {
  const [addClasses, setAddClasses] = useState([
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
        headerText={'My classes'}
        bodyText={'Start adding classes'}
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}>
        <View style={[styles.processView, styles.shadow]}>
          <LabelText
            label={'Complete these steps to setup your very first class.'}
            labelStyle={styles.headerStyle}
          />
          <View style={styles.borderHeader} />
          {addClasses.map((item, index) => (
            <View key={index}>
              <CDetailBox
                mainViewStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: addClasses.length - 1 === index ? 0 : 32,
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
            onPress={() => navigation.navigate('FirstTimeUser')}>
            <LabelText
              label={'Create class'}
              labelStyle={styles.createClassStyles}
            />
            <CImage imgUrl={arrow} style={{width: 16, height: 16}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddingClasses;
