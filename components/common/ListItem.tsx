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
    onFavoritePress: () => void;
    isFavorite: boolean
  }
}

const ListItem: React.FC<ItemProps> = ({props}) => {
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
        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
        <TouchableOpacity onPress={props.onRatingPress} style={styles.ratingContainer}>
          {renderStars()}
          <Text style={styles.reviewCount}>({props.reviewCount})</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={props.onFavoritePress}
      >
        <AntDesign
          name={props.isFavorite ? 'heart' : 'hearto'}
          size={24}
          color={props.isFavorite ? '#FF6B6B' : '#BDC3C7'}
        />
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
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
    height: 90,
    borderRadius: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});

export default ListItem;