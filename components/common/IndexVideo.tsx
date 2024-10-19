import React, { useState, useEffect } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { View, Image, ActivityIndicator } from 'react-native';

interface VideoPlayerProps {
  source: string;
  isLooping?: boolean
  style: object;
  type: string;
}

const IndexVideo: React.FC<VideoPlayerProps> = ({ source, isLooping = true, type, style }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    setIsLoading(true);
  }, [source]);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (error: string) => {
    console.error('Błąd odtwarzania wideo:', error);
    setIsLoading(false);
  };

  return (
    <View style={[style, { justifyContent: 'center', alignItems: 'center' }]}>
     {type === 'video' ? (
        <Video
          key={`video-${key}`}
          source={{ uri: source }}
          resizeMode={ResizeMode.COVER}
          shouldPlay={true}
          isLooping={isLooping}
          style={[style, { position: 'absolute' }]}
          onLoadStart={handleLoadStart}
          onLoad={handleLoad}
          onError={(error) => handleError(error)}
        />
      ) : (
        <Image
          key={`image-${key}`}
          source={{ uri: source }}
          style={[style, { position: 'absolute' }]}
          onLoadStart={handleLoadStart}
          onLoad={handleLoad}
          onError={() => handleError('Nie udało się załadować obrazu')}
        />
      )}
      {isLoading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

export default IndexVideo;