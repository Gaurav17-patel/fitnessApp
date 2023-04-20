import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CImage, LabelText} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';
import {userImage} from '../assets/index';

const CHomeClassHeader = ({date, headerText, bodyText, userImg}) => {
  return (
    <View style={{padding: 15, marginTop: 15}}>
      <LabelText label={date} labelStyle={styles.dateStyles} />
      <View
        style={{
          marginTop: 18,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <LabelText label={headerText} labelStyle={styles.headerText} />
          <LabelText label={bodyText} labelStyle={styles.bodyText} />
        </View>
        {userImg && (
          <CImage imgUrl={userImage} style={{width: 56, height: 56}} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: dynamicSize(32),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  bodyText: {
    marginTop: 6,
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontRegular,
    color: Colors.label_text,
  },
  dateStyles: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.ProgressBar_Line_Color,
  },
});

export default CHomeClassHeader;
