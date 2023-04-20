import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {CSearchBar, CExercise} from '../../../components/index';
import {
  Search,
  BackArrow,
  exercise1,
  exercise2,
  exercise7,
  download,
} from '../../../assets/index';
import styles from './VideoLibraryStyles';

const VideoLibrary = ({navigation}) => {
  const [exerciseList, setExerciseList] = useState([
    {
      id: 1,
      img: exercise1,
      list: 'Basic helpful tips to get you started',
      time: '04:30 ',
    },
    {
      id: 2,
      img: exercise2,
      list: 'Amazing techniques',
      time: '6:12',
    },
    {
      id: 3,
      img: exercise7,
      list: 'Exercises not to be missed',
      time: '1:32:12',
    },
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        icons={true}
        searchIcon={Search}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Video Library'}
      />
      <ScrollView contentContainerStyle={{padding: 20}}>
        {exerciseList.map((item, index) => (
          <CExercise
            imageUrl={item.img}
            exerciseName={item.list}
            exerciseTime={item.time}
            arrowImg={download}
            imgStyle={{width: 16, height: 16}}
            isPath={true}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoLibrary;
