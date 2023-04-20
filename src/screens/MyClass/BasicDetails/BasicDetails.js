import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {CSearchBar, LabelText, CInput} from '../../../components/index';
import styles from './BasicDetailsStyles';
import {BackArrow} from '../../../assets/index';
import {Colors} from '../../../theme/colors';

const BasicDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={false}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Basic'}
        btn={true}
        // editPress={() => navigation.navigate('Basics')}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: 50, padding: 20}}
        showsVerticalScrollIndicator={false}>
        <CInput
          labelTextStyle={styles.inputTextStyle}
          showPlaceholder={'Core Strength Fitness'}
          inputStyle={styles.inputStyle}
          label={'Class Name'}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
        <CInput
          labelTextStyle={styles.inputTextStyle}
          showPlaceholder={'23 January 2021'}
          inputStyle={styles.inputStyle}
          label={'Date'}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
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
            <CInput
              showPlaceholder={'9:00 AM'}
              inputStyle={styles.inputStyle}
              label={'From'}
              labelTextStyle={styles.inputTextStyle}
              editable={false}
              placeholderColor={Colors.Detail_input_Text_Color}
            />
          </View>
          <View
            style={{
              width: '48%',
            }}>
            <CInput
              showPlaceholder={'12:00 PM'}
              inputStyle={styles.inputStyle}
              label={'To'}
              labelTextStyle={styles.inputTextStyle}
              editable={false}
              placeholderColor={Colors.Detail_input_Text_Color}
            />
          </View>
        </View>
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
        <View
          style={{
            marginTop: 18,
            borderRadius: 6,
            width: '30%',
            padding: 10,
            backgroundColor: Colors.Detail_input_Color,
          }}>
          <LabelText label={'Weekly'} labelStyle={styles.repeatClass} />
        </View>
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
        <CInput
          showPlaceholder={'fitness@gmail.com'}
          inputStyle={styles.inputStyle}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
        <CInput
          showPlaceholder={'723 873 912'}
          inputStyle={styles.inputStyle}
          editable={false}
          placeholderColor={Colors.Detail_input_Text_Color}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicDetails;
