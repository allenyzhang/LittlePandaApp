// CategoryScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const categories = [
    { name: 'Level1', books: ['Book 1', 'Book 2', 'Book 3'] },
    { name: 'Level2', books: ['Book 4', 'Book 5', 'Book 6'] },
    { name: 'Level3', books: ['Book 7', 'Book 8', 'Book 9'] },
    { name: 'Level4', books: ['Book 10', 'Book 11', 'Book 12'] },
    { name: 'Level5', books: ['Book 13', 'Book 14', 'Book 15'] },
    { name: 'Level6', books: ['Book 16', 'Book 17', 'Book 18'] },
  ];

  const navigateToBooks = (categoryName, books) => {
    navigation.navigate('Books', { categoryName, books });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {categories.map((category, index) => (
        <View key={index} style={styles.category}>
          <Button
            title={category.name}
            onPress={() => navigateToBooks(category.name, category.books)}
          />
        </View>
      ))}
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
  category: {
    marginVertical: 10,
    width: 200,
  },
});

export default CategoryScreen;
