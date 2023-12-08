import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Scrollview, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import globalstyles from "./src/config/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import colors from "./src/config/colors";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/components/screens/LoginScreen";
import RegisterScreen from "./src/components/screens/RegisterScreen";
import HomeScreen from "./src/components/screens/HomeScreen";
import LandingScreen from "./src/components/screens/LandingScreen";
import AccountRecoveryScreen from "./src/components/screens/AccountRecoveryScreen";

const Stack = createStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: colors.colors, 
    mode: "exact",
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              options={{ headerShown: false }}
              name="Landing"
              component={LandingScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={RegisterScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="AccountRecovery"
              component={AccountRecoveryScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);