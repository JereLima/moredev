import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../screens/Cart";
import Products from "../screens/Products";
import { RootStackParamList } from "../screens/types";
import IconHeader from "../assets/icons/iconCartHeader.svg";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import SuccessfulPurchase from "../screens/SuccessfulPurchase";

const Stack = createStackNavigator<RootStackParamList>();

const MyStack = () => {

  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Carrinho",
          headerTintColor: theme.colors.gray_dark,
          headerTitleAlign: 'center',
          headerTitleStyle: {fontFamily: theme.fonts.bold, fontSize: RFValue(12)},
          headerStyle:{backgroundColor: theme.colors.background}
        }}
      />
      <Stack.Screen
        name="SuccessfulPurchase"
        component={SuccessfulPurchase}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
