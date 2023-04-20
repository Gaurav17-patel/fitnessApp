import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, Modal} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {dynamicSize} from '../../src/constant/DynamicFontSize';
import {Fonts} from '../constant/Fonts';
import {Colors} from '../theme/colors';

const CLoader = () => {
  const showLoader = useSelector(state => state.loader);
  return (
    <>
      {showLoader && (
        <Modal visible={showLoader}>
          <View style={styles.container}>
            <View style={styles.absoluteContainer}>
              <View>
                <ActivityIndicator
                  style={{marginLeft: dynamicSize(10)}}
                  size={'medium'}
                  color={Colors.btn_color}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: dynamicSize(22),
    height: dynamicSize(45),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
  },
  loadingContainer: {
    fontFamily: Fonts.fontMedium,
    fontWeight: '500',
    fontSize: dynamicSize(14),
    color: 'yellow',
    marginLeft: dynamicSize(10),
    marginRight: dynamicSize(20),
  },
});

export default CLoader;
