import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SquareButtonProps {
    props: {
        title: string;
        icon: string;
        bookId: string;
        navigate: () => void;
      };  
}

const SquareButton: React.FC<SquareButtonProps> = ({ props }: SquareButtonProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const oscillate = Animated.loop(
//       Animated.sequence([
//         Animated.timing(scaleAnim, {
//           toValue: 1.05,
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scaleAnim, {
//           toValue: 1,
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//       ])
//     );
//     oscillate.start();

//     return () => oscillate.stop();
//   }, [scaleAnim]);

  return (
    <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
      <TouchableOpacity 
        style={styles.button}
        //@ts-ignore
        onPress={() => props.navigate()}
      >
       
        <Ionicons 
          //@ts-ignore
        name={props.icon} size={40} color="#fff" />
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 120,
    height: 120,
    margin: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#3498db',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SquareButton;