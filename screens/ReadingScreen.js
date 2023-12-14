// ReadingScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReadingScreen = ({ route }) => {
  const { bookTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reading: {bookTitle}</Text>
      {/* Add reading mode components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  // Add styles for reading mode components
});

export default ReadingScreen;