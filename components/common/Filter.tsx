import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
interface FilterProps {
  filter?: () => any;
  hidden: boolean
}

const Filter: React.FC<FilterProps> = ({ filter, hidden }) => {
  const filterTranslateY = useSharedValue<number>(0);

  const filterAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: filterTranslateY.value }],
  }));

  if (hidden) {
    filterTranslateY.value = withSpring(-100);
  } else {
    filterTranslateY.value = withSpring(0);
  }   

  return (
    <Animated.View style={[styles.filterContainer, filterAnimatedStyle, {transform: [{translateY: 0}]}]}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <MaterialCommunityIcons 
                name={"book-search-outline"} 
                size={24} 
                color="#000" 
              />
            <TextInput
              style={styles.searchInput}
              placeholder="Szukaj..."
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons 
                name={"menu"} 
                size={24} 
                color="#fff" 
              />
          </TouchableOpacity>
        </View>
      </View>
   </Animated.View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    filterContainer: {
      position: 'absolute',
      top: 130,
      left: 0,
      right: 0,
      height: 50,
      zIndex: 1,
    },
    searchContainer: {
      flexDirection: 'row',
    },
    searchInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      height: 40,
      marginLeft: 10,
    },
    filterButton: {
      backgroundColor: '#4a90e2',
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Filter;