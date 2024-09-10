import { Redirect, Tabs } from 'expo-router';
import React, { Fragment } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSession } from '@/context/authContext';
import { useModal } from '@/context/playerModalContext';
import { MaterialIcons } from '@expo/vector-icons';
import { useTabsScreen } from '@/context/tabContext';

export default function TabLayout() {
  const { session, isLoading } = useSession();
  const { isOpen, close } = useModal();
  const colorScheme = useColorScheme();
  const { tab } = useTabsScreen()

  if (!session) {
    return (
      <Redirect href="/(auth)/preview" />
    );
  }
  
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
            tabBarStyle: { 
              display: tab ? 'flex' : 'none'
            },
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarBadge: 3,
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="books"
            options={{
              title: 'Książki',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="fave"
            options={{
              title: 'Ulubione',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="fun"
            options={{
              title: 'Zabawy',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'accessibility' : 'accessibility-outline'} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profil',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
              ),
            }}
          />
        </Tabs>
        { isOpen ?
          <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Choose a sticker</Text>
              <Pressable onPress={close}>
                <MaterialIcons name="close" color="#fff" size={22} />
              </Pressable>
            </View>
            <Text style={styles.title}>Choose a sticker</Text>
          </View>
        : null
      }
    </>
  );
  
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 'auto'
  },
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
