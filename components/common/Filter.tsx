import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { ageGroups } from '@/constants/AgeGroups';
import useAgeGroupsIcon from '@/hooks/useAgeGroupsIcon';
import { AgeGroup } from '@/model';
import { FILTER_HEIGHT } from '@/constants/Common';
interface FilterProps {
  filter?: () => any;
  hidden: boolean;
  onOptionSelect: (item: AgeGroup) => void;
  reset?: boolean;
}

const Filter: React.FC<FilterProps> = ({ filter, hidden, onOptionSelect, reset }) => {
  const { ageGroupsIcon } = useAgeGroupsIcon();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const filterTranslateY = useSharedValue<number>(0);
  const dropdownHeight = useSharedValue<number>(0);

  const filterAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: filterTranslateY.value }],
  }));

  const dropdownAnimatedStyle = useAnimatedStyle(() => ({
    height: dropdownHeight.value,
    opacity: dropdownHeight.value === 0 ? 0 : 1,
  }));

  if (hidden) {
    filterTranslateY.value = withSpring(-100);
  } else {
    filterTranslateY.value = withSpring(0);
  }
    
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    dropdownHeight.value = withTiming(isDropdownVisible ? 0 : reset ? 350 : 300, { duration: 300 });
  };

  const renderOption = ({ item } : any) => {

    return(
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => {
        onOptionSelect(item);
        toggleDropdown();
      }}
    >
        <Image source={ageGroupsIcon[item.id]} style={styles.optionImage} />
        <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
    );
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
          <TouchableOpacity style={styles.filterButton} onPress={toggleDropdown}>
            <MaterialCommunityIcons 
                name={"menu"} 
                size={24} 
                color="#fff" 
              />
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View style={[styles.dropdownContainer, dropdownAnimatedStyle]}>
        <FlatList
          data={ageGroups}
          renderItem={renderOption}
          keyExtractor={(item) => item.title}
        />
      </Animated.View>
   </Animated.View>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingLeft: 15,
      paddingRight: 15
    },
    filterContainer: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      height: FILTER_HEIGHT,
      zIndex: 3,
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
      backgroundColor: '#eccc63',
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dropdownContainer: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
      overflow: 'hidden',
      zIndex: 10
    },
    optionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      paddingLeft: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    optionImage: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: '#c3d5e1',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // To jest potrzebne dla Androida
    },
    optionText: {
      marginLeft: 10,
      fontSize: 16,
    },
  });

export default Filter;