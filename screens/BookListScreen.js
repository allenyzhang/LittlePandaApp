// BookListScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BookListScreen = ({ navigation, route }) => {
  const { categoryName, books } = route.params;

  const navigateToReading = (bookTitle) => {
    navigation.navigate('Reading', { bookTitle });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToReading(item)}>
            <View style={styles.book}>
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
  book: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default BookListScreen;
