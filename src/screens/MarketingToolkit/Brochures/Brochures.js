import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CSearchBar, LabelText, CImage} from '../../../components/index';
import styles from './BrochuresStyles';
import {
  BackArrow,
  download,
  jpgIcon,
  pdfIcon,
  EpsIcon,
  Search,
} from '../../../assets/index';
import {dynamicSize, Fonts} from '../../../constant/index';
import {Colors} from '../../../theme/index';
import RBSheet from 'react-native-raw-bottom-sheet';

const Brochures = ({navigation}) => {
  const refRBSheet = useRef();
  const [brochures, setBrochures] = useState([
    {heading: 'Foundation Course'},
    {heading: 'Instructor Training'},
    {heading: 'Manual'},
    {heading: 'Helpful Insights'},
    {heading: 'Foundation Course'},
    {heading: 'Instructor Training'},
  ]);

  const DownloadBottomSheet = props => {
    const {number} = props;
    const [downloadFile, setDownloadFile] = useState([
      {icon: jpgIcon, file: 'Jpg'},
      {icon: pdfIcon, file: 'Pdf'},
      {icon: EpsIcon, file: 'Eps'},
    ]);
    return (
      <View style={{flex: 1, padding: 20}}>
        <View
          style={{
            borderBottomWidth: 1,
            marginTop: 10,
            borderColor: Colors.border_color,
          }}>
          <LabelText
            label={'Download as'}
            labelStyle={{
              fontSize: dynamicSize(18),
              fontFamily: Fonts.fontSemiBold,
              paddingBottom: 20,
              color: Colors.welcome_text,
            }}
          />
        </View>
        {downloadFile.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View style={{paddingRight: 15}}>
              <CImage imgUrl={item.icon} style={{width: 25, height: 25}} />
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

  const GridView = ({name, index}) => (
    <View style={styles.gridStyle}>
      <View style={styles.grid}></View>
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={{
          marginBottom: 32,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '88%',
          alignSelf: 'center',
        }}>
        <LabelText
          label={`${name}`}
          labelStyle={{
            fontSize: dynamicSize(14),
            fontFamily: Fonts.fontSemiBold,
            color: Colors.brochures_text,
          }}
        />
        {/* <TouchableOpacity> */}
        <CImage imgUrl={download} style={{width: 14, height: 14}} />
        {/* </TouchableOpacity> */}
        <RBSheet
          ref={refRBSheet}
          height={280}
          openDuration={250}
          customStyles={{
            container: {
              width: '100%',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            },
          }}>
          <DownloadBottomSheet number={index} />
        </RBSheet>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        icons={true}
        searchIcon={Search}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Flyers & Brochures'}
      />
      <View style={styles.flatListStyle}>
        <FlatList
          data={brochures}
          keyExtractor={(item, index) => index}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          key={item => item.id}
          renderItem={({item, index}) => (
            <GridView name={item.heading} index={index} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Brochures;
