import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
