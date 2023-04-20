import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CImage, LabelText} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';

const CProfile = ({userIcon, userName, validDate}) => {
  return (
    <View style={styles.container}>
      <CImage imgUrl={userIcon} style={{width: 64, height: 64}} />
      <View style={{paddingLeft: 15}}>
        <LabelText label={userName} labelStyle={styles.headerText} />
        <LabelText label={validDate} labelStyle={styles.bodyText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 44,
    // marginBottom: 30,
  },
  headerText: {
    fontSize: dynamicSize(28),
    fontFamily: Fonts.fontBold,
    color: Colors.welcome_text,
  },
  bodyText: {
    marginTop: 6,
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.ProgressBar_Line_Color,
  },
});

export default CProfile;
