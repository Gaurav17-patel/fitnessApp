import React, {useEffect} from 'react';
import {BackHandler, Platform} from 'react-native';
import {Provider} from 'react-redux';
import AppContainer from './src/AppContainer';
import CLoader from './src/components/CLoader';
import {store} from './src/redux/store';
import InternetConnectionAlert from 'react-native-internet-connection-alert';

const App = () => {
  useEffect(() => {
    if (Platform === 'android') {
      const onBackPress = () => false;
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }
  }, []);

  return (
    <InternetConnectionAlert
      title={'Internet Connection Lost'}
      message={'Your device is not connected with the internet'}
      onChange={connectionState => {
        console.log('Connection State: ', connectionState);
      }}>
      <Provider store={store}>
        <AppContainer />
        <CLoader />
      </Provider>
    </InternetConnectionAlert>
  );
};

export default App;
