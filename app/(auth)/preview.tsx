import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Preview() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Strona preview</Text>
          <Link href={{ pathname: '/sign-in'}}>Kontynuuj</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}