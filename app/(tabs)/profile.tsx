import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSession } from '@/context/authContext';
import { useModal } from '@/context/playerModalContext';
import { useNotification } from '@/context/notificationContext';
import { router } from "expo-router";

export default function ProfileScreen() {
  const [notificationsDisabled, setNotificationsDisabled] = useState(true);
  const [storiesDisabled, setStoriesDisabled] = useState(false);
  const { signOut } = useSession();
  const { open, close } = useModal();
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
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>{notificationsDisabled ? 'Wyłącz' : 'Włącz'} powiadomienia</Text>
          <Switch
            value={notificationsDisabled}
            onValueChange={handleNotificationsDisabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificationsDisabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Wyłącz historie</Text>
          <Switch
            value={storiesDisabled}
            onValueChange={setStoriesDisabled}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={storiesDisabled ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>
      </View>

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
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#3498db',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingText: {
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
