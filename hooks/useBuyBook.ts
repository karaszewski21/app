import { useState, useEffect } from 'react';
import { Book } from '@/model';

const useBuyBook = (book: Book) => {
  const [selectedBook, setBook] = useState<Book>(book);
  const [buyBookModal, setBuyBookModal] = useState<boolean>(false);

  const onSelectBookPress = (item: Book) => {
    setBuyBookModal(true);
    setBook(item);
  };

  const buyBookPress = (email: string) => {
    console.log('send email', email)
    setBuyBookModal(false);
  };

  return {
    buyBookModal,
    selectedBook,
    onSelectBookPress,
    buyBookPress,
    setBuyBookModal,
  };
};

export default useBuyBook;