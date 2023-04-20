import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {CSearchBar, CExercise} from '../../../components/index';
import {
  BackArrow,
  Search,
  exercise1,
  exercise2,
  exercise3,
  exercise4,
} from '../../../assets/index';
import {LabelText} from '../../../components/index';
import {Colors} from '../../../theme/colors';
import styles from './AddExerciseStyles';
import {Get_item} from '../../../utils/AsyncStorage';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {loader_action} from '../../../redux/action/action';
import {GetRequest} from '../../../utils/ApiRequest';
import {get_exercise_list} from '../../../utils/ApiConstants';
import CButton from '../../../components/CButton';
import {add_exercise_to_section} from '../../../redux/action-types/action-types';
import Toast from 'react-native-simple-toast';

const {width, height} = Dimensions.get('window');

const AddExercise = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const exerciseTemplateList = useSelector(
    state => state.add_selected_exercise_to_section,
  );
  const sectionID = route?.params?.sectionID;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedTabID, setSelectedTabID] = useState(0);
  const [selectedUserID, setSelectedUserID] = useState('');
  const [userToken, setUserToken] = useState('');
  // const [sectionID, setSectionID] = useState(route?.params?.sectionID);
  const [exerciseList, setExerciseList] = useState([]);
  const [exerciseSectionList, setExerciseSectionList] = useState([]);
  const [specificSelectedExerciseList, setSpecificSelectedExerciseList] =
    useState([]);
  const [checked, isChecked] = useState(false);

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
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const getExerciseList = async () => {
    try {
      dispatch(loader_action(true));
      await GetRequest(`${get_exercise_list}/${sectionID}`, userToken).then(
        res => {
          console.log('res*(*(*())');
          if (res.data.code === 200) {
            dispatch(loader_action(false));
            setExerciseList(res?.data?.data[0]);
            setExerciseSectionList(Object.keys(res?.data?.data[0]));
            setSpecificSelectedExerciseList(
              res?.data?.data[0][Object.keys(res?.data?.data[0])[0]],
            );
            setSelectedTabID(0);
          } else {
            dispatch(loader_action(false));
          }
        },
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  useMemo(() => {
    if (exerciseTemplateList) {
      console.log('exerciseTemplateList', exerciseTemplateList);
    }
  }, [exerciseTemplateList]);

  useMemo(() => {
    console.log('usertoken', userToken);
    console.log('sectionID', sectionID);
    if (sectionID && userToken) {
      getExerciseList();
    }
  }, [sectionID, userToken]);

  const selectExercise = useCallback(
    item => {
      console.log('item*()*()*()', item);
      const newObj = {...exerciseList};
      const currentExersice = exerciseSectionList[selectedTabID];
      newObj[currentExersice] = newObj[currentExersice].map((val, index) => ({
        ...val,
        isSelected: val?.ex_id === item?.ex_id,
      }));
      setExerciseList({...newObj});
      setSpecificSelectedExerciseList([...newObj[currentExersice]]);
      setSelectedTabID(selectedTabID);
    },
    [exerciseList, exerciseSectionList, selectedTabID],
  );

  const handleSelecetedExercise = useCallback(
    (item, index) => {
      setSpecificSelectedExerciseList([...exerciseList[item]]);
      setSelectedTabID(index);
    },
    [exerciseList],
  );

  const renderListOfExercies = useMemo(
    () =>
      specificSelectedExerciseList?.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => selectExercise(item)}>
          <CExercise
            imageUrl={item.thumbnail}
            exerciseName={item.exercise_name}
            isCheckBox={true}
            isChecked={item.isSelected}
            onClick={() => selectExercise(item)}
            isPath={false}
          />
        </TouchableOpacity>
      )),
    [specificSelectedExerciseList, selectExercise],
  );

  const saveExercises = () => {
    let values = [];
    for (const property in exerciseList) {
      let results = exerciseList[property]?.filter(x => {
        if (x.isSelected) {
          x.sectionId = sectionID;
          return x;
        }
      });
      values.push(...results);
    }
    if (values.length === 6) {
      const result = exerciseTemplateList?.map((item, index) => {
        if (item?.sectionId === sectionID) {
          item.data = [...values];
          return item;
        }
        return item;
      });
      dispatch({
        type: add_exercise_to_section,
        payload: result,
      });
      navigation.navigate('ExerciseTemplateLibrary');
    } else {
      Toast.show('select atleast 1 exercise from the each tab.!', Toast.LONG);
    }
  };

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
        inputText={'Choose Exercise'}
      />
      <View style={{padding: 20, marginTop: 10}}>
        <Text style={styles.detailsText}>
          Select{' '}
          <Text
            style={{
              color: Colors.welcome_text,
            }}>
            one exercise
          </Text>{' '}
          <Text>from each tab.</Text>
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}>
          {exerciseSectionList?.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleSelecetedExercise(item, index)}
              activeOpacity={0.6}
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor:
                  selectedTabID === index
                    ? Colors.forgot_psw
                    : Colors.border_color,
                borderRadius: 8,
                flexDirection: 'row',
                backgroundColor:
                  selectedTabID === index
                    ? Colors.selectedItem
                    : Colors.white_color,
                marginRight: 10,
              }}
              key={index}>
              <LabelText label={item} labelStyle={styles.headerScrollList} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView contentContainerStyle={{marginTop: 20}}>
          {renderListOfExercies}
        </ScrollView>
      </View>
      <CButton
        btnText={'Submit exercise'}
        style={styles.saveBtnStyle}
        btnTextStyle={styles.btnText}
        btnOnPress={saveExercises}
        // disabled={exerciseTemplateList.length === 0 && !selectedSongId}
      />
    </SafeAreaView>
  );
};

export default AddExercise;
