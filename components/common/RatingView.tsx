import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface RatingViewProps {
  title: string;
  subTitle: string;
  onSubmit: (rating: number, review: string) => void;
  onClose: () => void;
}

const RatingView: React.FC<RatingViewProps> = ({title, subTitle, onSubmit, onClose }) => {
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
            colors={['#0891b2', '#0891b2', '#0891b2']}
            style={styles.container}
        >
        <View style={styles.closeButton}>
          <Ionicons
                name={'close-circle'}
                size={30}
                color="#f5d066"
          />
        </View>  
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.bookTitle}>{subTitle}</Text>
        <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                <Ionicons
                name={star <= rating ? 'star' : 'star-outline'}
                size={40}
                color="#f5d066"
                />
            </TouchableOpacity>
            ))}
        </View>
        <TextInput
            style={styles.reviewInput}
            placeholder="Napisz swoją recenzję (opcjonalnie)"
            placeholderTextColor="#f5d066"
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
    padding: 15,
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
    width: 300,
  },
  title: {
    fontSize: 20,
    fontFamily: 'ShantellSans-SemiBoldItalic',
    color: 'white',
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    color: '#E0E0E0',
    fontFamily: 'ShantellSans-SemiBoldItalic',
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
    verticalAlign: 'top',
    fontSize: 12,
    fontFamily: 'ShantellSans-SemiBoldItalic',
  },
  submitButton: {
    backgroundColor: '#f5d066',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'ShantellSans-SemiBoldItalic',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5
  }
});

export default RatingView;