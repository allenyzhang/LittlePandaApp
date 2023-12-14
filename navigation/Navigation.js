// Navigation.js

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from '../screens/CategoryScreen';
import BookListScreen from '../screens/BookListScreen';
import ReadingScreen from '../screens/ReadingScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoryScreen} />
      <Stack.Screen name="Books" component={BookListScreen} />
      <Stack.Screen name="Reading" component={ReadingScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;