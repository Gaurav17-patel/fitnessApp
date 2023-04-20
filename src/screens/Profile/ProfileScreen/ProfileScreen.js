import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CProfile, LabelText, CImage} from '../../../components/index';
import styles from './ProfileScreenStyles';
import {
  userImage,
  profileDetails,
  arrowRight,
  contactUs,
  FAQs,
  setting,
  membership,
  Logout,
} from '../../../assets/index';
import {Clear_Storage, Get_item} from '../../../utils/AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PostRequest} from '../../../utils/ApiRequest';
import {Api_url} from '../../../utils/ApiConstants';
import {loader_action} from '../../../redux/action/action';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {useIsFocused} from '@react-navigation/native';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocus = useIsFocused();
  const [profileName, setProfileName] = useState([
    {icons: profileDetails, name: 'Profile details'},
    {icons: membership, name: 'Membership'},
    {icons: setting, name: 'Settings'},
  ]);

  const [profileList, setProfileList] = useState([
    {icons: FAQs, name: 'FAQs'},
    {icons: contactUs, name: 'Contact us'},
  ]);
  const [token, setToken] = useState('');

  const gotoScreen = index => {
    if (index === 0) {
      navigation.navigate('ProfileDetails');
    } else if (index === 2) {
      navigation.navigate('Settings');
    }
  };

  const gotoNextScreen = index => {
    if (index === 0) {
      console.log('Faqs');
    } else if (index === 1) {
      navigation.navigate('ContactUs');
    }
  };

  useEffect(() => {
    if (isFocus) {
      getUserToken();
    }
  }, [isFocus]);

  const getUserToken = async () => {
    const user_token = await Get_item('token');
    if (user_token) {
      setToken(user_token);
    }
  };

  const logOut = async () => {
    try {
      dispatch(loader_action(true));
      fetch(`${Api_url}api/logout`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json',
        },
      })
        .then(res => res.json())
        .then(response => {
          console.log('response', response);
          if (response?.code === 200) {
            AsyncStorage.removeItem('token');
            AsyncStorage.removeItem('userData');
            navigation.navigate('Login');
            dispatch(loader_action(false));
            Toast.show(response.message, Toast.LONG);
          } else {
            dispatch(loader_action(false));
            Toast.show(response.message, Toast.LONG);
          }
        })
        .catch(err => {
          console.log('err', err);
          dispatch(loader_action(false));
        });
    } catch (error) {
      console.log('error', error);
      dispatch(loader_action(false));
    }
    // }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{padding: 20}}>
        <CProfile
          userIcon={userImage}
          userName={'John Doe'}
          validDate={'Membership valid till 22 May, 2022'}
        />
        <View style={{marginTop: 30}}>
          {profileName.map((item, index) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => gotoScreen(index)}
              key={index}>
              <View style={styles.directionView}>
                <View style={styles.detailsIcon}>
                  <CImage imgUrl={item.icons} style={{width: 20, height: 20}} />
                </View>
                <LabelText label={item.name} labelStyle={styles.detailsName} />
              </View>
              <View style={styles.nextBtn}>
                <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
              </View>
            </TouchableOpacity>
          ))}
          <View style={{borderBottomWidth: 1.5, borderColor: '#F0F2F5'}} />
          {profileList.map((item, index) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => gotoNextScreen(index)}
              key={index}>
              <View style={styles.directionView}>
                <View style={styles.detailsIcon}>
                  <CImage imgUrl={item.icons} style={{width: 20, height: 20}} />
                </View>
                <LabelText label={item.name} labelStyle={styles.detailsName} />
              </View>
              <View style={styles.nextBtn}>
                <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => navigation.navigate('MasterTrainerProfile')}
            style={styles.MTrainerBtn}>
            <LabelText
              label={'Master Trainer'}
              labelStyle={styles.MTrainerText}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutBtn} onPress={logOut}>
            <CImage imgUrl={Logout} style={{width: 16, height: 14}} />
            <LabelText label={'Log out'} labelStyle={styles.logoutText} />
          </TouchableOpacity>
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <LabelText label={'Member since'} labelStyle={styles.footerText} />
            <LabelText
              label={'22 May 2021'}
              labelStyle={styles.footerTextDate}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
