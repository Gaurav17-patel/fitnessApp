import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect, useMemo} from 'react';
import styles from '../PersonalDetails/PersonalDetailsStyles';
import {
  CImage,
  LabelText,
  CInput,
  CButton,
  CHeader,
} from '../../../components/index';
import {
  Facebook1,
  instagram,
  user,
  warningIcon,
  connect,
  rightIcon,
} from '../../../assets/index';
import {Colors} from '../../../theme/colors';
import {dynamicSize} from '../../../constant/index';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import ImagePicker from 'react-native-image-crop-picker';
import {Get_item} from '../../../utils/AsyncStorage';
import {PostRequest} from '../../../utils/ApiRequest';
import {personal_details} from '../../../utils/ApiConstants';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loader_action} from '../../../redux/action/action';
import {Controller, useForm} from 'react-hook-form';
import Toast from 'react-native-simple-toast';
import RBSheet from 'react-native-raw-bottom-sheet';

const PersonalDetails = ({navigation}) => {
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

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user_personal_details);
  const [accountSetup, setAccountSetup] = useState([
    {
      image: Facebook1,
      processName: 'Facebook',
      processDesc: 'Fetch photo, name etc.',
      btn: 'Connected',
    },
    {
      image: instagram,
      processName: 'Instagram',
      processDesc: 'Fetch photo, name etc.',
      btnIcon: 'Connect',
    },
  ]);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      first_name: userData?.data?.first_name,
      last_name: userData?.data?.last_name,
      email: userData?.data?.email,
      bio: userData?.data?.bio,
    },
    mode: 'onTouched',
  });

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [userImage, setUserImage] = useState('');
  const [imageErrMsg, setImageErrMsg] = useState('');
  const [phoneErrMsg, setPhoneErrMsg] = useState('');
  const [imageAdded, setImageAdded] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(userData?.data?.mobile);
  const phoneInput = useRef(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    Get_item('userData')
      .then(res => {
        let loggedUserData = JSON.parse(res);
        if (loggedUserData) {
          setToken(loggedUserData?.token);
          setUserId(loggedUserData?.data?.id);
        }
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  useMemo(() => {
    if (phoneNumber) {
      if (phoneNumber === '') {
        setDisableBtn(false);
        setPhoneErrMsg('Please enter mobile number');
      } else if (phoneNumber.substring(3) === '') {
        setPhoneErrMsg('Please enter mobile number');
        setDisableBtn(false);
      } else if (phoneNumber.length < 10) {
        setPhoneErrMsg('Please enter valid mobile number');
        setDisableBtn(false);
      } else {
        setPhoneErrMsg('');
        setDisableBtn(true);
      }
    }
  }, [phoneNumber]);

  useMemo(() => {
    if (!userImage && userImage === '') {
      setImageErrMsg('Please add image');
      setImageAdded(false);
    } else {
      setImageErrMsg('');
      setImageAdded(true);
    }
  }, [userImage]);

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      if (image) {
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
      if (image) {
        setUserImage(image.data);
        refRBSheet.current.close();
      }
    });
  };

  useMemo(() => {
    if (userData) {
      setUserImage(userData?.base64);
    }
  }, [userData]);

  const pressNext = async data => {
    try {
      (data.user_id = userId),
        (data.profile_image = userImage),
        (data.mobile = phoneNumber);
      dispatch(loader_action(true));
      await PostRequest(personal_details, data, token).then(res => {
        if (res.data.code === 200) {
          dispatch(loader_action(false));
          Toast.show(res.data.message, Toast.LONG);
          navigation.navigate('Address');
        } else {
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
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CHeader
          backPress={() => navigation.goBack()}
          headerText={'Personal details'}
          bodyText={'Step 1 of 3'}
          progressBarStep={0.2}
          progressBarLineColor={Colors.ProgressBar_Line_Color}
          progressStyle={{marginTop: 21}}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}>
            <Text style={styles.detailsText}>
              Connect social media to{' '}
              <Text
                style={{
                  color: Colors.welcome_text,
                }}>
                auto fill details & publish classes automatically.
              </Text>{' '}
              <Text>
                We do no publish anything on your social handle without your
                permission.
              </Text>
            </Text>
            <View style={styles.processView}>
              {accountSetup.map((item, index) => (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    padding: 16,
                    borderRadius: dynamicSize(6),
                    backgroundColor: index === 0 ? '#F0F5FF' : '#EEE5EB',
                    marginBottom: accountSetup.length - 1 === index ? 0 : 20,
                  }}
                  key={index}>
                  {/* <LinearGradient
                  colors={index === 0 ? ['#F0F5FF'] : ['#EEE5EB']}
                  locations={[0, 0.2, 0.2]}
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    padding: 16,
                    borderRadius: 14,
                  }}> */}
                  <View style={styles.processIndexView}>
                    <CImage
                      imgUrl={item.image}
                      style={{height: 24, width: 24}}
                    />
                  </View>
                  <View
                    style={{
                      width: '60%',
                      marginLeft: 12,
                    }}>
                    <LabelText
                      label={item.processName}
                      labelStyle={styles.processName}
                    />
                    <LabelText
                      label={item.processDesc}
                      labelStyle={styles.subProcess}
                    />
                  </View>
                  <View
                    style={{
                      width: '30%',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    {item.btn && (
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <CImage
                          imgUrl={rightIcon}
                          style={{height: 12, width: 12}}
                        />
                        <LabelText
                          label={item.btn}
                          labelStyle={styles.connectStyle}
                        />
                      </View>
                    )}
                    {item.btnIcon && (
                      <CImage
                        imgUrl={connect}
                        style={{height: 20, width: 61}}
                      />
                    )}
                  </View>
                  {/* </LinearGradient> */}
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.Fillview}>
              <View style={styles.borderView}></View>
              <LabelText
                label={'OR FILL MANUALLY'}
                labelStyle={styles.FillText}
              />
              <View style={styles.borderView}></View>
            </View>
            <View style={styles.profileContainer}>
              <TouchableOpacity
                style={styles.profileView}
                onPress={() => refRBSheet.current.open()}>
                {!userImage ? (
                  <CImage imgUrl={user} style={{height: 36, width: 36}} />
                ) : (
                  <View style={styles.profileImage}>
                    <Image
                      source={{uri: 'data:image/png;base64,' + userImage}}
                      style={{
                        height: 82,
                        width: 82,
                      }}
                    />
                  </View>
                )}
              </TouchableOpacity>
              <View style={{paddingLeft: 20}}>
                <LabelText
                  label={'Profile picture'}
                  labelStyle={styles.profileText}
                />
                <TouchableOpacity
                  style={{marginTop: 6}}
                  onPress={() => refRBSheet.current.open()}>
                  <LabelText
                    label={'+ Upload Picture'}
                    labelStyle={styles.uploadPicBtn}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {imageErrMsg.length > 0 && (
              <Text style={styles.errMsg}>{imageErrMsg}</Text>
            )}
            <View style={styles.userNameMainView}>
              <View
                style={{
                  width: '48%',
                }}>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter first name',
                    },
                    pattern: {
                      value: /[a-zA-Z][a-zA-Z ]+/,
                      message: 'Please enter valid first name',
                    },
                  }}
                  render={({
                    field: {onChange, onBlur, value},
                    fieldState: {isTouched},
                  }) => (
                    <CInput
                      showPlaceholder={'John'}
                      inputStyle={styles.inputStyle}
                      mt={-16}
                      label={'First name'}
                      value={value}
                      onChangeText={onChange}
                      labelTextStyle={styles.userNameText}
                      placeholderColor={Colors.placeholder_color}
                      onBlur={onBlur}
                      onFocus={onBlur}
                      errorMessage={
                        isTouched && errors.first_name
                          ? errors.first_name.message
                          : ''
                      }
                    />
                  )}
                  name="first_name"></Controller>
              </View>
              <View
                style={{
                  width: '48%',
                }}>
                <Controller
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter last name',
                    },
                    pattern: {
                      value: /[a-zA-Z][a-zA-Z ]+/,
                      message: 'Please enter valid last name',
                    },
                  }}
                  render={({
                    field: {onChange, onBlur, value},
                    fieldState: {isTouched},
                  }) => (
                    <CInput
                      showPlaceholder={'Doe'}
                      inputStyle={styles.inputStyle}
                      mt={-16}
                      label={'Last name'}
                      value={value}
                      onChangeText={onChange}
                      labelTextStyle={styles.userNameText}
                      placeholderColor={Colors.placeholder_color}
                      onBlur={onBlur}
                      onFocus={onBlur}
                      errorMessage={
                        isTouched && errors.last_name
                          ? errors.last_name.message
                          : ''
                      }
                    />
                  )}
                  name="last_name"></Controller>
              </View>
            </View>
            <LabelText label={'Bio'} labelStyle={styles.userNameText} />
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter bio',
                },
                pattern: {
                  value: /^[^-\s][a-zA-Z0-9_.\s-]+$/,
                  message: 'Please enter valid bio',
                },
              }}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched},
              }) => (
                <>
                  <TextInput
                    style={[styles.inputStyle, {height: 110, padding: 10}]}
                    placeholder="Enter bio"
                    multiline={true}
                    numberOfLines={8}
                    placeholderTextColor={Colors.placeholder_color}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onFocus={onBlur}
                  />
                  {isTouched && errors.bio && (
                    <Text style={styles.errMsg}>
                      {isTouched && errors.bio ? errors.bio.message : ''}
                    </Text>
                  )}
                </>
              )}
              name="bio"></Controller>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter email',
                },
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/,
                  message: 'Please enter valid email',
                },
              }}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {isTouched},
              }) => (
                <CInput
                  showPlaceholder={'john@gmail.com'}
                  inputStyle={styles.inputStyle}
                  label={'Email'}
                  value={value}
                  onChangeText={onChange}
                  placeholderColor={'#000000'}
                  labelTextStyle={styles.userNameText}
                  placeholderColor={Colors.placeholder_color}
                  keyboardType={'email-address'}
                  onBlur={onBlur}
                  onFocus={onBlur}
                  errorMessage={
                    isTouched && errors.email ? errors.email.message : ''
                  }
                />
              )}
              name="email"></Controller>
            {/* <View
              style={{
                flexDirection: 'row',
                marginTop: 14,
                alignItems: 'center',
              }}>
              <CImage imgUrl={warningIcon} style={{height: 12, width: 12}} />
              <LabelText label={verifyEmail} labelStyle={styles.verifyText} />
            </View> */}
            <LabelText
              label={'Mobile number'}
              labelStyle={styles.userNameText}
            />
            <PhoneInput
              ref={phoneInput}
              defaultValue={phoneNumber}
              defaultCode="AU"
              layout="first"
              autoFocus={false}
              disableArrowIcon={false}
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textInput}
              onChangeFormattedText={text => {
                setPhoneNumber(text.substring(3));
              }}
              textInputProps={{
                maxLength: 10,
              }}
            />
            {phoneErrMsg.length > 0 && (
              <Text style={styles.errMsg}>{phoneErrMsg}</Text>
            )}
            <CButton
              btnText={`Next`}
              btnTextStyle={styles.nextBtnText}
              style={
                isValid && disableBtn && imageAdded
                  ? styles.nextBtnStyle
                  : styles.disabledNextBtnStyle
              }
              btnOnPress={handleSubmit(pressNext)}
              disabled={!(disableBtn && isValid && imageAdded)}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
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

export default PersonalDetails;
