import { useState, useEffect } from 'react';
import { AudioPlay, Book, Reader } from '@/model';

type Product = Book | Reader | AudioPlay;

const useRating = () => {
  const [product, setProduct] = useState<Product>();
  const [rating, setRating] = useState<number>();
  const [ratingModal, setRatingModal] = useState<boolean>(false);

  const onSelectProductPress = (item: Product) => {
    setRatingModal(true);
    setProduct(item);
  };

  const onRatingPress = (item: number) => {
    setRatingModal(false);
    setRating(item)
  };

  return {
    product,
    onSelectProductPress,
    onRatingPress,
    setRatingModal,
    ratingModal
  };
};

export default useRating;