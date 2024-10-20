import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSession } from '@/context/authContext';
import Loader from '@/components/Loader';
import { ImageBackground, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '@/app/(auth)/sign-in';
import SignUp from '@/app/(auth)/sign-up';
import Preview from '@/app/(auth)/preview'
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { globalTheme } from "@/constants/Colors";

const Stack = createStackNavigator();

const AuthLayout = () => {
  const { session, isLoading } = useSession();

  if (!isLoading && session) return <Redirect href="/(tabs)/" />;



  return (
    <ImageBackground
      source={require('@/assets/bg3.png')}
      style={styles.rootContainer}
      resizeMode='cover'
    >
       <NavigationContainer independent={true} theme={globalTheme}>
        <Stack.Navigator>
            <Stack.Screen
              name="preview"
              component={Preview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="sign-in"
              component={SignIn}
              options={{
                headerShown: false,
              }}
      
            />
            <Stack.Screen
              name="sign-up"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>

      <Loader isLoading={isLoading} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default AuthLayout;
