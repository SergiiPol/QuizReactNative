import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import HomePage from './components/HomePage'
import { useFonts } from 'expo-font';
import Navigate from './navigate';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
     'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
     'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf')  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
        <Navigate />
  );
}

const styles = StyleSheet.create({

});
