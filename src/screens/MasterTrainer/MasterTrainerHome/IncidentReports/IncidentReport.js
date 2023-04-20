import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from 'react-native';
import React, {useEffect, useState, useMemo, useRef} from 'react';
import styles from './IncidentReportsStyles';
import {
  CImage,
  LabelText,
  CDateTimeDropDown,
  CDropDown,
  CInput,
  CButton,
} from '../../../../components/index';
import {BackArrow, downArrow, contactUs} from '../../../../assets/index';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/colors';
import CheckBox from '@react-native-community/checkbox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {Get_item} from '../../../../utils/AsyncStorage';
import {
  add_incident_details,
  loader_action,
} from '../../../../redux/action/action';
import Toast from 'react-native-simple-toast';

const IncidentReport = ({navigation}) => {
  const dispatch = useDispatch();
  const incidentRecord = useSelector(state => state.user_incident_details);

  const refRBSheet = useRef();
  const SelectPicker = ({takeImage, chooseImage}) => {
    return (
      <View style={{flex: 1, paddingTop: 10}}>
        <TouchableOpacity style={styles.rbSheetButton} onPress={takeImage}>
          <Text style={styles.rbSheetsBtnText}>Take Photo</Text>
        </TouchableOpacity>
        <View style={styles.rbSheetBorderStyle} />
        <TouchableOpacity style={styles.rbSheetButton} onPress={chooseImage}>
          <Text style={styles.rbSheetsBtnText}>Choose Photo</Text>
        </TouchableOpacity>
        <View style={styles.rbSheetBorderStyle} />
        <TouchableOpacity
          style={styles.rbSheetCancleBtn}
          onPress={() => refRBSheet.current.close()}>
          <Text style={styles.rbSheetsBtnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [fromTime, setFromTime] = useState(new Date());
  const [openTimeTo, setOpenTimeTo] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'John Doe', value: 'John Doe'},
    {label: 'John', value: 'John'},
  ]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [incidentNote, setIncidentNote] = useState('');
  const [disable, setDisable] = useState(false);
  const [errNoteMsg, setNoteErrMsg] = useState('');
  const [userImage, setUserImage] = useState('');
  const [userId, setUserId] = useState('');
  const [userToken, setUserToken] = useState('');
  const [selectedImageName, setSelectedImageName] = useState('');

  const datePickerRef = useRef();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getUserData();
  }, []);

  const getUserData = () => {
    Get_item('userData')
      .then(res => {
        let loggedUserData = JSON.parse(res);
        if (loggedUserData) {
          setUserId(loggedUserData?.data?.id);
          setUserToken(loggedUserData?.token);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useMemo(() => {
    let incidentNoteRegex = /^[^-\s][a-zA-Z0-9_.\s-]+$/;
    if (incidentNote === '') {
      setNoteErrMsg('Please enter incident');
      setDisable(false);
    } else if (!incidentNoteRegex.test(incidentNote)) {
      setNoteErrMsg('Please enter value incident');
      setDisable(false);
    } else {
      setNoteErrMsg('');
      if (date && fromTime && value && userImage && toggleCheckBox) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    }
  }, [incidentNote, date, fromTime, value, userImage, toggleCheckBox]);

  useMemo(() => {
    if (incidentRecord) {
      if (incidentRecord.code === 200) {
        console.log("incidentRecord", incidentRecord);
        dispatch(loader_action(false));
        setValue(null);
        setUserImage('');
        setIncidentNote('');
        setToggleCheckBox(false);
        setSelectedImageName('')
        // navigation.goBack();
        Toast.show(incidentRecord.message, Toast.LONG);
      } else {
        dispatch(loader_action(false));
        Toast.show(incidentRecord.message, Toast.LONG);
      }
    }
  }, [incidentRecord]);

  const pressNext = () => {
    let selectedDate = moment(date).format('DD-MM-YYYY');
    let selectedTime = moment(fromTime).format('LT');
    let data = {
      user_id: userId,
      date: selectedDate,
      time: selectedTime,
      registrant: value,
      incident: incidentNote,
      picture: userImage,
    };
    console.log("userToken", userToken);
    dispatch(add_incident_details(data, userToken));
  };

  const closeDropDown = () => {
    setOpen(false);
  };

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log('image', image);
      if (image) {
        setSelectedImageName(image.filename);
        setUserImage(image.data);
        refRBSheet.current.close();
      }
    });
  };

  const UploadCameraImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log('image', image);
      if (image) {
        let generateImageName =
          Math.random().toString(12).substr(3, 15) + '.png';
        setSelectedImageName(
          image.filename ?? generateImageName ?? image.filename,
        );
        setUserImage(image.data);
        refRBSheet.current.close();
      }
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CImage imgUrl={BackArrow} style={{height: 12, width: 12}} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            width: '95%',
          }}>
          <View style={{width: '45%'}}>
            <LabelText
              label={'Report Incident'}
              labelStyle={{
                fontSize: dynamicSize(18),
                fontFamily: Fonts.fontBold,
                color: Colors.forgot_psw,
              }}
            />
          </View>
          <TouchableOpacity
            style={{width: '50%', alignItems: 'flex-end'}}
            onPress={() => navigation.navigate('History')}>
            <LabelText
              label={'History'}
              labelStyle={{
                fontSize: dynamicSize(18),
                fontFamily: Fonts.fontBold,
                color: Colors.placeholder_color,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1.2,
          width: '50%',
          borderColor: Colors.forgot_psw,
        }}
      />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <ScrollView
          style={{padding: 20, marginTop: 8}}
          contentContainerStyle={{paddingBottom: 60}}>
          <LabelText
            label={'Fill the form below report an incident'}
            labelStyle={styles.headingText}
          />
          <CDateTimeDropDown
            ref={datePickerRef}
            inputHeading={'Date'}
            placeholder={'23 January 2021'}
            editable={false}
            value={moment(date).format('LL')}
            mode={'date'}
            downIcon={downArrow}
            onPress={() => setOpenDate(!openDate)}
            openPicker={openDate}
            showDate={date}
            onConfirm={date => {
              setOpenDate(false);
              setFromTime(date);
              setDate(date);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
            datePlaceholder2={{
              fontFamily: Fonts.fontMedium,
              fontSize: dynamicSize(16),
            }}
          />
          <CDateTimeDropDown
            inputHeading={'Time'}
            placeholder={'9:00 PM'}
            editable={false}
            value={moment(fromTime).format('LT')}
            mode={'time'}
            downIcon={downArrow}
            onPress={() => setOpenTimeTo(true)}
            openPicker={openTimeTo}
            showDate={fromTime}
            onConfirm={date => {
              setOpenTimeTo(false);
              setFromTime(date);
            }}
            onCancel={() => {
              setOpenTimeTo(false);
            }}
            datePlaceholder2={{
              fontFamily: Fonts.fontMedium,
              fontSize: dynamicSize(16),
            }}
          />
          <LabelText label={'Registrant'} labelStyle={styles.inputText} />
          <CDropDown
            openPicker={open}
            pickerValue={value}
            pickerItems={items}
            placeHolder={'John Doe'}
            setOpenPicker={setOpen}
            setPickerValue={setValue}
            setPickerItems={setItems}
          />
          <CInput
            showPlaceholder={'Describe the incident'}
            inputStyle={styles.BioData}
            label={'Incident'}
            value={incidentNote}
            onChangeText={text => {
              setIncidentNote(text);
            }}
            textAlignVertical="top"
            multiline={true}
            numberOfLines={6}
            labelTextStyle={styles.userNameText}
            placeholderColor={Colors.placeholder_color}
            onFocus={closeDropDown}
          />
          {errNoteMsg.length > 0 && (
            <Text style={styles.errMsg}>{errNoteMsg}</Text>
          )}
          <Text style={styles.detailsText}>
            Please upload{' '}
            <Text
              style={{
                color: Colors.welcome_text,
              }}>
              photo
            </Text>{' '}
            <Text>related to the incident</Text>
          </Text>
          <TouchableOpacity
            onPress={() =>
              selectedImageName === '' && refRBSheet.current.open()
            }
            style={{
              marginTop: 20,
              borderWidth: 1,
              borderStyle: 'dashed',
              padding: 15,
              borderRadius: 6,
              borderColor: Colors.forgot_psw,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: Colors.forgot_psw,
                fontSize: dynamicSize(14),
                fontFamily: Fonts.fontBold,
              }}>
              {userImage && userImage != undefined
                ? selectedImageName
                : '+ Upload photo'}
            </Text>
          </TouchableOpacity>
          <View
            style={{marginTop: 40, flexDirection: 'row', alignItems: 'center'}}>
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
              label={'I hereby acknowledge that all information is true.'}
              labelStyle={styles.checkBoxText}
            />
          </View>
          <CButton
            btnText={`Submit`}
            btnTextStyle={styles.nextBtnText}
            // style={styles.nextBtnStyle}
            style={disable ? styles.nextBtnStyle : styles.disableBtn}
            btnOnPress={pressNext}
            disabled={!disable}
          />
        </ScrollView>
      </KeyboardAwareScrollView>
      <RBSheet
        ref={refRBSheet}
        height={230}
        openDuration={250}
        closeDuration={250}
        customStyles={{
          container: {
            width: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        <SelectPicker takeImage={UploadCameraImage} chooseImage={uploadImage} />
      </RBSheet>
    </SafeAreaView>
  );
};

export default IncidentReport;
