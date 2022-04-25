import { StyleSheet } from "react-native";

export const shadows = StyleSheet.create({
  primary: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    shadowColor: "#C2C1F8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
