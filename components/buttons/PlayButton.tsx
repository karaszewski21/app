import React, { Children } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface PlayButtonProps {
  props: {
    title: string,
    onPress: () => void,
    backgroundColor: string
    subtitle: string,
    textColor: string
  };
  children?: React.ReactNode;
}


const PlayButton: React.FC<PlayButtonProps> = ({ props, children }) => (
  <TouchableOpacity 
    style={[styles.item, { backgroundColor: props.backgroundColor }]}
    onPress={props.onPress}
  >
    <View style={styles.textContainer}>
      {children}
      <View>
        <Text style={[styles.title, { color: props.textColor }]}>{props.title}</Text>
        {props.subtitle && <Text style={[styles.subtitle, { color: props.textColor }]}>{props.subtitle}</Text>}
      </View>
      <Image source={require('@/assets/icons/play.png')} style={{width: 30, height: 30}} resizeMode='contain'/> 
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
});

export default PlayButton;