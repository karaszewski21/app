import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSession } from '@/context/authContext';
import { usePlayerModal } from '@/context/playerModalContext';
import { useNotification } from '@/context/notificationContext';
import { router } from "expo-router";
import useFavorite from '@/hooks/useFavorite';

const { height: HEIGHT_SCREEN } = Dimensions.get('window');

export default function ProfileScreen() {
  const [notificationsDisabled, setNotificationsDisabled] = useState(true);
  const { removeAllFavorites } = useFavorite();
  const [storiesDisabled, setStoriesDisabled] = useState(false);
  const { signOut } = useSession();
  const { logout } = useNotification()

  const handleLogout = async () => {
      await signOut()
      logout()
  };

  const handleNotificationsDisabled = async () => {
    setNotificationsDisabled(previousState => !previousState);
    if (notificationsDisabled) {
      console.log('--disable noty')
    }
    else {
      console.log('--enablenoty')
    }
  };

  return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
          <View style={styles.logoContainer}>
            <Image source={require('@/assets/icons/goldfish-logo.png')} style={{width: '100%', height: '100%', borderRadius: 30, resizeMode: 'contain'}}/>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text style={styles.logoutText}>Wyloguj się</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70
  },
  logoContainer: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  goldfish: {
    height: 80,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  tagline: {
    fontSize: 18,
    color: '#555',
    marginTop: 5,
    alignSelf: 'center',
    fontFamily: 'ShantellSans-SemiBoldItalic'
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#b17c08',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'ShantellSans-SemiBoldItalic',
    marginLeft: 10,
  }
});
