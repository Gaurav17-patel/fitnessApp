import styles from './SplashScreenStyles';
import {AppLogo} from '../../../assets/index';
import {SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Get_item} from '../../../utils/AsyncStorage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      hideSplash();
    }, 2000);
  }, []);

  const getSetupProfileRes = (userID, token) => {
    try {
      fetch(
        `http://ec2-3-235-29-132.compute-1.amazonaws.com/api/isProfileSetup/${userID}`,
        {
          method: 'get',
          headers: {
            Authorization: 'Bearer ' + token,
            Accept: 'application/json',
          },
        },
      )
        .then(res => res.json())
        .then(response => {
          if (response?.key === 0) {
            navigation.navigate('SetupAccount');
          } else {
            navigation.navigate('TabNavigator');
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  const hideSplash = () => {
    Get_item('userData').then(res => {
      let userRes = JSON.parse(res);
      if (userRes?.data?.id) {
        let id = userRes?.data?.id;
        let token = userRes?.token;
        getSetupProfileRes(id, token);
      } else if (userRes === null) {
        navigation.navigate('IntroSlider');
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={AppLogo} resizeMode="contain" style={styles.appLogo} />
    </SafeAreaView>
  );
};

export default SplashScreen;
