import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ReaderButton = ({ 
  title, 
  onPress, 
  leftIconName = 'checkbox-blank-circle-outline',
  rightIconName = 'chevron-right',
  backgroundColor = '#3498db',
  textColor = '#ffffff',
  subtitle,
  customStyles = {}
}) => (
  <TouchableOpacity 
    style={[styles.item, { backgroundColor }, customStyles.container]}
    onPress={onPress}
  >
    <MaterialCommunityIcons 
      name={leftIconName} 
      size={24} 
      color={textColor} 
      style={[styles.leftIcon, customStyles.leftIcon]} 
    />
    <View style={styles.textContainer}>
      <Text style={[styles.title, { color: textColor }, customStyles.title]}>{title}</Text>
      {subtitle && <Text style={[styles.subtitle, { color: textColor }, customStyles.subtitle]}>{subtitle}</Text>}
    </View>
    <MaterialCommunityIcons 
      name={rightIconName} 
      size={24} 
      color={textColor} 
      style={[styles.rightIcon, customStyles.rightIcon]}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
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

export default ReaderButton;