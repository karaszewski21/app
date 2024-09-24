import { StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFavorite from '@/hooks/useFavorite';

export default function FaveScreen() {
  const {favorites, isFavorite, addFavorite, removeFavorite } = useFavorite();

  const renderItem = ({ item }: any) => {
    const {id, type} = item; 
   
   
  const goToBook = () => {

  } 
  
  const goToReader = () => {
    
  }  

   return(
    <TouchableOpacity onPress={goToBook}>
        <Text>{id}{type}</Text>
    </TouchableOpacity>) 
 }

  return (
    <SafeAreaView>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  }
});
