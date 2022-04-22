import React from "react";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";
import Routes from "./src/routes";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import {theme} from "./src/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //const themeActual = theme.colorsDark ? 
  return (
    <ThemeProvider theme={theme.dark}>
      <Routes />
    </ThemeProvider>
  );
}
