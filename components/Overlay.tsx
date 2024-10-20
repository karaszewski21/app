import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface OverlayProps {
  opacity?: number;
  color?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ 
  opacity = 0.5, 
  color = 'black', 
  style, 
  children 
}) => {
  return (
    <View style={[
      styles.overlay,
      { backgroundColor: `rgba(${color === 'black' ? '0, 0, 0' : '255, 255, 255'}, ${opacity})` },
      style
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100
  },
});

export default Overlay;