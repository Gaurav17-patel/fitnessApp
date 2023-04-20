import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CSearchBar, LabelText, CImage} from '../../../components/index';
import {BackArrow} from '../../../assets/index';
import styles from './SettingsStyles';
import ToggleSwitch from 'toggle-switch-react-native';
import {Colors} from '../../../theme/colors';
import {Add_item} from '../../../utils/AsyncStorage';

const Settings = ({navigation}) => {
  const [option, setOption] = useState([
    {
      name: 'Facebook',
      publishClass: 'Publish class on Trainer_guyfit',
      selected: true,
    },
    {
      name: 'Instagram',
      publishClass: 'Publish class on Trainer Guy',
      selected: false,
    },
  ]);
  const [notification, setNotification] = useState([
    {name: 'Notifications', selected: false},
    {
      name: 'Upcoming class reminder',
      publishClass: 'Send an email 1 hour before class',
      selected: false,
    },
    {
      name: 'Merchandise notification',
      publishClass: 'Everything related to shipping',
      selected: false,
    },
  ]);

  const selectClass = item => {
    let updatedRoles = option.map((val, index) => {
      if (item === index) {
        Add_item('selected_role', val.list);
        return {
          ...val,
          selected: true,
        };
      }
      return {...val, selected: false};
    });
    setOption(updatedRoles);
  };

  const notificationSwitch = item => {
    let updatedRoles = notification.map((val, index) => {
      if (item === index) {
        Add_item('selected_role', val.list);
        return {
          ...val,
          selected: true,
        };
      }
      return {...val, selected: false};
    });
    setNotification(updatedRoles);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Settings'}
      />
      <View style={{padding: 20, marginTop: 8}}>
        <LabelText
          label={'AUTOMATIC CLASS PUBLISH'}
          labelStyle={styles.headerText}
        />
        {option.map((item, index) => (
          <View
            style={{
              marginTop: 28,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <LabelText label={item.name} labelStyle={styles.publishClass} />
              <LabelText
                label={item.publishClass}
                labelStyle={styles.publishClassDetail}
              />
            </View>
            <ToggleSwitch
              isOn={item.selected}
              onColor={Colors.forgot_psw}
              offColor="#CFD8EC"
              labelStyle={{color: 'black', fontWeight: '900'}}
              size="medium"
              onToggle={() => selectClass(index)}
            />
          </View>
        ))}
        <View style={{marginTop: 58}}>
          <LabelText label={'NOTIFICATIONS'} labelStyle={styles.headerText} />
          {notification.map((item, index) => (
            <View
              style={{
                marginTop: 28,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <LabelText label={item.name} labelStyle={styles.publishClass} />
                <LabelText
                  label={item.publishClass}
                  labelStyle={styles.publishClassDetail}
                />
              </View>
              <ToggleSwitch
                isOn={item.selected}
                onColor={Colors.forgot_psw}
                offColor="#CFD8EC"
                labelStyle={{color: 'black', fontWeight: '900'}}
                size="medium"
                onToggle={() => notificationSwitch(index)}
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
