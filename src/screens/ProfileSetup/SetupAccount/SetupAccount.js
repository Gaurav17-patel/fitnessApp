import React, {useEffect, useState} from 'react';
import styles from './SetupAccountStyles';
import {LabelText, CButton} from '../../../components/index';
import {View, SafeAreaView, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Get_item} from '../../../utils/AsyncStorage';
import {get_User_Details} from '../../../redux/action/action';
import {useMemo} from 'react';

const {height, width} = Dimensions.get('window');

const SetupAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const [userid, setUserId] = useState({});
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
  ]);

  const startSetupAccount = () => {
    navigation.navigate('PersonalDetails');
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    try {
      Get_item('userData')
        .then(res => {
          if (res) {
            let userPersonalDetails = JSON.parse(res);
            let userID = userPersonalDetails?.data?.id;
            let userToken = userPersonalDetails?.token;
            if (userID && userToken) {
              getUserPersonalDetails(userID, userToken);
              setUserId(userID);
            }
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const getUserPersonalDetails = (userid, usertoken) => {
    try {
      let data = {
        userid: userid,
        userToken: usertoken,
      };
      dispatch(get_User_Details(data));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{padding: 20, marginTop: 56}}>
          <LabelText label={'Setup account'} labelStyle={styles.headerText} />
          <LabelText
            label={"Here's what you need to do to set up your account."}
            labelStyle={styles.subHeader}
          />
          <View style={[styles.processView, styles.shadow]}>
            {accountSetup.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: accountSetup.length - 1 === index ? 0 : 32,
                }}
                key={index}>
                <View style={styles.processIndexView}>
                  <LabelText
                    label={item.processId}
                    labelStyle={styles.processIndex}
                  />
                </View>
                <View
                  style={{
                    width: '82%',
                    marginLeft: 12,
                  }}>
                  <LabelText
                    label={item.processName}
                    labelStyle={styles.processName}
                  />
                  <LabelText
                    label={item.processDesc}
                    labelStyle={styles.subProcess}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{padding: 25, bottom: 20, width: '100%', position: 'absolute'}}>
        <CButton
          btnText={`Lets's start`}
          btnTextStyle={styles.startBtnText}
          style={styles.startBtnStyle}
          btnOnPress={startSetupAccount}
        />
      </View>
    </>
  );
};

export default SetupAccount;
