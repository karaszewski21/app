import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface RatingViewProps {
  bookTitle: string;
  onSubmit: (rating: number, review: string) => void;
  onClose: () => void;
}

const RatingView: React.FC<RatingViewProps> = ({ bookTitle, onSubmit, onClose }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleStarPress = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    onSubmit(rating, review);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <TouchableOpacity onPress={handleClose}>
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.container}
        >
        <Text style={styles.title}>x</Text>
        <Text style={styles.title}>Oceń książkę</Text>
        <Text style={styles.bookTitle}>{bookTitle}</Text>
        <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                <Ionicons
                name={star <= rating ? 'star' : 'star-outline'}
                size={40}
                color="#FFD700"
                />
            </TouchableOpacity>
            ))}
        </View>
        <TextInput
            style={styles.reviewInput}
            placeholder="Napisz swoją recenzję (opcjonalnie)"
            placeholderTextColor="#A0A0A0"
            multiline
            numberOfLines={4}
            value={review}
            onChangeText={setReview}
        />
        <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmit}
            disabled={rating === 0}
        >
            <Text style={styles.submitButtonText}>Zatwierdź ocenę</Text>
        </TouchableOpacity>
        </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    color: '#E0E0E0',
    marginBottom: 20,
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  reviewInput: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: 'white',
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RatingView;