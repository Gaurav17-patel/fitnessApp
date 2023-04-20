import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useMemo, useState} from 'react';
import {
  CHeader,
  CButton,
  LabelText,
  CTemplate,
} from '../../../components/index';
import {Colors} from '../../../theme/colors';
import styles from './ExerciseTemplateOptionStyles';
import {CoreStrengthFitness, MindRelaxation} from '../../../assets/index';
import {Fonts} from '../../../constant/index';
import {template} from '@babel/core';
import {useSelector} from 'react-redux';

const ExerciseTemplateOption = ({navigation, route}) => {
  const classRes = useSelector(state => state.get_class_res);
  const createClassID = route?.params?.classid;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [existingTemplate, setExistingTemplate] = useState([
    {
      isSelected: true,
      claaName: 'Core Strength Fitness',
      classDetail: 'Created: 23 Jan 2021',
      classThumbnail: CoreStrengthFitness,
    },
    {
      isSelected: false,
      claaName: 'Mind Relaxation',
      classDetail: 'Created: 23 Feb 2021',
      classThumbnail: MindRelaxation,
    },
  ]);

  const pressNext = () => {
    navigation.navigate('ExerciseTemplateLibrary', {
      createClasid: createClassID,
    });
  };

  const createTemplate = () => {
    navigation.navigate('ExerciseTemplateLibrary', {
      createClasid: createClassID,
    });
  };

  const manageCheckboxSelection = item => {
    console.log('itme', item);
  };

  useMemo(() => {
    console.log('classRes', classRes);
  }, [classRes]);

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <CHeader
            backPress={() => navigation.goBack()}
            headerText={'Exercise Template'}
            bodyText={'Step 3 of 3'}
            progressBarStep={0.7}
            progressBarLineColor={Colors.ProgressBar_Line_Color}
            progressStyle={{marginTop: 21}}
          />
          <View style={{padding: 20}}>
            <CButton
              boxStyles={styles.boxStyle}
              btnText={`+ Create template`}
              btnTextStyle={styles.createTempStyle}
              style={styles.BtnStyle}
              btnOnPress={createTemplate}
            />
            <View style={styles.Fillview}>
              <View style={styles.borderView}></View>
              <LabelText
                label={'CHOOSE FROM EXISTING TEMPLATES'}
                labelStyle={styles.FillText}
              />
              <View style={styles.borderView}></View>
            </View>
            {/* {existingTemplate.map((templates, index) => {
              return (
                <View key={index}>
                  <CTemplate
                    style={{marginTop: index === 0 ? 20 : 10}}
                    imageUrl={templates.classThumbnail}
                    imgStyles={{width: 42, height: 42}}
                    headerText={templates.claaName}
                    bodyText={templates.classDetail}
                    checkBox={true}
                    onClick={() => manageCheckboxSelection(templates)}
                    isChecked={templates.isSelected}
                  />
                </View>
              );
            })} */}
          </View>
        </View>
      </SafeAreaView>
      <View
        style={{padding: 25, bottom: 20, width: '100%', position: 'absolute'}}>
        <CButton
          btnText={`Next`}
          btnTextStyle={{fontFamily: Fonts.fontBold}}
          style={styles.NextBtnStyle}
          btnOnPress={pressNext}
        />
      </View>
    </>
  );
};

export default ExerciseTemplateOption;
