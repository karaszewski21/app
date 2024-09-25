import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { audiobook } from '@/constants/Audiobook';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { usePlayerModal } from '@/context/playerModalContext';

const PrintoutsStack = createStackNavigator();

export default function PrintoutsStackScreen() {
  return (
    <PrintoutsStack.Navigator>
      <PrintoutsStack.Screen name="PrintoutsDetails" component={PrintoutsScreen} options={{headerShown: false}} />
    </PrintoutsStack.Navigator>
  );
}

const PrintoutsScreen = ({ navigation }:any) => { 
  const [currentAudiobook, setCurrentAudiobook] = useState(null);
  const { openPlayer } = usePlayerModal()

  const versions = audiobook.versions
  
  const openAudioBookItem = (version: any) => {
        const { title } = audiobook
        openPlayer({
          title: version.type,
          fileUrl: version.audioFile,
          imageUrl: 'https://goldfish.fra1.digitaloceanspaces.com/stories/Leonardo_Phoenix_A_modern_vibrant_social_media_post_featuring_3.jpg'
        })
  }

  const renderAudioBookItem = ({item}: any) => { 
    return(
    <TouchableOpacity 
      style={styles.item}
      onPress={() =>openAudioBookItem(item)}
    >
      <Text style={styles.title}>{item.type}</Text>
      <Ionicons name="chevron-forward" size={24} color="#3498db" />
    </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>{audiobook.title}</Text>
          <Image source={{ uri: audiobook.image }} style={styles.image}/>
        </View>
        <FlatList
          data={versions}
          renderItem={renderAudioBookItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
    
  )
  }

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    contentContainer: {
      padding: 20,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      color: '#333',
    },
    listContent: {
      padding: 16,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
  });