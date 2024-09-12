import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import VideoScreen from '@/components/player/VideoPlayer';
import { SafeAreaView } from "react-native-safe-area-context";

const MediaPlayerScreen = () => (
    <SafeAreaView>
      <ScrollView>
        <View>
            {/* <VideoScreen></VideoScreen> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

  export default MediaPlayerScreen;