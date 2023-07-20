import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashSceen from "expo-splash-screen";
import { useCallback } from 'react';
import ButtomNavigation from './navigation/ButtomNavigation';
import { Cart } from "./screens"

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })

  const onLayoutRootView = useCallback(async() => {
      if(fontsLoaded){
        await SplashSceen.hideAsync();
      }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
            name='Bottom Navigation'
            component={ButtomNavigation}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name='Cart'
            component={Cart}
            options={{headerShown:false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "bold",
    fontSize: 20,
  },
});
