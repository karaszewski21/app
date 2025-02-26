import { View,StyleSheet} from 'react-native'
import React from 'react'
import TabBarButton from './TabBarButton';
import { CommonActions } from '@react-navigation/native';

const TabBar = ({ state, descriptors, navigation }) => {
    const primaryColor = '#b17c08';
    const greyColor = '#737373';
  return (
        <View style={{...styles.content}}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                //navigationRef.navigate(route.name, route.params);
                
                navigation.dispatch({
                  ...CommonActions.reset({
                    index: 0,
                    routes: [{ name: route.name }],
                  })
                })
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
  )
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute', 
        bottom: 2,
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