import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Container, Title, Subtitle, Wrapper, WrapperButton } from "./styles";
import Button from "../../components/Button";
import Confirmation from "../../assets/icons/check.svg";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

const SuccessfulPurchase = ({ navigation }: Props) => {
  return (
    <Container>
      <StatusBar backgroundColor="#8775FE" style="light" />
      <Wrapper>
        <Confirmation width={RFValue(160)} height={RFValue(160)} />
        <Title>Sucesso</Title>
        <Subtitle>Compra realizada com sucesso, aproveite!</Subtitle>
      </Wrapper>
      <WrapperButton>
        <Button title="Prosseguir" onPress={() => navigation.goBack()} />
      </WrapperButton>
    </Container>
  );
};

export default SuccessfulPurchase;
