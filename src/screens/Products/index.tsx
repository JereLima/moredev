import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import { Container } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const Products = ({ navigation, route }: Props) => {
  return <Container />;
};

export default Products;
