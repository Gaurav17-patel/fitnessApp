import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './EditPersonalDetailsStyles';
import {CImage, LabelText, CInput, CSearchBar} from '../../../components/index';
import {
  Facebook1,
  instagram,
  user,
  warningIcon,
  BackArrow,
  connect,
  rightIcon,
  userImage,
} from '../../../assets/index';
import PhoneInput from 'react-native-phone-number-input';
import { Colors } from '../../../theme/colors';

const EditPersonalDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Personal details'}
        btn={true}
        // editPress={() => navigation.navigate('PersonalDetails')}
      />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            padding: 20,
            marginTop: 15,
            paddingBottom: 60,
          }}>
          <View style={styles.profileContainer}>
            <CImage imgUrl={userImage} style={{height: 84, width: 84}} />
            <LabelText
              label={'Profile picture'}
              labelStyle={styles.profileText}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                width: '48%',
              }}>
              <CInput
                showPlaceholder={'John'}
                inputStyle={styles.inputStyle}
                label={'First name'}
                placeholderColor={Colors.Detail_input_Text_Color}
                labelTextStyle={styles.userNameText}
                editable={false}
              />
            </View>
            <View
              style={{
                width: '48%',
              }}>
              <CInput
                showPlaceholder={'Doe'}
                inputStyle={styles.inputStyle}
                label={'Last name'}
                placeholderColor={Colors.Detail_input_Text_Color}
                labelTextStyle={styles.userNameText}
                editable={false}
              />
            </View>
          </View>
          <CInput
            showPlaceholder={
              'I am really into fitness and love helping people overcome their their insecurities  related to their physcial appearance.'
            }
            inputStyle={styles.BioData}
            label={'Bio'}
            textAlignVertical="top"
            multiline={true}
            numberOfLines={6}
            placeholderColor={Colors.Detail_input_Text_Color}
            labelTextStyle={styles.userNameText}
            editable={false}
          />
          <CInput
            showPlaceholder={'john@gmail.com'}
            inputStyle={styles.inputStyle}
            label={'Email'}
            placeholderColor={Colors.Detail_input_Text_Color}
            labelTextStyle={styles.userNameText}
            editable={false}
          />
          <CInput
            showPlaceholder={'237 460 2401'}
            inputStyle={styles.inputStyle}
            label={'Mobile number'}
            placeholderColor={Colors.Detail_input_Text_Color}
            labelTextStyle={styles.userNameText}
            editable={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditPersonalDetails;
