import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  CHeader,
  LabelText,
  CImage,
  CExercise,
  CButton,
} from '../../../components/index';
import {Colors} from '../../../theme/colors';
import styles from './ExerciseTemplateLibraryStyles';
import {
  bestDay,
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  arrowRight,
  chooseSong,
  deleteIcon,
  songIcon,
} from '../../../assets/index';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GetRequest, PostRequest} from '../../../utils/ApiRequest';
import {
  add_exercise,
  exercise_template,
  get_exercise_template_list,
  show_templates,
} from '../../../utils/ApiConstants';
import {Get_item} from '../../../utils/AsyncStorage';
import {
  get_exercise_template,
  loader_action,
} from '../../../redux/action/action';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {add_exercise_to_section} from '../../../redux/action-types/action-types';
import axios from 'axios';

const ExerciseTemplateLibrary = ({navigation, route}) => {
  const dispatch = useDispatch();
  const songId = route?.params?.songID;
  const classRes = useSelector(state => state.get_class_res);
  const exerciseTemplateList = useSelector(
    state => state.add_selected_exercise_to_section,
  );
  const createdClassID = route?.params?.createClasid;
  // const exerciseTemplates = useSelector(state => state.get_exercise_templates);
  // const [exerciseTemplateList, setExerciseTemplateList] = useState([]);
  const [token, setToken] = useState('');
  const [classID, setClassID] = useState('');
  const [userID, setUserID] = useState('');
  const [selectedSongId, setSelectedSongId] = useState('');
  const [createPayload, setCreatePayload] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    Get_item('userData')
      .then(res => {
        let loggedUserData = JSON.parse(res);
        console.log('loggedUserData', loggedUserData);
        if (loggedUserData) {
          setUserID(loggedUserData?.data?.id);
          setToken(loggedUserData?.token);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useMemo(() => {
    if (songId) {
      setSelectedSongId(songId);
    }
  }, [songId]);

  // const getExerciseTemplateList = async token => {
  //   console.log('token', token);
  //   console.log(
  //     '`${get_exercise_template_list}/${createdClassID}`',
  //     `${get_exercise_template_list}/${createdClassID}`,
  //   );
  //   try {
  //     dispatch(loader_action(true));
  //     await GetRequest(
  //       `${get_exercise_template_list}/${createdClassID}`,
  //       token,
  //     ).then(res => {
  //       console.log('res', res);
  //       if (res.data.code === 200) {
  //         dispatch(loader_action(false));
  //         Toast.show(res.data.message, Toast.LONG);
  // if (Array.isArray(res?.data?.data) && res.data.data.length > 0) {
  //   let data = res.data.data.map(e => ({
  //     sectionName: e?.sectionName,
  //     data: e?.exercises ?? [],
  //     music: e?.music,
  //     sectionId: e?.id,
  //   }));
  //   setExerciseTemplateList(data);
  // }
  // } else {
  // Toast.show(res.data.message, Toast.LONG);
  // dispatch(loader_action(false));
  // }
  //     });
  //   } catch (error) {
  //     dispatch(loader_action(false));
  //     console.log('error', error);
  //   }
  // };

  const getAllTemplates = async () => {
    try {
      dispatch(loader_action(true));
      await GetRequest(show_templates, token).then(res => {
        if (res.data.code === 200) {
          dispatch(loader_action(false));
          Toast.show(res.data.message, Toast.LONG);
          if (Array.isArray(res?.data?.data) && res.data.data.length > 0) {
            let data = res.data.data.map(e => ({
              sectionId: e?.id,
              sectionName: e?.section,
              data: [],
              music: {},
            }));
            dispatch({
              type: add_exercise_to_section,
              payload: data,
            });
            // setExerciseTemplateList(data);
          }
        } else {
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
        }
      });
    } catch (error) {
      dispatch(loader_action(false));
      console.log('error', error);
    }
  };

  useEffect(() => {
    console.log('createdClassID', createdClassID);
    if (createdClassID) {
      setClassID(createdClassID);
    }
  }, [createdClassID]);

  useMemo(() => {
    if (exerciseTemplateList) {
      console.log('exerciseTemplateList', exerciseTemplateList);
    }
  }, [exerciseTemplateList]);

  useMemo(() => {
    if (token) {
      getAllTemplates(token);
    }
  }, [token]);

  const saveClass = async () => {
    console.log({exerciseTemplateList});
    let exercises = [];
    exerciseTemplateList.map((item, index) => {
      console.log('item**', !item.music);
      let selectedExercisesID = [];
      if (item.data.length < 6) {
        Toast.show('Please select 6 exercises from the each tab !', Toast.LONG);
      } else if (Object.keys(item?.music).length === 0) {
        Toast.show('Please select song for each sections', Toast.LONG);
      } else {
        console.log('else');
        item.data.map((e, index) => {
          selectedExercisesID.push(e.ex_id);
        });
        exercises.push({
          music_id: item?.music?.id,
          section_id: item.sectionId,
          user_id: userID && userID,
          class_id: classID && classID,
          exercise_array: selectedExercisesID,
        });
        console.log('exercises', exercises);
        try {
          PostRequest(add_exercise, {exercises}, token).then(res => {
            console.log('res>>>', res);
            if (res?.data?.code === 200) {
              Toast.show(res.data.message, Toast.LONG);
              navigation.navigate('ConfirmationPage', {
                fromScreen: 'ExerciseTemplateLibrary',
              });
            } else {
              Toast.show('res.data.message', Toast.LONG);
            }
          });
        } catch (error) {
          console.log('error', error);
        }
      }
    });
  };

  const rightSwipe = selectOrder => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#EC7666',
          justifyContent: 'center',
          alignItems: 'center',
          width: '15%',
        }}
        onPress={() => deleteExercise(selectOrder)}>
        <CImage imgUrl={deleteIcon} style={{height: 30, width: 30}} />
      </TouchableOpacity>
    );
  };

  const deleteExercise = async selectedExercise => {
    console.log({selectedExercise, sectionIndex});
    console.log({exerciseTemplateList});
    // return false;
    // try {
    //   console.log('selectedExercise', selectedExercise);
    //   await axios
    //     .delete(
    //       `http://ec2-3-235-29-132.compute-1.amazonaws.com/api/deleteExercise/${4}`,
    //     )
    //     .then(result => {
    //       if (res.data.code === 200) {
    //         Toast.show(res.data.message, Toast.LONG);
    //       } else {
    //         Toast.show(res.data.message, Toast.LONG);
    //       }
    //     });
    // } catch (error) {
    //   console.log('error', error);
    // }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CHeader
        backPress={() => navigation.goBack()}
        headerText={'Exercise Template'}
        bodyText={'Step 3 of 3'}
        progressBarStep={0.9}
        progressBarLineColor={Colors.ProgressBar_Line_Color}
        progressStyle={{marginTop: 21}}
        style={{marginTop: 44}}
      />
      <View style={styles.container}>
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 60}}> */}
        <SectionList
          sections={exerciseTemplateList}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index}) => {
            console.log({item});
            return (
              <>
                <GestureHandlerRootView key={index}>
                  {/* <Swipeable
                    renderRightActions={() => rightSwipe(item)}
                    onSwipeableRightOpen={() => {
                      console.log('Swipe');
                    }}> */}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SectionPlaylist', {
                        listOfExercises: exerciseTemplateList.find(
                          x => x.sectionId === item.sectionId,
                        )?.data,
                      })
                    }
                    style={{
                      // borderBottomWidth: 1,
                      // borderColor: Colors.border_color,
                      backgroundColor: '#FFFFFF',
                      borderRadius: 8,
                      paddingBottom: 10,
                    }}>
                    <CExercise
                      imageUrl={item?.thumbnail}
                      exerciseName={item?.exercise_name}
                      exerciseTime={'30 sec'}
                      arrowImg={arrowRight}
                      style={{paddingLeft: 12}}
                      isPath={false}
                    />
                  </TouchableOpacity>
                  {/* </Swipeable> */}
                </GestureHandlerRootView>
              </>
            );
          }}
          renderSectionHeader={({
            section: {sectionName, data, music, sectionId},
          }) => (
            <View style={{padding: 18}}>
              <LabelText
                label={`${`${data?.length}/6 EXERCISES`}`}
                labelStyle={styles.headerText}
              />
              <LabelText label={sectionName} labelStyle={styles.headerText2} />
              <TouchableOpacity
                style={{marginTop: 6}}
                onPress={() =>
                  navigation.navigate('AddMusic', {
                    sectionID: sectionId,
                  })
                }
                disabled={music?.title}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <CImage imgUrl={songIcon} style={{height: 10, width: 10}} />
                  <LabelText
                    label={music?.title ? music?.title : 'Choose a song'}
                    labelStyle={
                      music?.title
                        ? styles.disableChooseSong
                        : styles.chooseSong
                    }
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          renderSectionFooter={({section: {sectionId, data}}) => (
            <TouchableOpacity
              style={{
                paddingTop: 5,
                paddingLeft: 8,
                backgroundColor: '#FFFFFF',
                paddingBottom: 10,
              }}
              onPress={() =>
                navigation.navigate('AddExercise', {
                  sectionID: sectionId,
                })
              }
              disabled={data.length === 6}>
              <LabelText
                label={'+ Add exercise'}
                labelStyle={
                  data.length === 6
                    ? styles.disableAddExercise
                    : styles.addExercise
                }
              />
            </TouchableOpacity>
          )}
          stickySectionHeadersEnabled={false}
        />
        <CButton
          btnText={'Save class'}
          style={styles.saveBtnStyle}
          btnTextStyle={styles.btnText}
          btnOnPress={saveClass}
          // disabled={!selectedSongId}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExerciseTemplateLibrary;
