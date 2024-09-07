import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const StoryScreen = ({ navigation }:any) => (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.contentContainer}>
            Storise 
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
    },
    close: {
      backgroundColor: '#3498db',
      padding: 5,
      borderRadius: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    tile: {
      backgroundColor: '#3498db',
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    tileText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    screenContainer: {
      flex: 1,
    },
    contentContainer: {
      padding: 20,
    },
    closeButton: {
      padding: 10,
      marginRight: 10,
    },
    closeButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
  });

  export default StoryScreen;