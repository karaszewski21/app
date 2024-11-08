import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useAudioSentence } from "./SentenceItem";

interface Word {
    word: string;
    translation: string;
    audioUrl: string;
}
  
interface VocabularyModalProps {
    word: Word;
    isVisible: boolean;
    onClose: () => void;
    onMarkAsKnown: (word: Word) => void;
    onMarkToLearn: (word: Word) => void;
    playAudio: (audioUrl: string) => void
}
  
export const VocabularyModal: React.FC<VocabularyModalProps> = ({
  word,
  isVisible,
  onClose,
  onMarkAsKnown,
  onMarkToLearn,
  playAudio
}) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <MaterialCommunityIcons name="close" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            
            <View style={styles.wordContainer}>
              <Text style={styles.wordText}>{word.word}</Text>
              <Text style={styles.translationText}>{word.translation}</Text>
              
              <TouchableOpacity 
                style={styles.playButton}
                onPress={() => playAudio(word.audioUrl)}
              >
                <MaterialCommunityIcons name="play" size={32} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
  
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.button, styles.knownButton]}
                onPress={() => {
                  onMarkAsKnown(word);
                  onClose();
                }}
              >
                <Text style={styles.buttonText}>Znany wyraz</Text>
              </TouchableOpacity>
  
              <TouchableOpacity 
                style={[styles.button, styles.learnButton]}
                onPress={() => {
                  onMarkToLearn(word);
                  onClose();
                }}
              >
                <Text style={styles.buttonText}>Naucz się</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#2A2A2A',
      borderRadius: 15,
      padding: 20,
      width: '80%',
      maxWidth: 400,
    },
    closeButton: {
      position: 'absolute',
      right: 10,
      top: 10,
      padding: 5,
    },
    wordContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    wordText: {
      fontSize: 24,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    translationText: {
      fontSize: 18,
      color: '#CCCCCC',
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      minWidth: 120,
    },
    knownButton: {
      backgroundColor: '#4CAF50',
    },
    learnButton: {
      backgroundColor: '#2196F3',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
    },
    highlightedWord: {
      color: '#4CAF50',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    playButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#2196F3',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
  });