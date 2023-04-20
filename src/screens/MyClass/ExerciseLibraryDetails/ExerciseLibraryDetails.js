import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  CSearchBar,
  LabelText,
  CImage,
  CExercise,
} from '../../../components/index';
import {
  BackArrow,
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  arrowRight,
  countingStart,
  playCircle,
  ringIcon,
} from '../../../assets/index';
import styles from './ExerciseLibraryDetailsStyles';
import {Colors} from '../../../theme/colors';

const ExerciseLibraryDetails = ({navigation}) => {
  const [exercise, setExercise] = useState([
    {
      img: exercise6,
      list: 'Forward V stepping cross side',
      time: '30 min',
    },
  ]);
  const [exerciseList, setExerciseList] = useState([
    {
      img: exercise1,
      list: 'R Front Knee, L Opp Downward',
      time: '30 sec',
    },
    {
      img: exercise2,
      list: 'Alt Split Stance Scoop ‘n Reach',
      time: '1 min',
    },
    {
      img: exercise3,
      list: 'Forward V stepping cross side',
      time: '30 sec',
    },
    {
      img: exercise4,
      list: 'R Front Knee, L Opp Downward',
      time: '30 sec',
    },
    {
      img: exercise5,
      list: 'Alt Split Stance Scoop ‘n Reach',
      time: '1 min',
    },
  ]);

  const gotoVideoScreen = index => {
    if (index === 0) {
      navigation.navigate('SectionPlaylist');
    } else {
      console.log('hello');
    }
  };

  return (
    <SafeAreaView>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Exercise Library'}
        btn={true}
        // editPress={() => navigation.navigate('ExerciseTemplateLibrary')}
      />
      <ScrollView
        style={{marginTop: 10}}
        contentContainerStyle={{paddingBottom: 120}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            padding: 18,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column'}}>
            <LabelText label={'6 EXERCISES'} labelStyle={styles.headerText} />
            <LabelText
              label={'Dynamic Full Body Neural Wa...'}
              labelStyle={styles.headerText2}
            />
            <TouchableOpacity style={{marginTop: 6, flexDirection: 'row'}}>
              <CImage imgUrl={ringIcon} style={{height: 15, width: 15}} />
              <LabelText
                label={'Best Day Of My Life'}
                labelStyle={styles.bestDatStyles}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <CImage imgUrl={playCircle} style={{height: 30, width: 30}} />
          </TouchableOpacity>
        </View>

        {exerciseList.map((item, index) => (
          <TouchableOpacity
            onPress={() => gotoVideoScreen(index)}
            style={{
              backgroundColor: Colors.white_color,
            }}>
            <CExercise
              imageUrl={item.img}
              exerciseName={item.list}
              exerciseTime={item.time}
              isCheckBox={false}
              style={{paddingLeft: 12}}
              isPath={true}
            />
          </TouchableOpacity>
        ))}
        <View
          style={{
            padding: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <LabelText label={'4 EXERCISES'} labelStyle={styles.headerText} />
            <LabelText
              label={'Neural Activation'}
              labelStyle={styles.footerText2}
            />
            <TouchableOpacity style={{marginTop: 6}}>
              <CImage imgUrl={countingStart} style={{height: 25, width: 120}} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <CImage imgUrl={playCircle} style={{height: 30, width: 30}} />
          </TouchableOpacity>
        </View>
        {exercise.map((item, index) => (
          <View
            style={{
              backgroundColor: '#FFFFFF',
            }}>
            <TouchableOpacity>
              <CExercise
                style={{paddingLeft: 12}}
                imageUrl={item.img}
                exerciseName={item.list}
                exerciseTime={item.time}
                isCheckBox={false}
                isPath={true}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseLibraryDetails;
