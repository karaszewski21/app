import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import QuizPlayer from './QuizPlayer';
import { ImageModal } from './ImageModal';
import { Image } from 'expo-image';

interface WelcomeScreenProps {
  title: string;
  synopsis: string;  
  audioUrl: string;
  imageUrl: string;
  onStartPress: () => void;
  onImagePress: () => void;
  theme?: {
    textColor: string;
    buttonBgColor: string;
    buttonTextColor: string;
    buttonBorderColor?: string;
    backgroundScreen?: string;
  }
}

const defaultTheme = {
  // Tekst
  textColor: '#000',
  //Tło
  backgroundScreen: '#007bff',
  // Przycisk
  buttonBgColor: '#007bff',
  buttonTextColor: '#FFFFFF',
  buttonBorderColor: '#0056b3',
  
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ title, synopsis, onStartPress, onImagePress, audioUrl, imageUrl, theme = {} }) => {
  const currentTheme = { ...defaultTheme, ...theme };
  return (
    <View style={[styles.contentContainer, {backgroundColor: currentTheme.backgroundScreen}]}>
        <Text style={[styles.title, {color: currentTheme.textColor}]}>{title}</Text>
        
        { audioUrl &&  <QuizPlayer audioUrl={audioUrl}/> }

        { imageUrl && <View>
            <Image source={{ uri: imageUrl }} style={styles.questionImage} contentFit='contain' placeholder={require('@/assets/gifs/loader.gif')} transition={2000}/>
            <TouchableOpacity 
              style={styles.zoomButton}
              onPress={() => onImagePress()}
            >
              <Text style={styles.zoomButtonText}>🔍</Text>
            </TouchableOpacity>
          </View>

        }

        <View style={styles.synopsisContainer}>
            <Text style={[styles.synopsisText,{color: currentTheme.textColor}]}>
                {synopsis}
            </Text>
        </View>
        <TouchableOpacity 
          style={[styles.startButton, {backgroundColor: currentTheme.buttonBgColor}]}
          onPress={onStartPress}
        >
            <Text style={[styles.startButtonText, {color: currentTheme.buttonTextColor}]}>Zacznij</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  questionImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 15,
  },
  zoomButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  zoomButtonText: {
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d3748',
    marginVertical: 30,
  },
  synopsisContainer: {
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 15,
    marginVertical: 30,
  },
  synopsisText: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'justify',
    lineHeight: 24,
  },
  startButton: {
    backgroundColor: '#3182ce',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;