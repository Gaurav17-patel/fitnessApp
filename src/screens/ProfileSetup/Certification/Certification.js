import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  LogBox,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import styles from './CertificationStyles';
import {
  CHeader,
  LabelText,
  CCertificateUI,
  CProgressBar,
  CInput,
  CButton,
} from '../../../components/index';
import {Colors} from '../../../theme/colors';
import {greenRight, SelectedCheckBox, Facebook} from '../../../assets/index';
import {Fonts} from '../../../constant/index';
import DocumentPicker, {types} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {PostRequest} from '../../../utils/ApiRequest';
import {upload_certificates, Api_url} from '../../../utils/ApiConstants';
import {Get_item} from '../../../utils/AsyncStorage';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {loader_action} from '../../../redux/action/action';
import {bytesToSize} from '../../../utils/GetFileSize';
import axios from 'axios';
import dateHash from '../../../utils/GetMonthNumber';

const Certification = ({navigation}) => {
  const dispatch = useDispatch();
  const [result, setResult] = useState('');
  const [certificates, setCertificates] = useState([
    {
      fileName: 'PL Insurance',
      display: false,
      btnText: '+ Upload PDF',
      expiryMonth: '',
      expiryDate: '',
      pdfBase64: '',
      filetype: 'PDF1',
      uploaded: false,
      validateMonth: false,
    },
    {
      fileName: 'First Aid',
      display: false,
      btnText: '+ Upload PDF',
      img: SelectedCheckBox,
      expiryMonth: '',
      expiryDate: '',
      pdfBase64: '',
      filetype: 'PDF2',
      uploaded: false,
      validateMonth: false,
      validateYear: false,
    },
    {
      fileName: 'CPR',
      display: false,
      btnText: '+ Upload PDF',
      img: SelectedCheckBox,
      expiryMonth: '',
      expiryDate: '',
      pdfBase64: '',
      filetype: 'PDF3',
      uploaded: false,
      validateMonth: false,
      validateYear: false,
    },
    {
      fileName: 'Cert iii',
      display: false,
      btnText: '+ Upload PDF',
      expiryMonth: '',
      expiryDate: '',
      pdfBase64: '',
      filetype: 'PDF4',
      uploaded: false,
      validateMonth: false,
      validateYear: false,
    },
    {
      fileName: 'Cert iv',
      display: false,
      btnText: '+ Upload PDF',
      expiryMonth: '',
      expiryDate: '',
      pdfBase64: '',
      filetype: 'PDF5',
      uploaded: false,
      validateMonth: false,
      validateYear: false,
    },
  ]);

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [uploadText, setUploadText] = useState('+ Upload PDF');

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [totalFileSize, setTotalFileSize] = useState('');
  const [totalUploadedSize, setTotalUploadedSize] = useState('0');
  const [monthInputError, setMonthInputError] = useState('');
  const [yearInputError, setYearInputError] = useState('');
  const [uploadedFileSize, setUploadedFileSize] = useState('1.3');
  const [allowToUploadDocuments, setAllowToUploadDocuments] = useState(false);

  const [selectedDocumnetRes, setSelectedDocumentRes] = useState([]);

  const [fileUploadPercentage, setFileUploadPercentage] = useState('');
  const [progressStep, setProgressStep] = useState(0);
  const [processComplete, setProcessComplete] = useState(false);

  const [getYear, setYear] = useState(new Date().getFullYear());

  let commonRegex =
    /^(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)$/i;

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getUserToken();
    Get_item('userData')
      .then(res => {
        console.log('resres>>>', JSON.parse(res));
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
    // navigation.navigate('ConfirmationPage', {
    //   fromScreen: 'Certification',
    // });

    // return false;
    console.log('certificates', certificates);
    try {
      let data = {
        pl_insurance: '',
        pl_expiry_month: '',
        pl_expiry_year: '',
        first_aid: '',
        first_aid_expiry_month: '',
        first_aid_expiry_year: '',
        cpr: '',
        cpr_expiry_month: '',
        cpr_expiry_year: '',
        cert_three: '',
        cert_three_expiry_month: '',
        cert_three_expiry_year: '',
        cert_four: '',
        cert_four_expiry_month: '',
        cert_four_expiry_year: '',
        user_id: '',
      };
      certificates.map(items => {
        if (['PDF1'].includes(items.filetype)) {
          (data.pl_insurance = items.pdfBase64),
            (data.pl_expiry_month = items.expiryMonth),
            (data.pl_expiry_year = items.expiryDate);
        }
        if (['PDF2'].includes(items.filetype)) {
          (data.first_aid = items.pdfBase64),
            (data.first_aid_expiry_month = items.expiryMonth),
            (data.first_aid_expiry_year = items.expiryDate);
        }
        if (['PDF3'].includes(items.filetype)) {
          (data.cpr = items.pdfBase64),
            (data.cpr_expiry_month = items.expiryMonth),
            (data.cpr_expiry_year = items.expiryDate);
        }
        if (['PDF4'].includes(items.filetype)) {
          (data.cert_three = items.pdfBase64),
            (data.cert_three_expiry_month = items.expiryMonth),
            (data.cert_three_expiry_year = items.expiryDate);
        }
        if (['PDF5'].includes(items.filetype)) {
          (data.cert_four = items.pdfBase64),
            (data.cert_four_expiry_month = items.expiryMonth),
            (data.cert_four_expiry_year = items.expiryDate);
        }
        data.user_id = userId;
      });

      console.log('data>>>>', JSON.stringify(data));
      console.log('token>>>', token);
      console.log('userID', userId);
      console.log('innnnData', data);

      // return false;
      dispatch(loader_action(true));
      await PostRequest(upload_certificates, data, token).then(res => {
        console.log('res>>>', res);
        if (res.data.code === 200) {
          dispatch(loader_action(false));
          navigation.navigate('ConfirmationPage', {
            fromScreen: 'Certification',
          });
          Toast.show(res.data.message, Toast.LONG);
        } else {
          Toast.show(res.data.message, Toast.LONG);
          dispatch(loader_action(false));
        }
      });
    } catch (error) {
      console.log('error', error);
      dispatch(loader_action(false));
      // Toast.show('Please upload PDF', Toast.LONG);
    }
  };

  useMemo(() => {
    console.log('certificates', certificates);
    let result = certificates.every(i => {
      if (
        i.uploaded &&
        i.expiryMonth != '' &&
        i.expiryDate != '' &&
        i.validateMonth &&
        i.validateYear
      ) {
        return true;
      }
      return false;
    });
    setAllowToUploadDocuments(result);
  }, [certificates]);

  const uploadPdf = async (documentIndex, item) => {
    if (documentIndex != 0) {
      const {validateMonth, validateYear} = certificates[documentIndex - 1];
      console.log({validateMonth, validateYear});
      if (validateYear && validateMonth) {
        setMonthInputError('');
        setYearInputError('');
        selectDocuments(documentIndex, item);
      } else {
        setMonthInputError('Please valid month');
        setYearInputError('Please valid year');
      }
    } else {
      setYearInputError('');
      setMonthInputError('');
      selectDocuments(documentIndex, item);
    }
  };

  const emptyState = () => {
    setTotalFileSize('');
    setTotalUploadedSize('');
    setFileUploadPercentage('');
    setProgressStep(0);
    setProcessComplete(false);
  };

  const selectDocuments = async (documentIndex, item) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('resres><><>', res);
      if (res && res[0].type === 'application/pdf') {
        emptyState();
        let selectedFileSize = bytesToSize(res[0]?.size);
        setTotalFileSize(selectedFileSize);
        const fileName = res[0].uri.replace('file://', '');
        RNFetchBlob.fs
          .readFile(fileName, 'base64', 4095)
          .then(data => {
            if (data) {
              console.log('data', JSON.stringify(data));
              setUploadedFiles(data);
              let uploadFile = certificates.map((val, index) => {
                if (documentIndex === index) {
                  return {
                    ...val,
                    display: true,
                    btnText: 'Change',
                    pdfBase64: data,
                    fileName: res[0].name,
                    uploaded: true,
                  };
                }
                return {...val, display: false};
              });
              let count = 0;
              let totalUploadedCount = 0;
              let progressStepCount = 0.1;
              let getSlice = selectedFileSize.split(' ')[1];
              setTotalUploadedSize(`0 ${getSlice}`);
              let chunks = selectedFileSize.split(' ')[0] / 4;
              console.log({getSlice, chunks});
              let myInterval = setInterval(() => {
                count += 25;
                totalUploadedCount++;
                count === 100
                  ? (progressStepCount = 1)
                  : (progressStepCount += 0.2);
                setFileUploadPercentage(count);
                setProgressStep(progressStepCount);
                setTotalUploadedSize(
                  `${chunks * totalUploadedCount} ${getSlice}`,
                );
                if (count === 100) {
                  setProcessComplete(true);
                  clearInterval(myInterval);
                }
              }, 500);
              setCertificates(uploadFile);
            }
          })
          .catch(err => {
            console.log('errr', err);
          });
      } else {
        Toast.show('Please select document as an PDF format...!', Toast.LONG);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const onDateChange = (text, idx) => {
    console.log('text', text);
    console.log('text', text.length);
    const certi = certificates.map((item, index) => {
      if (idx === index) {
        if (text >= getYear) {
          if (text == getYear) {
            if (dateHash[item.expiryMonth] >= new Date().getMonth() + 1) {
              setYearInputError('');
              return {
                ...item,
                expiryDate: text,
                validateYear: true,
              };
            } else {
              setYearInputError('');
              return {
                ...item,
                expiryDate: text,
                validateYear: false,
              };
            }
          } else {
            setYearInputError('');
            return {
              ...item,
              expiryDate: text,
              validateYear: true,
            };
          }
        } else {
          setYearInputError('Enter valid year');
          return {
            ...item,
            expiryDate: text,
            validateYear: false,
          };
        }
      }
      return {...item};
    });
    setCertificates(certi);
  };

  const onMonthChange = (text, idx) => {
    const certi = certificates.map((item, index) => {
      if (idx === index) {
        if (commonRegex.test(text)) {
          setMonthInputError('');
          return {
            ...item,
            expiryMonth: text,
            validateMonth: true,
            expiryDate: '',
          };
        } else {
          setMonthInputError('Enter valid month');
          return {
            ...item,
            expiryMonth: text,
            validateMonth: false,
            expiryDate: '',
          };
        }
      }
      return {...item};
    });
    setCertificates(certi);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CHeader
          backPress={() => navigation.goBack()}
          headerText={'Certification'}
          bodyText={'Step 3 of 3'}
          progressBarStep={0.7}
          progressBarLineColor={Colors.ProgressBar_Line_Color}
          progressStyle={{marginTop: 21}}
        />
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              padding: 20,
              paddingBottom: 60,
            }}>
            <Text style={styles.detailsText}>
              Please upload documentation in{' '}
              <Text
                style={{
                  color: Colors.welcome_text,
                }}>
                PDF format
              </Text>{' '}
              <Text>
                for all required accreditation including the expiry date
              </Text>
            </Text>
            <FlatList
              data={certificates}
              renderItem={({item, index}) => {
                return (
                  <CCertificateUI
                    numberText={item.btnText === '+ Upload PDF' && index + 1}
                    indexNo={item.btnText === '+ Upload PDF' && true}
                    indexImg={item.btnText === 'Change' && true}
                    imgUrl={item.btnText === 'Change' && greenRight}
                    certificateName={item.fileName}
                    uploadBtn={item.display === false && item.btnText}
                    onPress={() => uploadPdf(index)}
                    displayProcessView={item.display}
                    monthValue={item.expiryMonth}
                    dateValue={item.expiryDate}
                    monthOnChange={text => onMonthChange(text, index)}
                    dateOnChange={text => onDateChange(text, index)}
                    totalFileSizeNumber={totalFileSize}
                    uploadedNumber={totalUploadedSize}
                    monthErrorMsg={monthInputError}
                    yearErrorMsg={yearInputError}
                    fileUploadedPercentage={fileUploadPercentage}
                    progressSteps={progressStep}
                    fileUploaded={processComplete}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
            <CButton
              btnText={`Next`}
              btnTextStyle={{fontFamily: Fonts.fontBold}}
              style={
                allowToUploadDocuments
                  ? styles.nextBtnStyle
                  : styles.disableNextBtnStyle
              }
              btnOnPress={pressNext}
              disabled={!allowToUploadDocuments}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Certification;
