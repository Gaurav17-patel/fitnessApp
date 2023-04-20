import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './HistoryStyles';
import {dynamicSize, Fonts} from '../../../../constant';
import {CImage, LabelText, CResources} from '../../../../components';
import {Colors} from '../../../../theme/colors';
import {
  BackArrow,
  CoreStrengthFitness,
  MindRelaxation,
} from '../../../../assets/index';

const History = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CImage imgUrl={BackArrow} style={{height: 12, width: 12}} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            width: '95%',
          }}>
          <TouchableOpacity
            style={{width: '45%'}}
            onPress={() => navigation.navigate('IncidentReport')}>
            <LabelText
              label={'Report Incident'}
              labelStyle={{
                fontSize: dynamicSize(18),
                fontFamily: Fonts.fontBold,
                color: Colors.placeholder_color,
              }}
            />
          </TouchableOpacity>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <LabelText
              label={'History'}
              labelStyle={{
                fontSize: dynamicSize(18),
                fontFamily: Fonts.fontBold,
                color: Colors.forgot_psw,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <View
          style={{
            borderWidth: 1.2,
            width: '50%',
            borderColor: Colors.forgot_psw,
          }}
        />
      </View>
      <View style={{padding: 20, marginTop: 8}}>
        <LabelText
          label={'List of classes in which incidents were reported'}
          labelStyle={styles.headingText}
        />
        <CResources
          onPress={() => navigation.navigate('IncidentParticipants')}
          footerStyle={{padding: 24}}
          imageUrl={CoreStrengthFitness}
          headerText={'Core Strength Fitness'}
          bodyText={'358 Swan Street, Richmond, VIC 3121'}
          timeLable
          timeText={'9:00 AM - 12:30 PM'}
          timeStyles={styles.timeStyle}
          imgStyles={{height: 52, width: 52}}
          dateLable={true}
          dateText={'23 Jan 2021'}
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
          dateLable={true}
          dateText={'23 Jan 2021'}
        />
      </View>
    </SafeAreaView>
  );
};

export default History;
