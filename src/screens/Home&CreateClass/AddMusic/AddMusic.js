import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {CSearchBar, CTemplate, CImage} from '../../../components/index';
import styles from './AddMusicStyles';
import {
  BackArrow,
  music1,
  music2,
  music3,
  music4,
  playSound,
  pauseSound,
} from '../../../assets/index';
import {Colors} from '../../../theme/colors';
import Sound from 'react-native-sound';
import Video from 'react-native-video';
import {useIsFocused} from '@react-navigation/native';
import {Get_item} from '../../../utils/AsyncStorage';
import {get_exercise_list, get_music_list} from '../../../utils/ApiConstants';
import {useDispatch, useSelector} from 'react-redux';
import {loader_action} from '../../../redux/action/action';
import {GetRequest} from '../../../utils/ApiRequest';
import {add_exercise_to_section} from '../../../redux/action-types/action-types';
import {FlatList} from 'react-native-gesture-handler';

export const searchHandler = (searchkey, searchList) => {
  if (!searchkey) {
    return searchList;
  } else {
    searchkey = searchkey.toLowerCase();
    searchList = searchList?.filter(e1 => {
      console.log('e1', e1);
      let searchValue = e1.title.toLowerCase();
      return searchValue.indexOf(searchkey) !== -1;
    });
    console.log({searchList});
    return searchList;
  }
};

const AddMusic = ({navigation, route}) => {
  const isFocused = useIsFocused();
  Sound.setCategory('Playback', true);
  const dispatch = useDispatch();
  const exerciseTemplateList = useSelector(
    state => state.add_selected_exercise_to_section,
  );
  const sectionID = route?.params?.sectionID;
  const [userToken, setUserToken] = useState('');
  const [selectedUserID, setSelectedUserID] = useState('');
  const [musicList, setMusicList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (isFocused) {
      getUserData();
    }
  }, [isFocused]);

  const getUserData = () => {
    Get_item('userData')
      .then(res => {
        let loggedUserData = JSON.parse(res);
        console.log('loggedUserData', loggedUserData);
        if (loggedUserData) {
          setUserToken(loggedUserData?.token);
          setSelectedUserID(loggedUserData?.data?.id);
          getMusicList(loggedUserData?.token);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const getMusicList = async token => {
    try {
      let sectionId = 1;
      dispatch(loader_action(true));
      await GetRequest(`${get_music_list}`, token).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          dispatch(loader_action(false));
          setMusicList(res?.data?.data);
        } else {
          dispatch(loader_action(false));
        }
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const [trackProgress, setTrackProgress] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(-1);

  const playTrack = item => {
    let isStopped = false;
    let updatedTrack = musicList.map((val, index) => {
      if (item === index) {
        isStopped = val.play_sound ? false : true;
        return {
          ...val,
          play_sound: isStopped,
        };
      }
      return {...val, play_sound: true};
    });
    if (isStopped) {
      resetTrackPlay();
    } else {
      setMusicList(updatedTrack);
      setSelectedTrack(item);
    }
  };

  const resetTrackPlay = () => {
    setTrackProgress(-1);
    setSelectedTrack(-1);
    setMusicList(t => {
      return t.map(e => ({...e, play_sound: true}));
    });
  };

  const onTrackProgress = info => {
    const currentTime = !Number.isNaN(info?.currentTime)
      ? Math.floor(info.currentTime)
      : -1;
    const totalTime = !Number.isNaN(info?.seekableDuration)
      ? Math.floor(info.seekableDuration)
      : -1;
    if (currentTime !== -1 && totalTime !== -1) {
      setTrackProgress(Math.floor((currentTime / totalTime) * 100));
    }
  };

  const addMusicToExercise = selectedMusic => {
    try {
      const result = exerciseTemplateList?.map((item, index) => {
        if (item?.sectionId === sectionID) {
          item.music = {...selectedMusic};
          return item;
        }
        return item;
      });
      dispatch({
        type: add_exercise_to_section,
        payload: result,
      });
      navigation.navigate('ExerciseTemplateLibrary');
    } catch (error) {
      console.log('error', error);
    }
  };

  const getFindUserVal = e => {
    setSearchText(e);
  };

  const dataList = useMemo(
    () => searchHandler(searchText, musicList),
    [searchText, musicList],
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        placeHolderColor={Colors.placeholder_color}
        searchPlaceHolder={'Search music'}
        onChangeText={text => getFindUserVal(text)}
        value={searchText}
      />
      <FlatList
        data={dataList}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              key={index}
              onPress={() => addMusicToExercise(item)}
              // navigation.navigate('ExerciseTemplateLibrary', {
              //   songname: item?.title,
              //   songID: item?.id,
              // })
            >
              {item.play_sound === false && (
                <Video
                  source={{uri: item.audio_url}}
                  paused={item.play_sound}
                  onProgress={onTrackProgress}
                  onEnd={resetTrackPlay}
                  audioOnly
                />
              )}
              <CTemplate
                imageUrl={{uri: item.album_art_url}}
                imgStyles={{
                  width: 42,
                  height: 42,
                  resizeMode: 'stretch',
                  borderRadius: 10,
                }}
                headerText={item.title}
                bodyText={item.artist}
                playSound={true}
                playProgress={trackProgress}
                selectedIndex={selectedTrack}
                index={index}
                playIcon={item.play_sound === false ? pauseSound : playSound}
                onPress={() => playTrack(index)}
              />
            </TouchableOpacity>
          );
        }}
      />
      {/* <ScrollView style={{padding: 0, alignSelf: 'center'}}>
        {dataList.map((item, index) => {
          console.log('item', item);
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              key={index}
              onPress={() => addMusicToExercise(item)}
              // navigation.navigate('ExerciseTemplateLibrary', {
              //   songname: item?.title,
              //   songID: item?.id,
              // })
            >
              {item.play_sound === false && (
                <Video
                  source={{uri: item.audio_url}}
                  paused={item.play_sound}
                  onProgress={onTrackProgress}
                  onEnd={resetTrackPlay}
                  audioOnly
                />
              )}
              <CTemplate
                imageUrl={{uri: item.album_art_url}}
                imgStyles={{
                  width: 42,
                  height: 42,
                  resizeMode: 'stretch',
                  borderRadius: 10,
                }}
                headerText={item.title}
                bodyText={item.artist}
                playSound={true}
                playProgress={trackProgress}
                selectedIndex={selectedTrack}
                index={index}
                playIcon={item.play_sound === false ? pauseSound : playSound}
                onPress={() => playTrack(index)}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView> */}
    </SafeAreaView>
  );
};
export default AddMusic;
