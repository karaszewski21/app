import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSession } from '@/context/authContext';
import Loader from '@/components/Loader';


const AuthLayout = () => {
  const { session, isLoading } = useSession();
  console.log('-->AuthLayout session, isLoading',session, isLoading)

  if (!isLoading && session) return <Redirect href="/(tabs)/" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="preview"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <Loader isLoading={isLoading} />
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </>
  );
};

export default AuthLayout;
