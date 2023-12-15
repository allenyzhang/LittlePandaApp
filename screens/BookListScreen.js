// BookListScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const BookListScreen = ({ navigation, route }) => {
  const { categoryName, books, bookCovers } = route.params;

  const navigateToReading = (bookTitle, bookCover) => {
    navigation.navigate('Reading', { bookTitle, bookCover });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToReading(item, bookCovers[item])}>
            <View style={styles.book}>
              <Image source={bookCovers[item]} style={styles.coverImage} />
              <Text style={styles.bookTitle}>{item}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  coverImage: {
    width: 50,
    height: 70,
    marginRight: 10,
  },
  bookTitle: {
    marginLeft: 10,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   book: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   coverImage: {
//     width: 50,
//     height: 70,
//     marginRight: 10,
//   },
// });

export default BookListScreen;
