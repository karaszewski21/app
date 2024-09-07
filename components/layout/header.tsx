import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface CustomHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<CustomHeaderProps> = ({ title, showBackButton = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db', // Niebieski kolor tła
    paddingHorizontal: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71', // Zielony kolor przycisku
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;