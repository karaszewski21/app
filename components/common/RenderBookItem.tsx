import React, { useCallback, useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import IndexVideo from './IndexVideo'; // Upewnij się, że ścieżka importu jest poprawna

interface Book {
  id: string;
  indexType: string;
  indexUrl: string;
  // inne pola książki...
}

interface RenderBookItemProps {
  book: Book;
  navigation: any; // Użyj właściwego typu dla nawigacji
  styles: any; // Użyj właściwego typu dla stylów
}

const RenderBookItem: React.FC<RenderBookItemProps> = ({ book, navigation, styles }) => {
  const videoRef = useRef<any>();

  useEffect(() => {
    // Efekt do obsługi montowania/odmontowywania komponentu
    return () => {
      if (videoRef.current) {
        // Zatrzymaj odtwarzanie wideo przy odmontowywaniu
        //@ts-ignore
        videoRef.current.unloadAsync();
      }
    };
  }, []);

  const handlePress = useCallback(() => {
    navigation.navigate('BookDetails', { book });
  }, [navigation, book]);

  return (
    <TouchableOpacity 
      key={book.id} 
      style={[
        styles.tileItem, 
        {
          backgroundColor: book.id === '3' ? '#f5d066' : book.id === '2' ? '#c3d5e1' : '#f5d066'
        }
      ]}
      onPress={handlePress}
    >
      <IndexVideo
        //@ts-ignore
        ref={videoRef}
        key={`${book.id}-${book.indexUrl}`}
        type={book.indexType ?? ''}
        isLooping={false}
        source={book.indexUrl}
        style={styles.indexUrl}
      />
    </TouchableOpacity>
  );
};

export const renderBookItem = React.memo(RenderBookItem);