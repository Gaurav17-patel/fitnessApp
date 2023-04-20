import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  CButton,
  CImage,
  CInput,
  CSearchBar,
  CTemplate,
  LabelText,
} from '../../../../components';
import {BackArrow, participant3, boxEmail} from '../../../../assets/index';
import styles from './AbsentReasonStyles';
import CheckBox from '@react-native-community/checkbox';
import { Colors } from '../../../../theme/colors';

const AbsentReason = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [list, setList] = useState([
    {
      name: 'Marvin McKinney',
      joinDate: 'Joined: 23 Jan 2021',
      img: participant3,
    },
  ]);

  const SaveDetails = () => {
    navigation.navigate('ConfirmationPage', {fromScreen: 'AbsentReason'});
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <CSearchBar
          onPress={() => navigation.goBack()}
          textInput={true}
          showSearchIcon={true}
          backArrow={BackArrow}
          textInput={false}
          inputText={'Absent Reason'}
        />
        {list.map((item, index) => (
          <View style={styles.exerciseView}>
            <CImage imgUrl={item.img} style={{width: 42, height: 42}} />
            <View style={{width: '80%', paddingLeft: 12}}>
              <LabelText
                label={item.name}
                labelStyle={styles.exerciseHeaderStyle}
              />
              <LabelText
                label={item.joinDate}
                labelStyle={styles.exerciseBodyText}
              />
            </View>
            <TouchableOpacity style={styles.btnStyle}>
              <CImage imgUrl={boxEmail} style={{width: 32, height: 32}} />
            </TouchableOpacity>
          </View>
        ))}
        <View style={{padding: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              style={styles.checkBox}
              disabled={false}
              value={toggleCheckBox}
              onCheckColor={'#FFFFFF'}
              onFillColor={'#00B4DD'}
              onTintColor={'#00B4DD'}
              animationDuration={0.2}
              lineWidth={1.5}
              boxType={'square'}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <LabelText
              label={'No reason for being absent'}
              labelStyle={styles.checkBoxText}
            />
          </View>
          <CInput
            showPlaceholder={'Describe the reason here'}
            inputStyle={styles.BioData}
            label={'Reason'}
            textAlignVertical="top"
            multiline={true}
            numberOfLines={6}
            labelTextStyle={styles.userNameText}
            placeholderColor={Colors.placeholder_color}
          />
        </View>
      </SafeAreaView>
      <View
        style={{padding: 25, bottom: 20, width: '100%', position: 'absolute'}}>
        <CButton
          btnText={`Save`}
          btnTextStyle={styles.startBtnText}
          style={styles.startBtnStyle}
          btnOnPress={SaveDetails}
        />
      </View>
    </>
  );
};

export default AbsentReason;
