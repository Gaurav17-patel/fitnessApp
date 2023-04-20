import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {CImage, LabelText, CProgressBar, CInput} from './index';
import {dynamicSize, Fonts} from '../constant/index';
import {Colors} from '../theme/colors';

const CCertificateUI = ({
  certificateName,
  uploadBtn,
  numberText,
  indexNo,
  indexImg,
  imgUrl,
  onPress,
  displayProcessView,
  monthOnChange,
  dateOnChange,
  monthValue,
  dateValue,
  totalFileSizeNumber,
  uploadedNumber,
  monthErrorMsg,
  yearErrorMsg,
  fileUploadedPercentage,
  progressSteps,
  fileUploaded,
  disabled,
  disableBtnStyle,
}) => {
  return (
    <>
      <View style={styles.processView}>
        <View style={{width: '15%'}}>
          {/* <View
          style={{
            backgroundColor: 'red',
            borderRadius: 20,
            width: '40%',
            alignItems: 'center',
          }}> */}
          {/* {indexNo ? (
            <CImage imgUrl={imgUrl} style={{height: 27, width: 27}} />
          ) : (
            <LabelText label={numberText} labelStyle={styles.indexNumber} />
          )} */}
          {indexImg && (
            <CImage imgUrl={imgUrl} style={{height: 27, width: 27}} />
          )}
          {indexNo && (
            <LabelText label={numberText} labelStyle={styles.indexNumber} />
          )}
          {/* </View> */}
        </View>
        <View style={{width: '55%'}}>
          <LabelText label={certificateName} labelStyle={styles.textStyle} />
        </View>
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={{
            width: '30%',
            alignItems: 'flex-end',
          }}>
          <LabelText
            label={uploadBtn}
            labelStyle={styles.buttonTextStyle}
          />
        </TouchableOpacity>
      </View>
      {displayProcessView && (
        <View>
          <View style={{width: '85%', alignSelf: 'flex-end'}}>
            <CProgressBar
              progressStep={progressSteps}
              progressBarColor={Colors.ProgressBar_Line_Color}
              style={styles.progressBarStyle}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              alignSelf: 'flex-end',
              alignItems: 'center',
              marginTop: 6,
              justifyContent: 'space-between',
            }}>
            <LabelText
              label={`${uploadedNumber} / ${totalFileSizeNumber}`}
              labelStyle={styles.detailsText}
            />
            <LabelText
              label={
                !fileUploaded
                  ? `Uploading ... ${
                      fileUploadedPercentage ? fileUploadedPercentage + '%' : ''
                    }`
                  : `Uploaded.`
              }
              labelStyle={styles.updateLoading}
            />
          </View>
          <View
            style={{
              width: '85%',
              alignSelf: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 32,
              marginBottom: 16,
            }}>
            <View
              style={{
                width: '48%',
              }}>
              <CInput
                showPlaceholder={'January'}
                inputStyle={styles.inputStyle}
                label={'Expiry Month'}
                labelTextStyle={styles.userNameText}
                placeholderColor={Colors.placeholder_color}
                value={monthValue}
                onChangeText={monthOnChange}
              />
              <LabelText
                label={monthErrorMsg}
                labelStyle={{color: 'red', fontSize: 12, marginTop: 5}}
              />
            </View>
            <View
              style={{
                width: '48%',
              }}>
              <CInput
                showPlaceholder={'2025'}
                inputStyle={styles.inputStyle}
                label={'Expiry Date'}
                labelTextStyle={styles.userNameText}
                placeholderColor={Colors.placeholder_color}
                value={dateValue}
                onChangeText={dateOnChange}
                keyboardType={'numeric'}
                maxLength={4}
              />
              <LabelText
                label={yearErrorMsg}
                labelStyle={{color: 'red', fontSize: 12, marginTop: 5}}
              />
            </View>
          </View>
        </View>
      )}
      <View style={styles.borderStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  processView: {
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  buttonTextStyle: {
    fontSize: dynamicSize(14),
    fontFamily: Fonts.fontBold,
    color: Colors.forgot_psw,
  },
  indexNumber: {
    width: 25,
    height: 25,
    paddingTop: 2,
    borderRadius: 12,
    textAlign: 'center',
    borderWidth: 0.5,
  },
  detailsText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontRegular,
    color: Colors.Header_Text_Color,
  },
  progressBarStyle: {
    // marginTop: 6,
    backgroundColor: 'red',
  },
  updateLoading: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontBold,
    color: Colors.ProgressBar_Line_Color,
  },
  userNameText: {
    fontSize: dynamicSize(12),
    fontFamily: Fonts.fontSemiBold,
    color: Colors.welcome_text,
  },
  inputStyle: {
    // padding: 14,
    marginTop: 8,
    borderRadius: 4,
    borderWidth: 1,
    height: dynamicSize(48),
    fontSize: dynamicSize(16),
    fontFamily: Fonts.fontMedium,
    backgroundColor: Colors.role_BG_Color,
    borderColor: Colors.border_color,
  },
  borderStyle: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.ProgessBar_BG_Color,
  },
});

export default CCertificateUI;
