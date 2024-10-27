// components/ImageModal.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, TouchableOpacity, Image, StyleSheet, Dimensions, Text, View } from 'react-native';

interface ImageModalProps {
 isVisible: boolean;
 imageUri: string;
 onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isVisible, imageUri, onClose }) => {
 return (
   <Modal
     visible={isVisible}
     transparent={true}
     onRequestClose={onClose}
     animationType="fade"
   >
     <View style={styles.modalContainer}>
       <TouchableOpacity 
         style={styles.modalOverlay}
         activeOpacity={1}
         onPress={onClose}
       >
         <View style={styles.imageContainer}>
           <TouchableOpacity 
             activeOpacity={1}
             onPress={(e) => e.stopPropagation()}
           >
             <Image
               source={{ uri: imageUri }}
               style={styles.fullScreenImage}
               resizeMode="contain"
             />
           </TouchableOpacity>
           
           <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-circle" size={45} color="white" />
           </TouchableOpacity>
         </View>
       </TouchableOpacity>
     </View>
   </Modal>
 );
};

const styles = StyleSheet.create({
 modalContainer: {
   flex: 1,
 },
 modalOverlay: {
   flex: 1,
   backgroundColor: 'rgba(0,0,0,0.8)',
   justifyContent: 'center',
   alignItems: 'center',
 },
 imageContainer: {
   alignItems: 'center',
   width: '100%',
 },
 fullScreenImage: {
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height * 0.8,
 }
});