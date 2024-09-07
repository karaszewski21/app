import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Pressable} from 'react-native';
import Voice from '@react-native-voice/voice';
import * as Speech from 'expo-speech';

const SequentialQuiz = ({quiz}) => {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
 //   Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);

  useEffect(() => {
    console.log('lexi text do bazy', results)
  }, [results]);

  const startSpeechToText = async () => {
    setResults([]);
    await Voice.start("pl-PL");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
   
    await Voice.stop();
  //  await Voice.destroy();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <View style={styles.container}>
    <Pressable
      onPressIn={() => { startSpeechToText()}}
      onPressOut={() => { stopSpeechToText()}}
     >
     {({pressed}) => (
          <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
    </Pressable>
    {results.map((result, index) => <Text key={index}>{result}</Text>)}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SequentialQuiz;