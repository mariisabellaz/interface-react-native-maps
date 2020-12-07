import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/main/index';

const App = createStackNavigator();

const MainRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{headerShown: false, cardStyle: {backgroundColor: '#FFF'}}}>
    <App.Screen name="Main" component={Main} />
  </App.Navigator>
);

export default MainRoutes;
