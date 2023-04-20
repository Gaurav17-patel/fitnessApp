import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CImage, LabelText} from './index';
import {Colors} from '../theme/colors';
import {dynamicSize} from '../constant/DynamicFontSize';

const SocialButton = ({mainStyle, socialLoginText, socialLogo, socialPress}) => {
  return (
    <TouchableOpacity style={[styles.container, mainStyle]} onPress={socialPress}>
      <View style={{width: '20%', alignItems: 'center'}}>
        <CImage imgUrl={socialLogo} style={styles.logoStyle} />
      </View>
      <View style={{width: '80%'}}>
        <LabelText label={socialLoginText} labelStyle={styles.textStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1.2,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: Colors.border_color,
  },
  logoStyle: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: dynamicSize(18),
    fontWeight: 'bold',
    color: Colors.welcome_text,
  },
});

export default SocialButton;
