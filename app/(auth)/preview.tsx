import { useSession } from '@/context/authContext';
import { Link } from 'expo-router';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Preview() {
  const { signIn } = useSession();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require('@/assets/icons/goldfish-logo.png')} style={{width: '100%', height: '100%', borderRadius: 30, resizeMode: 'contain'}}/>
        </View>
        <View style={styles.goldfish}>
          <Image source={require('@/assets/icons/goldfish.png')} style={{width: '100%', height: '100%'}}/>
        </View>
        <Text style={styles.tagline}>Odkrywaj, czytaj i słuchaj!</Text>
      </ScrollView>
      <TouchableOpacity style={styles.startButton} onPress={async () => { await signIn()}}>
          <Text style={styles.startButtonText}>Kontynuuj</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  goldfish: {
    height: 80,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  tagline: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: 'ShantellSans-SemiBoldItalic'
  },
  startButton: {
    backgroundColor: '#b17c08',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'ShantellSans-SemiBoldItalic'
  },
});