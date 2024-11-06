import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';

interface ListWrapperProps {
  props: {
    title: string
    textColor: string
    backgroundColor: string
  };
  children?: React.ReactNode;
}

const ListWrapper: React.FC<ListWrapperProps> = ({ props, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ScrollView style={[styles.container, {backgroundColor: props.backgroundColor}]}>
        <Text style={[styles.title, {color: props.textColor}]}>{props.title}</Text>
        {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1F5FE',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'ShantellSans-SemiBoldItalic',
    color: '#0288D1',
    marginBottom: 10,
  },
});

export default ListWrapper;