import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ageGroups } from '@/constants/AgeGroups';
import useAgeGroupsIcon from '@/hooks/useAgeGroupsIcon';

interface AgeRangeComponentProps {
  ageRangeId: number;
  showText?: boolean;
  textColor?: string
}

const AgeRange: React.FC<AgeRangeComponentProps> = ({ ageRangeId ,showText = true, textColor }) => {
    const { ageGroupsIcon } = useAgeGroupsIcon();
    const { id, title, imageUrl } = ageGroups[ageRangeId];
    return (
        <View style={styles.container}>
            <Image source={ageGroupsIcon[ageRangeId]} style={styles.image} />
            <Text style={[styles.text, {color: textColor}]}>{ showText && title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#c3d5e1',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // To jest potrzebne dla Androida
  }
});

export default AgeRange;