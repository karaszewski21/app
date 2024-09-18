import { Link } from 'expo-router';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Preview() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Strona preview</Text>
          <Link href={{ pathname: '/sign-in'}}>Kontynuuj</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});