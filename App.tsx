import React from "react";
import AppLoading from "expo-app-loading";
import { Appearance } from 'react-native';

import {
  useFonts,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const colorScheme = Appearance.getColorScheme();
  const applyTheme = colorScheme === 'dark' ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={applyTheme}>
      <StatusBar backgroundColor="white" />
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
