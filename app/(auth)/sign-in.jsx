import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { useSession } from '@/context/authContext';

const SignIn = () => {
  const { signIn } = useSession();

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text onPress={async () => { await signIn(); router.replace('/(tabs)') } }>
              Sign In
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
