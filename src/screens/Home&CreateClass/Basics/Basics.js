import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  LogBox,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import styles from './BasicsStyles';
import {
  CHeader,
  LabelText,
  CInput,
  CDropDown,
  CImage,
  CCheckBox,
  CButton,
  CDateTimeDropDown,
} from '../../../components/index';
import {Colors} from '../../../theme/colors';
import {Sync, downArrow} from '../../../assets/index';
import DatePicker from 'react-native-date-picker';
import {dynamicSize} from '../../../constant/DynamicFontSize';
import {ButtonGroup, Button} from 'react-native-elements';
import {Fonts} from '../../../constant';
import {Add_item, Get_item} from '../../../utils/AsyncStorage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CSynceCalender from '../../../components/CSynceCalender';
import {loader_action, basics_detail} from '../../../redux/action/action';
import {PostRequest} from '../../../utils/ApiRequest';
import {basics_details} from '../../../utils/ApiConstants';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

const Basics = ({navigation}) => {
  const dispatch = useDispatch();
  const basicsDetails = useSelector(state => state.user_basics_details);
  const [openDate, setOpenDate] = useState(false);
  const [openTimeFrom, setOpenTimeFrom] = useState(false);
  const [openTimeTo, setOpenTimeTo] = useState(false);
  const [date, setDate] = useState(new Date());
  const [fromTime, setFromTime] = useState(new Date());
  const [toTime, setToTime] = useState(new Date());
  const [className, setClassName] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [bookingLink, setBookingLink] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [errNoteMsg, setNoteErrMsg] = useState('');
  const [errClassMsg, setClassErrMsg] = useState('');
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [selectClass, setSelectClass] = useState([
    {duration: 'Daily', selected: false},
    {duration: 'Weekly', selected: true},
    {duration: 'Monthly', selected: false},
    {duration: 'Yearly', selected: false},
    {duration: 'Never', selected: false},
  ]);
  const [bookClass, setBookClass] = useState([
    {toggleCheckBox: false, value: '', placeholder: 'Enter email'},
    {toggleCheckBox: false, value: '', placeholder: 'Enter mobile'},
    {toggleCheckBox: false, value: '', placeholder: 'Enter booking link'},
  ]);
  const [token, setToken] = useState('');
  const [currentIndex, setcurrentIndex] = useState(-1);
  const [userId, setUserId] = useState('');
  const [eventTitle, setEventTitle] = useState('Default event');
  const [disable, setDisable] = useState(false);
  const [disableNote, setDisableNote] = useState(false);
  const [disableClass, setDisableClass] = useState(false);
  const [basicsDetailsRes, setBasicsDetails] = useState([]);
  const [selectedTimeButton, setSelectedTimeButton] = useState(30);

  const spaceRegex = /^[^-\s][a-zA-Z0-9_.\s-]+$/;

  const utcDateToString = momentInUTC => {
    let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    return s;
  };

  const addEventToCalendar = () => {
    const eventConfig = {
      title: eventTitle,
      startDate: fromTime,
      endDate: utcDateToString(moment.utc(toTime).add('hours')),
      notes: 'Default Event Description',
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(eventInfo => {
        // alert(JSON.stringify(eventInfo));
      })
      .catch(error => {
        // alert('Error ', error);
      });
  };

  const setToggleCheckBox = (index, validItem) => {
    setcurrentIndex(index);
    let selected = bookClass.map((item, idx) => {
      if (idx === index) return {...item, toggleCheckBox: true, value: ''};
      else return {...item, toggleCheckBox: false, value: ''};
    });
    setBookClass(selected);
  };

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
  let specialNoteRegex = /^[^-\s][a-zA-Z0-9_.\s-]+$/;

  useMemo(() => {
    if (bookClass && currentIndex != -1) {
      bookClass.map((validItem, index) => {
        if (currentIndex === index) {
          if (index === 0) {
            if (validItem.value === '') {
              setClassErrMsg('Please enter email');
              setDisable(false);
            } else if (!emailRegex.test(validItem.value)) {
              setClassErrMsg('Please enter valid email');
              setDisable(false);
            } else {
              setClassErrMsg('');
              setDisable(true);
            }
          } else if (index === 1) {
            if (validItem.value === '') {
              setClassErrMsg('Please enter mobile number');
              setDisable(false);
            } else if (validItem.value.length < 10) {
              setClassErrMsg('Please enter valid mobile number');
              setDisable(false);
            } else {
              setClassErrMsg('');
              setDisable(true);
            }
          } else if (index === 2) {
            if (validItem.value === '') {
              setClassErrMsg('Please enter booking link');
              setDisable(false);
            } else {
              setClassErrMsg('');
              setDisable(true);
            }
          }
        }
      });
    }
  }, [currentIndex, bookClass]);

  const validateClassName = () => {
    if (className == '') {
      setErrMsg('Please enter class name');
      setDisableClass(false);
    } else if (!spaceRegex.test(className)) {
      setErrMsg('Space does not allow');
      setDisableClass(false);
    } else {
      setErrMsg('');
      setDisableClass(true);
    }
  };

  const validateSpecialNote = () => {
    if (specialNote == '') {
      setNoteErrMsg('Please enter special note');
      setDisableNote(false);
    } else if (!spaceRegex.test(specialNote)) {
      setNoteErrMsg('Space does not allow');
      setDisableNote(false);
    } else {
      setNoteErrMsg('');
      setDisableNote(true);
    }
  };

  const inputTextChange = (index, name) => {
    let selected = bookClass.map((item, idx) => {
      if (idx === index)
        return {...item, toggleCheckBox: item.toggleCheckBox, value: name};
      else
        return {
          ...item,
          toggleCheckBox: item.toggleCheckBox,
          value: item.toggleCheckBox,
        };
    });

    setBookClass(selected);
  };

  const selectRole = item => {
    let updatedRoles = selectClass.map((val, index) => {
      if (item === index) {
        Add_item('selected_role', val.list);
        return {
          ...val,
          selected: true,
        };
      }
      return {...val, selected: false};
    });
    setSelectClass(updatedRoles);
  };

  useEffect(() => {
    getUserToken();
    Get_item('userData')
      .then(res => {
        if (res) {
          let loggedUserId = JSON.parse(res);
          setUserId(loggedUserId?.data?.id);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);

  const getUserToken = async () => {
    const user_token = await Get_item('token');
    if (user_token) {
      setToken(user_token);
    }
  };

  const pressNext = async () => {
    // navigation.navigate('VenueAddress');

    // try {
    let data = {
      class_duration: selectedTimeButton.toString(),
      class_name: className,
      date: moment(date).format('LL'),
      from: moment(fromTime).format('LT'),
      to: moment(toTime).format('LT'),
      class_repeat: selectClass.find(x => Boolean(x.selected)).duration,
      booking_type: bookClass.find(x => Boolean(x.toggleCheckBox)).value,
      registrants_note: specialNote,
      user_id: userId.toString(),
    };
    if (data) {
      navigation.navigate('VenueAddress', {
        basicDetails: data,
      });
    }
    console.log('data', data);
    // } catch (error) {
    //   console.log('error', error);
    //   // dispatch(loader_action(false));
    // }
  };

  // useMemo(() => {
  //   if (basicsDetails) {
  //     if (basicsDetails.code === 200) {
  //       dispatch(loader_action(false));
  //       navigation.navigate('VenueAddress');
  //       Toast.show(basicsDetails.Message, Toast.LONG);
  //     } else {
  //       dispatch(loader_action(false));
  //       Toast.show(basicsDetails.Message, Toast.LONG);
  //     }
  //   }
  // }, [basicsDetails]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateIndex = selectedIndex => {
    buttons.map((item, index) => {
      if (index === selectedIndex) {
        setSelectedTimeButton(parseInt(item.replace(' min', '')));
        setSelectedIndex(selectedIndex);
      }
    });
  };

  const buttons = ['30 min', '45 min', '60 min'];

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CHeader
          backPress={() => navigation.goBack()}
          headerText={'Basics'}
          bodyText={'Step 1 of 3'}
          progressBarStep={0.2}
          progressBarLineColor={Colors.ProgressBar_Line_Color}
          progressStyle={{marginTop: 21}}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <ScrollView
            style={{flexGrow: 1}}
            contentContainerStyle={{paddingBottom: 50, padding: 20}}
            showsVerticalScrollIndicator={false}
            nestedScrollEnable={true}>
            <LabelText
              label={'What is the class duration?'}
              labelStyle={styles.duration}
            />
            <View style={{marginTop: 14}}>
              <ButtonGroup
                onPress={updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{
                  height: 52,
                  borderRadius: 6,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#DCE6EF',
                  borderWidth: 1,
                  width: Platform.OS === 'ios' ? 370 : 320,
                  alignSelf: 'center',
                }}
                textStyle={{
                  fontSize: dynamicSize(16),
                  fontFamily: Fonts.fontRegular,
                  color: Colors.placeholder_color,
                }}
                selectedButtonStyle={{
                  backgroundColor: Colors.forgot_psw,
                  margin: 2,
                  borderRadius: 6,
                }}
                innerBorderStyle={{
                  width: 0,
                }}
              />
            </View>
            <CInput
              labelTextStyle={styles.inputTextStyle}
              showPlaceholder={'Core Strength Fitness'}
              value={className}
              onChangeText={text => {
                setClassName(text);
              }}
              label={'Class Name'}
              inputStyle={styles.inputStyle}
              placeholderColor={Colors.placeholder_color}
              onBlur={validateClassName}
              errorMessage={errMsg}
            />
            <CDateTimeDropDown
              inputHeading={'Date'}
              placeholder={'23 January 2021'}
              // value={date.toDateString()}
              value={moment(date).format('LL')}
              editable={false}
              mode={'date'}
              downIcon={downArrow}
              onPress={() => setOpenDate(true)}
              openPicker={openDate}
              showDate={date}
              onConfirm={date => {
                setOpenDate(false);
                setFromTime(date);
                setToTime(date);
                setDate(date);
              }}
              onCancel={() => {
                setOpenDate(false);
              }}
              minimumDate={moment().toDate()}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: '48%',
                }}>
                <CDateTimeDropDown
                  inputHeading={'From'}
                  placeholder={'9:00 PM'}
                  // value={fromTime.toLocaleTimeString()}
                  value={moment(fromTime).format('LT')}
                  editable={false}
                  mode={'time'}
                  downIcon={downArrow}
                  onPress={() => setOpenTimeTo(true)}
                  openPicker={openTimeTo}
                  showDate={fromTime}
                  onConfirm={time => {
                    setOpenTimeTo(false);
                    setFromTime(time);
                  }}
                  onCancel={() => {
                    setOpenTimeTo(false);
                  }}
                  minimumDate={moment().toDate()}
                />
              </View>
              <View
                style={{
                  width: '48%',
                }}>
                <CDateTimeDropDown
                  inputHeading={'TO'}
                  placeholder={'12:00 AM'}
                  // value={toTime.toLocaleTimeString()}
                  value={moment(toTime).format('LT')}
                  mode={'time'}
                  editable={false}
                  downIcon={downArrow}
                  onPress={() => setOpenTimeFrom(true)}
                  openPicker={openTimeFrom}
                  showDate={toTime}
                  onConfirm={time => {
                    setOpenTimeFrom(false);
                    setToTime(time);
                  }}
                  onCancel={() => {
                    setOpenTimeFrom(false);
                  }}
                  minimumDate={moment().toDate()}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={addEventToCalendar}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 18,
              }}
              disabled={!className}>
              <CImage imgUrl={Sync} style={{width: 16, height: 16}} />
              <LabelText
                label={'Sync to my calendar'}
                labelStyle={
                  className ? styles.SyncStyles : styles.disableSyncStyles
                }
              />
            </TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 28,
                borderColor: Colors.border_color,
              }}
            />
            <LabelText
              label={'How often does your class repeat?'}
              labelStyle={styles.footerText}
            />
            <FlatList
              data={selectClass}
              contentContainerStyle={{width: '100%', marginTop: 8}}
              horizontal={false}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              key={index => index}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    key={String(index)}
                    onPress={() => selectRole(index)}
                    style={[
                      styles.repeatClassView,
                      {
                        borderColor:
                          item.selected === false
                            ? Colors.deselected_role_color
                            : Colors.forgot_psw,
                        backgroundColor:
                          item.selected === false
                            ? Colors.white_color
                            : Colors.selectedItem,
                      },
                    ]}
                    key={index}>
                    <LabelText
                      label={item.duration}
                      labelStyle={[
                        styles.repeatClass,
                        {
                          color:
                            item.selected === true
                              ? Colors.forgot_psw
                              : Colors.label_text,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                );
              }}></FlatList>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 28,
                borderColor: Colors.border_color,
              }}
            />
            <LabelText
              label={'How can people book your class?'}
              labelStyle={styles.footerText}
            />
            <LabelText
              label={'Enter email/ Mobile/ Booking link'}
              labelStyle={styles.footerBody}
            />
            {bookClass.map((item, index) => (
              <View key={index}>
                <CCheckBox
                  showPlaceholder={item.placeholder}
                  onClick={() => setToggleCheckBox(index, item)}
                  isChecked={item.toggleCheckBox}
                  value={item.value}
                  onChangeText={text => inputTextChange(index, text)}
                  editable={item.toggleCheckBox}
                  keyboardType={
                    (index === 0 && 'email-address') ||
                    (index === 1 && 'number-pad') ||
                    (index === 2 && 'url')
                  }
                  {...(index === 1 && {maxLength: 10})}
                />
                {item.toggleCheckBox === true && errClassMsg.length > 0 && (
                  <Text style={styles.errMsg}>{errClassMsg}</Text>
                )}
              </View>
            ))}
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 28,
                borderColor: Colors.border_color,
              }}
            />
            <LabelText
              label={'Special note for registrants'}
              labelStyle={styles.footerInputText}
            />
            <TextInput
              placeholder="I will train you...."
              placeholderTextColor={Colors.placeholder_color}
              value={specialNote}
              onChangeText={text => {
                setSpecialNote(text);
              }}
              style={styles.specialNote}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={6}
              onBlur={validateSpecialNote}
            />
            {errNoteMsg.length > 0 && (
              <Text style={styles.errMsg}>{errNoteMsg}</Text>
            )}
            <CButton
              btnText={`Next`}
              btnTextStyle={styles.nextBtnText}
              style={
                disable && disableClass && disableNote
                  ? styles.nextBtnStyle
                  : styles.disableBtn
              }
              // style={styles.nextBtnStyle}
              btnOnPress={pressNext}
              disabled={!(disable && disableClass && disableNote)}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Basics;
