// ReadingScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech'; // Import Expo Speech
import bookContent from '../resources/bookContent.json';

const ReadingScreen = ({ route }) => {
  const { bookTitle } = route.params;
  const content = bookContent[bookTitle] || 'No content available'; // Fallback to a default message if content is not found

  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const startSpeaking = async () => {
    try {
      await Speech.speak(content, {
        language: 'zh',
        rate: 0.8,
      });
      setIsSpeaking(true);
    } catch (error) {
      console.error('Error starting speech:', error);
    }
  };

  const stopSpeaking = async () => {
    try {
      await Speech.stop();
      setIsSpeaking(false);
    } catch (error) {
      console.error('Error stopping speech:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reading: {bookTitle}</Text>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.speakButton}
        onPress={isSpeaking ? stopSpeaking : startSpeaking}
      >
        <Text style={styles.speakButtonText}>
          {isSpeaking ? 'Stop Speaking' : 'Start Speaking'}
        </Text>
      </TouchableOpacity>
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
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  content: {
    fontSize: 16,
  },
  speakButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  speakButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ReadingScreen;
