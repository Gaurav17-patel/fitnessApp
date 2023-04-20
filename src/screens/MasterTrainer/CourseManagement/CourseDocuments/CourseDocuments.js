import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {CSearchBar, LabelText} from '../../../../components/index';
import styles from './CourseDocumentsStyles';
import {BackArrow} from '../../../../assets/index';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/index';

const CourseDocuments = ({navigation}) => {
  const refRBSheet = useRef();
  const [brochures, setBrochures] = useState([
    {heading: '3 Day Foundation Workshop'},
    {heading: 'Instructor Training Manual'},
    {heading: 'Master Trainer Powerpoint'},
    {heading: 'Helpful Insights'},
  ]);

  const gotoNext = index => {
    if (index === 0) {
      navigation.navigate('CourseDocumentsFullView');
    } else if (index === 1) {
      console.log('Hello');
    }
  };

  const GridView = ({name, index}) => (
    <TouchableOpacity style={styles.gridStyle} onPress={() => gotoNext(index)}>
      <View style={styles.grid}></View>
      <View
        style={{
          marginBottom: 32,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <LabelText
          label={`${name}`}
          labelStyle={{
            fontSize: dynamicSize(12),
            fontFamily: Fonts.fontSemiBold,
            color: Colors.brochures_text,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Course Documents'}
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

export default CourseDocuments;
