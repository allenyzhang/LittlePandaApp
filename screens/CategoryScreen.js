// CategoryScreen.js

import React from 'react';
import { View, Text, FlatList, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const categories = [
    { name: 'Level1', books: ['Book 1', 'Book 2', 'Book 3'] },
    { name: 'Level2', books: ['Book 4', 'Book 5', 'Book 6','Book 4', 'Book 5', 'Book 6'] },
    { name: 'Level3', books: ['Book 4', 'Book 5', 'Book 6'] },
    { name: 'Level4', books: ['Book 4', 'Book 5', 'Book 6'] },
    { name: 'Level5', books: ['Book 4', 'Book 5', 'Book 6'] },
    { name: 'Level6', books: ['Book 4', 'Book 5', 'Book 6'] },
    // ... other categories
  ];

  const bookCovers = {
    'Book 1': require('../resources/Book1.png'),
    'Book 2': require('../resources/Book2.png'),
    'Book 3': require('../resources/Book3.png'),
    'Book 4': require('../resources/Book4.png'),
    'Book 5': require('../resources/Book5.png'),
    'Book 6': require('../resources/Book6.png'),
    // ... cover images for other books
  };


//   const navigateToBooks = (categoryName, books) => {
//     navigation.navigate('Books', { categoryName, books, bookCovers });
//   };

//   // const renderBook = (book) => (
//   //   <TouchableOpacity
//   //     onPress={() => navigateToBooks(book.name, book.books)}
//   //   >
//   //     <View style={styles.book}>
//   //       <Image source={bookCovers[book]} style={styles.coverImage} />
//   //       <Text style={styles.bookTitle}>{book}</Text>
//   //     </View>
//   //   </TouchableOpacity>
//   // );

//   const renderBook = (item) => (
//     <TouchableOpacity
//       onPress={() => navigateToBooks(item.name, item.books)}
//     >
//       <View style={styles.book}>
//         <Image source={bookCovers[item]} style={styles.coverImage} />
//         <Text style={styles.bookTitle}>{item}</Text>
//       </View>
//     </TouchableOpacity>
//   );


//   const renderCategory = ({ item }) => (
//     <View style={styles.category}>
//       <Text style={styles.categoryName}>{item.name}</Text>
//       <FlatList
//         data={item.books}
//         horizontal
//         keyExtractor={(book, index) => index.toString()}
//         renderItem={({ item: book }) => renderBook(book)}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Categories</Text>
//       <FlatList
//         data={categories}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderCategory}
//       />
//     </View>
//   );
// };

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
//   category: {
//     marginBottom: 20,
//   },
//   categoryName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   book: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   coverImage: {
//     width: 100,
//     height: 140,
//     marginBottom: 5,
//   },
//   bookTitle: {
//     textAlign: 'center',
//   },
// });

// export default CategoryScreen;

  const navigateToBooks = (categoryName, books) => {
    navigation.navigate('Books', { categoryName, books, bookCovers });
  };

  const renderCategory = ({ item }) => (
    <View style={styles.category}>
      <Text style={styles.categoryName}>{item.name}</Text>
      <FlatList
        data={item.books}
        horizontal
        keyExtractor={(book, index) => index.toString()}
        renderItem={({ item: book }) => (
          <TouchableOpacity
            onPress={() => navigateToBooks(item.name, item.books)}
          >
            <View style={styles.book}>
              <Image source={bookCovers[book]} style={styles.coverImage} />
              <Text style={styles.bookTitle}>{book}</Text>
              {/* <Text>{book}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCategory}
      />
    </View>
  );
};

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
//   category: {
//     marginBottom: 20,
//   },
//   categoryName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
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
  category: {
    marginBottom: 20,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  book: {
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 5,
  },
  coverImage: {
    width: 100,
    height: 140,
    marginBottom: 5,
  },
  bookTitle: {
    textAlign: 'center',
  },
});

export default CategoryScreen;



