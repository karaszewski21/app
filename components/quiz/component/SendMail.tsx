import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const SendMail: React.FC<{}> = ({
}) => {
  const [userEmail, setUserEmail] = useState<string>('');

  
const sendResultByEmail = () => {
  // TODO: Implementacja wysyłania emaila
  console.log(`Wysyłanie wyniku na adres: `);
};

  return (
    <View style={styles.emailContainer}>
      <Text style={styles.titleText}>
        Otrzymaj swój wynik na email!
      </Text>
      <TextInput
        style={styles.emailInput}
        placeholder="Podaj swój adres email"
        value={userEmail}
        onChangeText={setUserEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.sendButton} onPress={sendResultByEmail}>
        <Text style={styles.sendButtonText}>Wyślij wynik na email</Text>
      </TouchableOpacity>
    </View> 
  );
};

const styles = StyleSheet.create({
  emailContainer: {
    marginTop: 30,
    width: '100%',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  emailInput: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#CBD5E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  sendButton: {
    backgroundColor: '#3182CE',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default SendMail;