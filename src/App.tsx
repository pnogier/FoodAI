import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import {MainSafeAreaView} from './styles/base.style';
import './i18n';

const App = () => {
  console.log('app');
  return (
    <MainSafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </MainSafeAreaView>
  );
};

export default App;
