import React, { Fragment, useRef, useState, useEffect } from 'react';
import { Dimensions, View, Platform, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import { LinearGradient } from 'expo-linear-gradient';
import { IUserStory, NextOrPrevious, StoryBasicProps } from './interfaces';
import StoryBasicListItem from './StoryBasicListItem';

const { height, width } = Dimensions.get('window');

export const StoryBasic = ({
  index,  
  data,
  duration,
  onStart,
  onClose,

}: StoryBasicProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [selectedData, setSelectedData] = useState<IUserStory>();

    //   // Component Functions
    const _handleStoryItemPress = (item: IUserStory, index?: number) => {
        if (onStart) {
        onStart(item);
        }

        setCurrentPage(0);
        setSelectedData(item);
        setIsModalOpen(true);
    };

    const onStoryFinish = (state: NextOrPrevious) => {
        if (onClose) {
        onClose(selectedData);
        }

        setIsModalOpen(false);
    }

  return (
    <>
      <TouchableOpacity 
          key={index} 
          onPress={() => _handleStoryItemPress(data)}  
      >
        <View style={styles.container}>
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)']}
            style={styles.gradient}
          >
            <Image source={{uri: data.user_image }} style={styles.image} />
          </LinearGradient>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.user_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        isOpen={isModalOpen}
        onClosed={() => setIsModalOpen(false)}
        position="center"
        swipeToClose
        swipeArea={250}
        backButtonClose
        coverScreen={true}
      >
       <StoryBasicListItem
          duration={duration * 1000}
          key={index}
          userId={data.user_id}
          profileName={data.user_name}
          profileImage={data.user_image}
          stories={data.stories}
          currentPage={currentPage}
          onFinish={onStoryFinish}
          swipeText={'swipeText'}
          onClosePress={() => {
            setIsModalOpen(false);
            if (onClose) {
              onClose(data);
            }
          }}
          index={0}
        />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 5,
    height: 150,
    width: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  modal: {
    flex: 1,
    height,
    width,
  },
});

export default StoryBasic;