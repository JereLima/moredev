import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Products from "../screens/Products";
import { RootStackParamList } from "../screens/types";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Products" component={Products} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
};
