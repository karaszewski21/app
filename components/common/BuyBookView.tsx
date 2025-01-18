import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Book } from '@/model';

interface BuyBookViewProps {
  book: Book;
  backgroundColor: string; 
  textColor: string; 
  bgColorButton: string; 
  onSubmit: (email: string) => void;
  onClose: () => void;
}

const BuyBookView: React.FC<BuyBookViewProps> = ({ book, backgroundColor, textColor, bgColorButton, onSubmit, onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSubmit(email);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={onClose}>
      <LinearGradient
        colors={['#235faf','#161d46','#0c1a45']}
        style={styles.container}
      >
        <View style={styles.closeButton}>
          <Ionicons
            name={'close-circle'}
            size={30}
            color="#f5d066"
            onPress={onClose}
          />
        </View>
        <Text style={[styles.title, {color:  '#fff'}]}>{book.title}</Text>
        <Image source={{ uri: book.gallery[0] }} style={styles.bookImage} />
        <Text style={[styles.description, {color:  '#fff'}]}>
          Niestety, ta książka jest obecnie niedostępna. Podaj swój adres e-mail,
          a powiadomimy Cię, gdy książka będzie znów dostępna!
        </Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Twój adres e-mail"
          placeholderTextColor="#f5d066"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity 
          style={[styles.submitButton, { backgroundColor: bgColorButton }]} 
          onPress={handleSubmit}
          disabled={!email}
        >
          <Text style={[styles.submitButtonText,{color: '#fff'}]}>Powiadom mnie</Text>
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
    textAlign: 'center',
  },
  bookImage: {
    width: 150,
    height: 225,
    marginBottom: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    color: '#E0E0E0',
    fontFamily: 'ShantellSans-SemiBoldItalic',
    marginBottom: 20,
    textAlign: 'center',
  },
  emailInput: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: 'white',
    fontSize: 18,
    fontFamily: 'ShantellSans-SemiBoldItalic',
  },
  submitButton: {
    backgroundColor: '#c45c48',
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
    right: 5,
  }
});

export default BuyBookView;