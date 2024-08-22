import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Pressable, Text, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function FunHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Link href="/(tabs)/fun/readers" asChild>
        <Pressable>
          <Text>Czytanki</Text>
        </Pressable>
      </Link>
      <Link href="/(tabs)/fun/audio_play" asChild>
        <Pressable>
          <Text>Słuchowiska</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
