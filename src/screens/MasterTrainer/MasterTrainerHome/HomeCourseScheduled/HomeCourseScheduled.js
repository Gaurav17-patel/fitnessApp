import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomeCourseScheduledStyles';
import {CHomeClassHeader, CResources} from '../../../../components/index';
import {
  TrainingManual,
  arrowRight,
  CoreStrengthFitness,
  MindRelaxation,
} from '../../../../assets/index';
import CCalendar from '../../../../components/CCalendar';

const HomeCourseScheduled = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [incidentClasses, setIncidentClasses] = useState([
    {
      incidentClassImage: CoreStrengthFitness,
      incidentHeader: 'Core Strength Fitness',
      incidentBody: '358 Swan Street, Richmond, VIC 3121',
      incidentTime: '9:00 AM - 12:30 PM',
    },
    {
      incidentClassImage: MindRelaxation,
      incidentHeader: 'Mind Relaxation',
      incidentBody: '358 Swan Street, Richmond, VIC 3121',
      incidentTime: '4:00 PM - 7:30 PM',
    },
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CHomeClassHeader
          date={'13 December'}
          headerText={'Hi John'}
          bodyText={'Check your upcoming classes'}
          userImg={true}
        />
        <View>
          <CCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </View>
        <ScrollView
          contentContainerStyle={{padding: 20, paddingBottom: 60}}
          showsVerticalScrollIndicator={false}>
          {incidentClasses.map((incident, index) => {
            return (
              <View key={index}>
                <CResources
                  footerStyle={{padding: 24}}
                  imageUrl={incident.incidentClassImage}
                  headerText={incident.incidentHeader}
                  bodyText={incident.incidentBody}
                  timeLable
                  timeText={incident.incidentTime}
                  timeStyles={styles.timeStyle}
                  imgStyles={{height: 52, width: 52}}
                />
              </View>
            );
          })}
          <CResources
            onPress={() => navigation.navigate('IncidentReport')}
            footerStyle={{padding: 24}}
            footerText
            titleText={'Emergency'}
            imageUrl={TrainingManual}
            headerText={'Report Incident'}
            bodyText={
              'Incase of any mishappening please report here to avoid further problems'
            }
            NextArrow
            arrowImg={arrowRight}
          />
          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 15,
                  width: '40%',
                  borderRadius: 40,
                  alignSelf: 'center',
                  marginTop: 30,
                  backgroundColor: '#F5FCFF',
                  borderColor: Colors.selected_role_color,
                }}
                onPress={() => navigation.navigate('FirstTimeUser')}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: Colors.selected_role_color,
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  + Create Class
                </Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  padding: 15,
                  width: '40%',
                  borderRadius: 40,
                  alignSelf: 'center',
                  marginTop: 30,
                  backgroundColor: '#F5FCFF',
                  borderColor: Colors.ProgressBar_Line_Color,
                }}
                onPress={() => navigation.navigate('AddingClasses')}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: Colors.ProgressBar_Line_Color,
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  + My Classes
                </Text>
              </TouchableOpacity>
            </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeCourseScheduled;
