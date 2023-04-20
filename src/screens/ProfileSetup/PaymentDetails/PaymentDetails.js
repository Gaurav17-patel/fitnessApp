import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './PaymentDetailsStyles';
import {
  CHeader,
  LabelText,
  CInput,
  CButton,
  CPolicyText,
  CDropDown,
} from '../../../components/index';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../../../theme/colors';
import {dynamicSize} from '../../../constant';
import CheckBox from '@react-native-community/checkbox';

const PaymentDetails = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const pressNext = () => {
    navigation.navigate('ConfirmationPage', {
      fromScreen: 'PaymentDetails',
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <CHeader
          backPress={() => navigation.goBack()}
          headerText={'PaymentDetails'}
          bodyText={'Step 4 of 4'}
          progressBarStep={0.9}
          progressBarLineColor={Colors.forgot_psw}
          progressStyle={styles.progressHeader}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
            paddingBottom: 60,
            marginTop: 15,
          }}>
          <LabelText
            label={'Fill in the bank details to receive payments'}
            labelStyle={styles.detailsText}
          />
          <LabelText label={'Bank Name'} labelStyle={styles.inputText} />
          <CDropDown
            openPicker={open}
            pickerValue={value}
            pickerItems={items}
            placeHolder={'Select state'}
            setOpenPicker={setOpen}
            setPickerValue={setValue}
            setPickerItems={setItems}
          />
          <CInput
            showPlaceholder={'234 098'}
            inputStyle={styles.inputStyle}
            label={'BSB'}
            labelTextStyle={styles.inputText}
          />
          <CInput
            showPlaceholder={'1214 9873 6723 9235'}
            inputStyle={styles.inputStyle}
            label={'Account Number'}
            labelTextStyle={styles.inputText}
          />
          <CInput
            showPlaceholder={'John Doe'}
            inputStyle={styles.inputStyle}
            label={'Account Holder’s Name'}
            labelTextStyle={styles.inputText}
          />
          <View
            style={{marginTop: 60, flexDirection: 'row', alignItems: 'center'}}>
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
            <CPolicyText
              labelOne={'I agree to '}
              labelTwo={'Term of Service '}
              labelThree={'& '}
              labelFour={'Privacy Policy '}
              labelFive={'statement'}
            />
          </View>
          <CButton
            btnText={`Submit`}
            btnTextStyle={{fontWeight: 'bold'}}
            style={styles.nextBtnStyle}
            btnOnPress={pressNext}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PaymentDetails;
