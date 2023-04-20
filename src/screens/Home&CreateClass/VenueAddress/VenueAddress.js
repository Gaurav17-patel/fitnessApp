import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import styles from './VenueAddressStyles';
import {
  CHeader,
  CInput,
  CButton,
  LabelText,
  CImage,
  CDropDown,
} from '../../../components/index';
import {gps} from '../../../assets/index';
import {Colors} from '../../../theme/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import {dynamicSize} from '../../../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
import {Get_item} from '../../../utils/AsyncStorage';
import {PostRequest} from '../../../utils/ApiRequest';
import {
  add_Address,
  add_class,
  basics_details,
} from '../../../utils/ApiConstants';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {loader_action} from '../../../redux/action/action';
import Toast from 'react-native-simple-toast';
import {add_class_res} from '../../../redux/action-types/action-types';

const VenueAddress = ({navigation, props, route}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user_login_data);
  const basicsData = route.params.basicDetails;
  const [open, setOpen] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [state, setState] = useState('');
  const [stateItem, setStateItem] = useState([
    {label: 'New South Wales', value: 'New South Wales'},
    {label: 'Queensland', value: 'Queensland'},
    {label: 'Tasmania', value: 'Tasmania'},
    {label: 'Victoria', value: 'Victoria'},
    {label: 'Christmas Island', value: 'Christmas Island'},
  ]);
  const [city, setCity] = useState('');
  const [cityItem, setCityItem] = useState([
    {label: 'Sydney', value: 'Sydney'},
    {label: 'Melbourne', value: 'Melbourne'},
    {label: 'Brisbane', value: 'Brisbane'},
    {label: 'Perth', value: 'Perth'},
    {label: 'Central Coast', value: 'Central Coast'},
  ]);
  const [location, setLocation] = useState('');
  const [apartment, setApartment] = useState('');
  // const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [token, setToken] = useState('');
  const [userID, setUserID] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');
  const [allowSubmit, setAllowSubmit] = useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      venue: '',
      zipcode: '',
      location: '',
    },
    mode: 'onTouched',
  });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getUserData();
  }, []);

  const gotoSearchLocation = () => {
    navigation.navigate('SearchLocation');
  };

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
    console.log('state', state);
    console.log('basicsData', basicsData);
    if (state && state != '' && city && city != '') {
      console.log('state', state);
      setAllowSubmit(true);
    }
  }, [state, city, basicsData]);

  const pressNext = async data => {
    // navigation.navigate('ExerciseTemplateOption');
    console.log('token', token);
    data.state = state;
    data.city = city;
    data.booking_type = basicsData?.booking_type;
    data.class_duration = basicsData?.class_duration;
    data.class_name = basicsData?.class_name;
    data.class_repeat = basicsData?.class_repeat;
    data.date = basicsData?.date;
    data.from = basicsData?.from;
    data.registrants_note = basicsData?.registrants_note;
    data.to = basicsData?.to;
    data.user_id = basicsData?.user_id;
    console.log('data<><><>', data);
    // return false;
    try {
      dispatch(loader_action(true));
      await PostRequest(add_class, data, token).then(res => {
        console.log('res>>>', res);
        if (res.data.code === 200) {
          dispatch(loader_action(false));
          dispatch({
            type: add_class_res,
            payload: res.data,
          });
          navigation.navigate('ExerciseTemplateOption', {
            classid: res?.data?.class_id,
          });
          Toast.show(res.data.message, Toast.LONG);
        } else {
          console.log('resError>>', res);
          dispatch({
            type: add_class_res,
            payload: res.data,
          });
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
        }
      });
    } catch (error) {
      console.log('error', error);
      dispatch(loader_action(false));
    }
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container}>
        <CHeader
          backPress={() => navigation.goBack()}
          headerText={'Venue Address'}
          bodyText={'Step 2 of 3'}
          progressBarStep={0.4}
          progressBarLineColor={Colors.ProgressBar_Line_Color}
          progressStyle={{marginTop: 21}}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <ScrollView
            contentContainerStyle={{padding: 20, paddingBottom: 60}}
            showsVerticalScrollIndicator={false}>
            <LabelText label={'Location'} labelStyle={styles.inputText} />
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter valid location',
                },
                pattern: {
                  value: /^[^-\s][a-zA-Z0-9_.\s-]+$/,
                  message: 'Space does not allow',
                },
              }}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched},
              }) => (
                <>
                  <View style={styles.gpsInput}>
                    <View style={{width: '85%', justifyContent: 'center'}}>
                      <TextInput
                        placeholder="Search or use current location"
                        placeholderTextColor={Colors.placeholder_color}
                        style={styles.gpsPlaceholder}
                        multiline={false}
                        value={value}
                        onChangeText={onChange}
                        onFocus={() => {
                          onBlur;
                          setOpen(false);
                          setOpenCity(false);
                        }}
                        onBlur={onBlur}
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.gpsView}
                      onPress={() => gotoSearchLocation()}>
                      <CImage imgUrl={gps} style={{height: 16, width: 16}} />
                    </TouchableOpacity>
                  </View>
                  {isTouched && errors.location && (
                    <Text style={{color: 'red', marginTop: 5, paddingLeft: 5}}>
                      {isTouched && errors.location
                        ? errors.location.message
                        : ''}
                    </Text>
                  )}
                </>
              )}
              name="location"></Controller>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter valid House/Apt.',
                },
                pattern: {
                  value: /^[^-\s][a-zA-Z0-9_.\s-]+$/,
                  message: 'Space does not allow',
                },
              }}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched},
              }) => (
                <CInput
                  showPlaceholder={'H No. 234, River towers'}
                  inputStyle={styles.inputStyle}
                  label={'Venue'}
                  labelTextStyle={styles.inputText}
                  placeholderColor={Colors.placeholder_color}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onFocus={() => {
                    onBlur;
                    setOpen(false);
                    setOpenCity(false);
                  }}
                  errorMessage={
                    isTouched && errors.apartment
                      ? errors.apartment.message
                      : ''
                  }
                />
              )}
              name="venue"></Controller>
            <LabelText label={'State'} labelStyle={styles.inputText} />
            <CDropDown
              openPicker={open}
              pickerValue={state}
              pickerItems={stateItem}
              placeHolder={'Select state'}
              setOpenPicker={setOpen}
              setPickerValue={setState}
              setPickerItems={setStateItem}
              onPress={() => setOpenCity(false)}
            />
            <LabelText
              label={'City'}
              labelStyle={[
                styles.inputText,
                {
                  marginTop: open ? 210 : 28,
                },
              ]}
            />
            <CDropDown
              openPicker={openCity}
              pickerValue={city}
              pickerItems={cityItem}
              placeHolder={'Select city'}
              setOpenPicker={setOpenCity}
              setPickerValue={setCity}
              setPickerItems={setCityItem}
              onPress={() => setOpen(false)}
            />
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter valid zipcode',
                },
              }}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched},
              }) => (
                <CInput
                  showPlaceholder={'2343'}
                  inputStyle={styles.inputStyle}
                  label={'Zip Code'}
                  labelTextStyle={[
                    styles.inputText,
                    {
                      marginTop: openCity ? 210 : 28,
                    },
                  ]}
                  placeholderColor={Colors.placeholder_color}
                  value={value}
                  maxLength={4}
                  onChangeText={onChange}
                  keyboardType={'number-pad'}
                  onBlur={onBlur}
                  onFocus={() => {
                    onBlur;
                    setOpen(false);
                    setOpenCity(false);
                  }}
                  errorMessage={
                    isTouched && errors.zipcode ? errors.zipcode.message : ''
                  }
                />
              )}
              name="zipcode"></Controller>
            <CButton
              btnText={`Next`}
              btnTextStyle={styles.nextBtnText}
              style={
                isValid && allowSubmit
                  ? styles.nextBtnStyle
                  : styles.nextDisableBtnStyle
              }
              btnOnPress={handleSubmit(pressNext)}
              // btnOnPress={pressNext}
              disabled={!(isValid && allowSubmit)}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VenueAddress;
