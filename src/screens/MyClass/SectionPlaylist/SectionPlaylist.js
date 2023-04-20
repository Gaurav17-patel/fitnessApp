import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
// import Video from 'react-native-video';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './SectionPlaylistStyles';
import {CExercise, CImage, LabelText} from '../../../components';
import {
  ringIcon,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise8,
  WhiteBackArrow,
} from '../../../assets/index';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Vimeo} from 'react-native-vimeo-iframe';
import {WebView} from 'react-native-webview';
import YoutubeIframe from 'react-native-youtube-iframe';
import VideoPlayer from 'react-native-video-controls';

const SectionPlaylist = ({navigation, route}) => {
  const playerRef = useRef();
  const videoLists = route?.params?.listOfExercises;
  const [playYoutube, setPlayYoutube] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [exerciseList, setExerciseList] = useState([]);
  const [playSelectedVideo, setPlaySelectedVideo] = useState([]);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  console.log({videoLists});
  useEffect(() => {

    if (videoLists) {
      setExerciseList(videoLists);
      setPlaySelectedVideo(videoLists[0]?.videoID);
    }
  }, [videoLists]);

  useMemo(() => {
    console.log('exerciseList', exerciseList);
  }, [exerciseList]);

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        {playYoutube ? (
          <YoutubePlayer
            ref={playerRef}
            height={230}
            // width={'100%'}
            videoId={playSelectedVideo}
            play={false}
            onChangeState={event => console.log(event)}
            onReady={() => console.log('ready')}
            onError={e => console.log(e)}
            onPlaybackQualityChange={q => console.log(q)}
            // volume={50}
            // playbackRate={1}
            // initialPlayerParams={{
            //   cc_lang_pref: 'us',
            //   showClosedCaptions: true,
            // }}
          >
            <Text style={{color: 'red', fontSize: 23}}>Hello</Text>
          </YoutubePlayer>
        ) : (
          <SafeAreaView style={{flex: 0.6, backgroundColor: '#000000'}}>
            <Vimeo
              videoId={'76979871'}
              onReady={() => console.log('Video is ready')}
              onPlay={() => console.log('Video is playing')}
              onPlayProgress={data => console.log('Video progress data:', data)}
              onFinish={() => console.log('Video is finished')}
              loop={false}
              autoPlay={false}
              controls={true}
              speed={false}
              time={'0m0s'}
            />
          </SafeAreaView>
        )}
        <View style={{padding: 20}}>
          <LabelText label={'6 EXERCISES'} labelStyle={styles.headerText} />
          <LabelText
            label={'Dynamic Full Body Neural Warm up'}
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
        <FlatList
          data={exerciseList && exerciseList}
          showsVerticalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={{width: '100%', marginTop: 12}}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onFocus={() => setIsFocus(true)}
                onPress={() => setPlaySelectedVideo(item?.videoID)}>
                <CExercise
                  imageUrl={item?.thumbnail}
                  exerciseName={item?.exercise_name}
                  exerciseTime={'30 sec'}
                  isCheckBox={false}
                  style={[
                    styles.videoExercise,
                    isFocus && {backgroundColor: 'red'},
                  ]}
                  isPath={false}
                />
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default SectionPlaylist;
