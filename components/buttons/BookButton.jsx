import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BookButton = ({ 
  title, 
  onPress, 
  leftIconName = 'checkbox-blank-circle-outline',
  backgroundColor = '#3498db',
  textColor = '#ffffff',
  customStyles = {}
}) => (
  <TouchableOpacity 
    style={[styles.item, { backgroundColor }, customStyles.container]}
    onPress={onPress}
  >
    <View style={styles.textContainer}>
      <Text style={[styles.title, { color: textColor }, customStyles.title]}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    width: 200,
    flexDirection: 'row',
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
});

export default BookButton;