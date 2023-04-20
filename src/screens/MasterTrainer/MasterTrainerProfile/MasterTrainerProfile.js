import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CProfile, LabelText, CImage} from '../../../components/index';
import styles from './MasterTrainerProfileStyles';
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
import ToggleSwitch from 'toggle-switch-react-native';
import {Colors} from '../../../theme/colors';
import {ScrollView} from 'react-native-gesture-handler';

const MasterTrainerProfile = ({navigation}) => {
  const [profileName, setProfileName] = useState([
    {icons: profileDetails, name: 'Profile details'},
    {icons: membership, name: 'Membership'},
    {icons: setting, name: 'Settings'},
  ]);

  const [profileList, setProfileList] = useState([
    {icons: FAQs, name: 'FAQs'},
    {icons: contactUs, name: 'Contact us'},
  ]);
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{padding: 20}}>
        <CProfile
          userIcon={userImage}
          userName={'John Doe'}
          validDate={'Membership valid till 22 May, 2022'}
          mainStyle={{marginTop: 20, marginBottom: 20}}
        />
      </View>
      <ScrollView
        style={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#F6F9F9',
            padding: 20,
            alignItems: 'center',
          }}>
          <View>
            <LabelText
              label={'Master Trainer'}
              labelStyle={styles.btnTextStyle}
            />
            <LabelText
              label={'Turn off to go back to Instructor mode'}
              labelStyle={styles.btnBodyText}
            />
          </View>
          <ToggleSwitch
            isOn={switchOn}
            onColor={Colors.forgot_psw}
            offColor="#CFD8EC"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="medium"
            onToggle={value => {
              setSwitchOn(value);
            }}
          />
        </View>
        {profileName.map((item, index) => (
          <View style={styles.container}>
            <View style={styles.directionView}>
              <View style={styles.detailsIcon}>
                <CImage imgUrl={item.icons} style={{width: 20, height: 20}} />
              </View>
              <LabelText label={item.name} labelStyle={styles.detailsName} />
            </View>
            <TouchableOpacity style={styles.nextBtn}>
              <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
            </TouchableOpacity>
          </View>
        ))}
        <View style={{borderBottomWidth: 1.5, borderColor: '#F0F2F5'}} />
        {profileList.map((item, index) => (
          <View style={styles.container}>
            <View style={styles.directionView}>
              <View style={styles.detailsIcon}>
                <CImage imgUrl={item.icons} style={{width: 20, height: 20}} />
              </View>
              <LabelText label={item.name} labelStyle={styles.detailsName} />
            </View>
            <TouchableOpacity style={styles.nextBtn}>
              <CImage imgUrl={arrowRight} style={{width: 12, height: 12}} />
            </TouchableOpacity>
          </View>
        ))}
        <View
          style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeCourseScheduled')}
            style={styles.MTrainerBtn}>
            <LabelText
              label={'Home/ Incident'}
              labelStyle={styles.MTrainerText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ManagementToolkit')}
            style={styles.MTrainerBtn}>
            <LabelText
              label={'Course Management'}
              labelStyle={styles.MTrainerText}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            marginTop: 18,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.logoutBtn}>
            <CImage imgUrl={Logout} style={{width: 16, height: 14}} />
            <LabelText label={'Log out'} labelStyle={styles.logoutText} />
          </TouchableOpacity>
          <View>
            <LabelText label={'Member since'} labelStyle={styles.footerText} />
            <LabelText
              label={'22 May 2021'}
              labelStyle={styles.footerTextDate}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MasterTrainerProfile;
