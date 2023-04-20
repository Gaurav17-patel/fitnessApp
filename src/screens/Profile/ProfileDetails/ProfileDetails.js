import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './ProfileDetailsStyles';
import {LabelText, CSearchBar, CDetailBox} from '../../../components/index';
import {BackArrow, arrowRight} from '../../../assets/index';

const ProfileDetails = ({navigation}) => {
  const [accountSetup, setAccountSetup] = useState([
    {
      processId: 1,
      processName: 'Personal details',
      processDesc: 'Profile picture, full name, phone, email etc.',
    },
    {
      processId: 2,
      processName: 'Address',
      processDesc: 'House, Building, State etc.',
    },
    {
      processId: 3,
      processName: 'Certification',
      processDesc: 'PL, First aid, CPR, Cert iii, Cert vi',
    },
    // {
    //   processId: 4,
    //   processName: 'Payment details',
    //   processDesc: 'Account number, branch etc.',
    // },
  ]);

  const gotoDetailScreen = index => {
    if (index === 0) {
      navigation.navigate('EditPersonalDetails');
    } else if (index === 1) {
      navigation.navigate('AddressDetails');
    } else if (index === 2) {
      navigation.navigate('CertificationDetails');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Profile details'}
      />
      <View style={{padding: 20}}>
        <View style={[styles.processView, styles.shadow]}>
          <LabelText
            label={'You can view or edit these details'}
            labelStyle={styles.headerStyle}
          />
          <View style={styles.borderHeader} />
          {accountSetup.map((item, index) => (
            <TouchableOpacity onPress={() => gotoDetailScreen(index)}>
              <CDetailBox
                mainViewStyle={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: accountSetup.length - 1 === index ? 0 : 32,
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
      </View>
    </SafeAreaView>
  );
};

export default ProfileDetails;
