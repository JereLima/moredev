import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_500Medium,
} from "@expo-google-fonts/work-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "WorkSans_600SemiBold", fontSize: 40 }}>
        Inter Black
      </Text>

      <Text style={{ fontFamily: "WorkSans_500Medium", fontSize: 40 }}>
        Inter Black
      </Text>

      <Text style={{ fontFamily: "WorkSans_700Bold", fontSize: 40 }}>
        Inter Black
      </Text>
    </View>
  );
}
