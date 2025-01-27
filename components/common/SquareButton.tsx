import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
interface SquareButtonProps {
    props: {
        title?: string;
        icon: string;
        color?: string,
        backgroundColor?: string,
        navigate: () => void,
        disabled?: boolean,
      };  
      children?: any
}

const SquareButton: React.FC<SquareButtonProps> = ({ props, children }: SquareButtonProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
      <TouchableOpacity 
        style={[styles.button, {backgroundColor: props.backgroundColor}]}
        //@ts-ignore
        onPress={() => props.navigate()}
        disabled={props.disabled}
      >
        {children}
       { props.title && <Text style={[styles.buttonTitle, {color: props.color}]}>{props.title}</Text> }
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 140,
    height: 140,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
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