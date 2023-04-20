import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './CertificationDetailsStyles';
import {
  CHeader,
  LabelText,
  CCertificateUI,
  CProgressBar,
  CInput,
  CButton,
  CSearchBar,
  CImage,
} from '../../../components/index';
import {Colors} from '../../../theme/colors';
import {greenRight, BackArrow, cancle} from '../../../assets/index';
import {Fonts} from '../../../constant/index';

const CertificationDetails = ({navigation}) => {
  const [numberRow, setNumberRow] = useState([
    {
      img: greenRight,
      name: 'PL Insurance',
      expireDate: 'Jan 2025',
    },
    {
      img: greenRight,
      name: 'First Aid',
      expireDate: 'May 2025',
    },
    {
      img: greenRight,
      name: 'CPR',
      expireDate: 'Feb 2022',
    },
    {
      img: greenRight,
      name: 'Cert iii',
      expireDate: 'Feb 2022',
    },
    {
      img: cancle,
      name: 'Cert iv',
      expireDate: 'Jun 2021',
    },
  ]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Certification'}
        btn={true}
        // editPress={() => navigation.navigate('PersonalDetails')}
      />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            // padding: 20,
            // paddingBottom: 60,
            marginTop: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <LabelText label={'NAME'} labelStyle={styles.headerText} />
            <LabelText label={'EXPIRY DATE'} labelStyle={styles.headerText} />
          </View>
          {numberRow.map((item, index) => (
            <>
              <View style={styles.processView}>
                <View style={{width: '15%'}}>
                  <CImage imgUrl={item.img} style={{height: 22, width: 22}} />
                </View>
                <View style={{width: '55%'}}>
                  <LabelText label={item.name} labelStyle={styles.textStyle} />
                </View>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'flex-end',
                  }}>
                  <LabelText
                    label={item.expireDate}
                    labelStyle={
                      item.name == 'Cert iv'
                        ? styles.expireDateStyle2
                        : styles.expireDateStyle
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  borderBottomWidth: numberRow.length - 1 === index ? 0 : 0.8,
                  borderColor: Colors.border_color,
                }}
              />
            </>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CertificationDetails;
