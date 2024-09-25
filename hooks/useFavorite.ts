import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Type = 'reader' | 'book' | 'player'

interface Favorite {
    id: string;
    type: Type;
}

const useFavorite = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorite');
      if (storedFavorites !== null) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const saveFavorites = async (newFavorites: Favorite[]) => {
    try {
      await AsyncStorage.setItem('favorite', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

 
  const addFavorite = async (fav: Favorite) => {
    const index = favorites.findIndex(item => item.id === fav.id);
    let newFavorites: Favorite[];
    if (index !== -1) {
      // Jeśli element istnieje, nadpisz go
      newFavorites = [...favorites];
      newFavorites[index] = fav;
    } else {
      // Jeśli element nie istnieje, dodaj go
      newFavorites = [...favorites, fav];
    }
    await saveFavorites(newFavorites);
  };


  const removeFavorite = async (id: string) => {
    const newFavorites = favorites.filter(fav => fav.id !== id);
    await saveFavorites(newFavorites);
  };

  const isFavorite = (id: string) => {
    return favorites.some(fav => fav.id === id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };
};

export default useFavorite;