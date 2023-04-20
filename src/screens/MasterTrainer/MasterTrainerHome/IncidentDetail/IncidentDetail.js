import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {CSearchBar, CInput, CImage} from '../../../../components';
import styles from './IncidentDetailStyles';
import {BackArrow, incident} from '../../../../assets/index';
import {Colors} from '../../../../theme/colors';
import {Get_item} from '../../../../utils/AsyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import {get_incident_detail} from '../../../../redux/action/action';

const IncidentDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const incidentDetails = useSelector(state => state.get_incident_details);
  console.log('incidentDetails>>>', incidentDetails);
  const [userId, setUserId] = useState('');
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
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
    if (userId && userToken) {
      let data = {
        userId: userId,
      };
      dispatch(get_incident_detail(data, userToken));
    }
  }, [userId, userToken]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Incident detail'}
      />
      <ScrollView
        style={{padding: 20}}
        contentContainerStyle={{paddingBottom: 80}}
        showsVerticalScrollIndicator={false}>
        <CInput
          editable={false}
          showPlaceholder={incidentDetails?.data?.date}
          placeholderColor={Colors.Detail_input_Text_Color}
          inputStyle={styles.inputStyle}
          label={'Date'}
          labelTextStyle={styles.inputText}
        />
        <CInput
          editable={false}
          showPlaceholder={incidentDetails?.data?.time}
          placeholderColor={Colors.Detail_input_Text_Color}
          inputStyle={styles.inputStyle}
          label={'Time'}
          labelTextStyle={styles.inputText}
        />
        <CInput
          editable={false}
          showPlaceholder={incidentDetails?.data?.registrant}
          placeholderColor={Colors.Detail_input_Text_Color}
          inputStyle={styles.inputStyle}
          label={'Registrant'}
          labelTextStyle={styles.inputText}
        />
        <CInput
          editable={false}
          showPlaceholder={
            incidentDetails?.data?.incident
            // 'Jane accidentally hit her colleague Robert with stick on the knee. Fortunately there wasn’t any svere damage.'
          }
          placeholderColor={Colors.Detail_input_Text_Color}
          inputStyle={styles.BioData}
          label={'Incident'}
          textAlignVertical="top"
          multiline={true}
          numberOfLines={6}
          labelTextStyle={styles.inputText}
        />
        <View
          style={{
            width: '100%',
            height: '30%',
            // backgroundColor: 'red',
            justifyContent: 'center',
            marginTop: 28,
          }}>
          {/* <CImage
            imgUrl={{uri: 'data:image/png;base64,' + incidentDetails?.base64}}
            style={{width: '100%', height: 210, resizeMode: 'stretch'}}
          /> */}
          {!incident ? (
            <CImage
              imgUrl={incident}
              style={{width: '100%', height: 210, resizeMode: 'stretch'}}
            />
          ) : (
            <View style={styles.profileImage}>
              <Image
                source={{
                  uri: 'data:image/png;base64,' + incidentDetails?.base64,
                }}
                style={{
                  width: '100%',
                  height: 210,
                  resizeMode: 'stretch',
                  borderRadius: 10,
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IncidentDetail;
