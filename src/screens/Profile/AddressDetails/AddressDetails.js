import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CSearchBar,
  LabelText,
  CImage,
  CInput,
  CDropDown,
  CButton,
} from '../../../components/index';
import {BackArrow, gps} from '../../../assets/index';
import styles from './AddressDetailsStyles';
import {Colors} from '../../../theme/colors';

const AddressDetails = ({navigation}) => {
  const [houseFocus, setHouseFocus] = useState(false);
  const [zipCodeFocus, setZipCodeFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Gujarat', value: 'gujarat'},
    {label: 'Maharastra', value: 'maharastra'},
  ]);

  const [openCity, setOpenCity] = useState(false);
  const [cityValue, setCityValue] = useState(null);
  const [cityItems, setCityItems] = useState([
    {label: 'Ahmedabad', value: 'Ahmedabad'},
    {label: 'Mumbai', value: 'Mumbai'},
  ]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  // const gotoSearchLocation = () => {
  //   navigation.navigate('SearchLocation');
  // };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Address'}
        btn={true}
        saveLabel={true}
      />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{padding: 20}}
          showsVerticalScrollIndicator={false}>
          <LabelText label={'Location'} labelStyle={styles.inputText} />
          <View style={styles.gpsInput}>
            <View style={{width: '85%', justifyContent: 'center'}}>
              <TextInput
                placeholder="River Towers"
                // value="River Towers"
                placeholderTextColor={Colors.welcome_text}
                style={styles.gpsPlaceholder}
              />
            </View>
            {/* <View
              style={{borderWidth: 1, borderColor: Colors.border_color}}></View> */}
            <TouchableOpacity
              style={styles.gpsView}
              // onPress={() => gotoSearchLocation
            >
              <CImage imgUrl={gps} style={{height: 16, width: 16}} />
            </TouchableOpacity>
          </View>
          <CInput
            showPlaceholder={'H No. 234, River towers |'}
            inputStyle={[
              styles.inputStyle,
              {
                borderColor: houseFocus
                  ? Colors.forgot_psw
                  : Colors.border_color,
              },
            ]}
            placeholderColor={Colors.welcome_text}
            label={'House/Apt.'}
            labelTextStyle={[
              styles.inputText,
              {
                color: houseFocus ? Colors.forgot_psw : Colors.welcome_text,
              },
            ]}
            onFocus={() => setHouseFocus(true)}
            onBlur={() => setHouseFocus(false)}
          />
          <LabelText label={'State'} labelStyle={styles.inputText} />
          <CDropDown
            openPicker={open}
            pickerValue={value}
            pickerItems={items}
            placeHolder={'New South Wales'}
            setOpenPicker={setOpen}
            setPickerValue={setValue}
            setPickerItems={setItems}
            placeHolderTextColor={{color: Colors.welcome_text}}
          />
          <LabelText label={'City'} labelStyle={styles.inputText} />
          <CDropDown
            openPicker={openCity}
            pickerValue={cityValue}
            pickerItems={cityItems}
            placeHolder={'Sydney'}
            setOpenPicker={setOpenCity}
            setPickerValue={setCityValue}
            setPickerItems={setCityItems}
            placeHolderTextColor={{color: Colors.welcome_text}}
          />
          <CInput
            showPlaceholder={'23423'}
            inputStyle={[
              styles.inputStyle,
              {
                borderColor: zipCodeFocus
                  ? Colors.forgot_psw
                  : Colors.border_color,
              },
            ]}
            label={'Zip Code'}
            labelTextStyle={[
              styles.inputText,
              {
                color: zipCodeFocus ? Colors.forgot_psw : Colors.welcome_text,
              },
            ]}
            placeholderColor={Colors.welcome_text}
            onFocus={() => setZipCodeFocus(true)}
            onBlur={() => setZipCodeFocus(false)}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddressDetails;
