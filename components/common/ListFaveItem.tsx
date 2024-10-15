import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

interface ItemProps {
  props: {
    imageUrl: string;
    title: string;
    rating: number;
    reviewCount: number;
    onPress: () => void;
    onRatingPress: () => void;
    onRemovePress: () => void;
  }
}

const ListFaveItem: React.FC<ItemProps> = ({props}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= props.rating ? 'star' : 'star-outline'}
          size={16}
          color="#FFD700"
        />
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        <TouchableOpacity onPress={props.onRatingPress} style={styles.ratingContainer}>
          {renderStars()}
          <Text style={styles.reviewCount}>({props.reviewCount})</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={props.onRemovePress} style={styles.favoriteButton}>
          <AntDesign
            name={'close'}
            size={24}
          />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF7D6',
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  image: {
    width: 60,
    height: 80,
    borderRadius: 5,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    fontFamily: 'ShantellSans-SemiBoldItalic',
    color: '#333333',
    marginBottom: 5,
  },

  ratingContainer: {
    flexDirection: 'row',
  },

  reviewCount: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },

  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  
});

export default ListFaveItem;