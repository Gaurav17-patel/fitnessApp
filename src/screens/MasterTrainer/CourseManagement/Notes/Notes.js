import {View, SafeAreaView, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import {CSearchBar, LabelText} from '../../../../components/index';
import styles from './NotesStyles';
import {BackArrow} from '../../../../assets/index';
import {dynamicSize, Fonts} from '../../../../constant/index';
import {Colors} from '../../../../theme/index';

const Notes = ({navigation}) => {
  const refRBSheet = useRef();
  const [brochures, setBrochures] = useState([
    {heading: 'Basic steps to be taken while guiding'},
    {heading: 'Instructor Training Manual'},
    {heading: 'My PPT'},
    {heading: 'Helpful Insights'},
  ]);

  const GridView = ({name, index}) => (
    <View style={styles.gridStyle}>
      <View style={styles.grid}></View>
      <View
        style={{
          marginBottom: 32,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '76%',
          marginLeft: 10
        }}>
        <LabelText
          label={`${name}`}
          labelStyle={{
            fontSize: dynamicSize(14),
            fontFamily: Fonts.fontSemiBold,
            color: Colors.brochures_text,
          }}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CSearchBar
        onPress={() => navigation.goBack()}
        textInput={true}
        showSearchIcon={true}
        backArrow={BackArrow}
        textInput={false}
        inputText={'Notes'}
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

export default Notes;
