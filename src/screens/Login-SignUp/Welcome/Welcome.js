import React, {useState} from 'react';
import styles from './WelcomeStyles';
import {StickLogo} from '../../../assets/index';
import {View, Text, SafeAreaView} from 'react-native';
import {
  LabelText,
  RolesBox,
  StickIcon,
  CButton,
} from '../../../components/index';
import {dynamicSize} from '../../../constant/DynamicFontSize';
import {Add_item} from '../../../utils/AsyncStorage';

const Welcome = ({navigation}) => {
  const [roleSelected, setRoleSelected] = useState(false);
  const [roles, setRoles] = useState([
    {
      id: 1,
      rolePrefix: 'I am an',
      role: 'Instructor',
      roleSubText: 'Here to share knowledge and train others',
      selected: false,
    },
    {
      id: 2,
      rolePrefix: 'I am a',
      role: 'Master Trainer',
      roleSubText: 'Here to manage and supervise other trainers',
      selected: false,
    },
  ]);

  const welcomeTexts = {
    firstHeder: 'Hey,',
    secondHeader: 'Welcome to',
    appText: 'StickFit',
    roleHeader: 'Which role describes you the best?',
  };

  const selectRole = item => {
    let updatedRoles = roles.map((val, index) => {
      if (item === index) {
        Add_item('selected_role', val.role);
        return {
          ...val,
          selected: true,
        };
      }
      return {...val, selected: false};
    });
    setRoles(updatedRoles);
  };

  const proceedNext = () => {
    navigation.navigate('IntroSlider');
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{padding: 25}}>
          <StickIcon icon={StickLogo} style={styles.stickLogo} />
          <LabelText
            label={welcomeTexts.firstHeder}
            labelStyle={[styles.bannerText, {marginTop: 40}]}
          />
          <LabelText
            label={welcomeTexts.secondHeader}
            labelStyle={[styles.bannerText]}
          />
          <LabelText label={welcomeTexts.appText} labelStyle={styles.appText} />
          <View style={{marginBottom: dynamicSize(35)}}>
            <LabelText
              label={welcomeTexts.roleHeader}
              labelStyle={styles.roleHeaderText}
            />
          </View>
          {roles.map((item, index) => (
            <View key={item.id}>
              <RolesBox
                style={styles.roleBox}
                prefix={item.rolePrefix}
                roleName={item.role}
                aboutRole={item.roleSubText}
                selected={item.selected}
                onPress={() => selectRole(index)}
              />
            </View>
          ))}
        </View>
      </SafeAreaView>
      <View
        style={{padding: 25, bottom: 20, width: '100%', position: 'absolute'}}>
        <CButton
          btnText={'Proceed'}
          style={styles.proceedBtnStyle}
          btnOnPress={proceedNext}
        />
      </View>
    </>
  );
};

export default Welcome;
