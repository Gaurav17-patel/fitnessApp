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
  CButton,
} from '../../../components/index';
import {
  Search,
  BackArrow,
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
} from '../../../assets/index';
import styles from './ExerciseLibraryStyles';
import {Colors} from '../../../theme/colors';

const ExerciseLibrary = ({navigation}) => {
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
  ]);

  const [exercise, setExercise] = useState([
    {
      img: exercise4,
      list: 'R Front Knee, L Opp Downward',
      time: '30 sec',
    },
    {
      img: exercise5,
      list: 'Alt Split Stance Scoop‘n Reach',
      time: '1 min',
    },
    {
      img: exercise6,
      list: 'Forward V stepping cross side',
      time: '30 sec',
    },
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        icons={true}
        searchIcon={Search}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Exercise Library'}
        editPress={() => navigation.navigate('SearchScreens')}
        // searchPlaceHolder={'Exercise List'}
        // placeHolderColor={'#000000'}
      />
      <ScrollView
        contentContainerStyle={{marginTop: 10, paddingBottom: 50}}
        showsVerticalScrollIndicator={false}>
        <View style={{padding: 18}}>
          <LabelText label={'3 EXERCISES'} labelStyle={styles.headingText} />
          <LabelText
            label={'Dynamic Full Body Neural Wa...'}
            labelStyle={styles.headerText2}
          />
        </View>

        {exerciseList.map((item, index) => (
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderColor: Colors.border_color,
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
            }}
            key={index}>
            <CExercise
              imageUrl={item.img}
              exerciseName={item.list}
              exerciseTime={item.time}
              style={{paddingLeft: 12}}
              isPath={true}
            />
          </TouchableOpacity>
        ))}
        <View style={{padding: 18}}>
          <LabelText label={'10 exercises '} labelStyle={styles.headingText} />
          <LabelText
            label={'Neural Activation'}
            labelStyle={styles.footerText2}
          />
        </View>
        {exercise.map((item, index) => (
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderColor: Colors.border_color,
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
            }}
            key={index}>
            <CExercise
              imageUrl={item.img}
              exerciseName={item.list}
              exerciseTime={item.time}
              style={{paddingLeft: 12}}
              isPath={true}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseLibrary;
