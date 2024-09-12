import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons';
import TabBarButton from './TabBarButton';
import { useTabsScreen } from '@/context/tabContext';
import { SafeAreaView } from "react-native-safe-area-context";
import VideoScreen from '@/components/player/VideoPlayer';

const TabBar = ({ state, descriptors, navigation }) => {
    const { tab } = useTabsScreen();

    const primaryColor = '#0891b2';
    const greyColor = '#737373';
  return (
    <SafeAreaView>
        <View style={{...styles.content,  display: tab ? 'flex' : 'none'}}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            // if(['_sitemap', '+not-found'].includes(route.name)) return null;
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <TabBarButton 
                key={route.name}
                style={styles.tabbarItem}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
                routeName={route.name}
                color={isFocused? primaryColor: greyColor}
                label={label}
              />
            )
          })}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute', 
        bottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1,
    }
})

export default TabBar