import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface FunnyButtonProps {
  props: {
    title: string;
    icon: string;
    onPress: () => void;
    style?: ViewStyle;
  };  
}

const FunnyButton: React.FC<FunnyButtonProps> = ({props}) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonContainer, props.style]}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      >
        {/* <Ionicons 
        //@ts-ignore
        name={'push-sharp'} size={24} color="#fff" style={styles.icon} /> */}
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  icon: {
    marginRight: 10,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FunnyButton;