import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CSearchBar, CImage, LabelText} from '../../../../components';
import styles from './CourseDocumentsFullViewStyles';
import {
  menu,
  BackArrow,
  plain,
  downloadFrame,
  email,
} from '../../../../assets/index';
import RBSheet from 'react-native-raw-bottom-sheet';
import {dynamicSize, Fonts} from '../../../../constant';
import {Colors} from '../../../../theme/colors';

const CourseDocumentsFullView = ({navigation}) => {
  const refRBSheet = useRef();
  const DownloadBottomSheet = () => {
    const [downloadFile, setDownloadFile] = useState([
      {icon: downloadFrame, file: 'Download'},
      {icon: email, file: 'Email'},
    ]);
    return (
      <View style={{flex: 1, padding: 20}}>
        {downloadFile.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View style={{paddingRight: 15}}>
              <CImage imgUrl={item.icon} style={{width: 20, height: 20}} />
            </View>
            <TouchableOpacity>
              <LabelText
                label={item.file}
                labelStyle={{
                  fontSize: dynamicSize(16),
                  fontFamily: Fonts.fontSemiBold,
                  paddingBottom: 20,
                  color: Colors.brochures_text,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        icons={true}
        searchIcon={menu}
        backArrow={BackArrow}
        textInput={false}
        inputText={'3 Day Foundation Workshop'}
        editPress={() => refRBSheet.current.open()}
        textStyle={{
          color: '#000000',
          fontSize: dynamicSize(17),
          fontFamily: Fonts.fontSemiBold,
        }}
      />
      <ScrollView style={{flex: 1, marginTop: 12}}>
        <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
          <Image
            source={plain}
            style={{
              resizeMode: 'cover',
              width: '100%',
              borderRadius: 6,
            }}
          />
        </TouchableOpacity>
        <Image
          source={plain}
          style={{
            marginTop: 12,
            resizeMode: 'cover',
            width: '100%',
            borderRadius: 6,
          }}
        />
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        height={170}
        openDuration={250}
        customStyles={{
          container: {
            width: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        <DownloadBottomSheet />
      </RBSheet>
    </SafeAreaView>
  );
};

export default CourseDocumentsFullView;
