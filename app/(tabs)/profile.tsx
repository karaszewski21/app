import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text} from 'react-native';
import { useSession } from '@/context/authContext';
import { useModal } from '@/context/playerModalContext';
import { router } from "expo-router";

export default function ProfileScreen() {
  const { signOut } = useSession();
  const { open, close } = useModal();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={ async () => { await signOut(); router.replace("/(auth)/preview");}}>Sign Out</Text>

      <Text onPress={() => { open()}}>Open modal</Text>
      <Text onPress={() => {close(); }}>Close modal</Text>
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
