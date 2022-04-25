import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import useCart from "../../hooks/useCart";

import {
  Container,
  Body,
  Text,
  ContainerItem,
  ContainerImage,
  ItemImage,
  Wrapper,
  WrapperQuantityAndValue,
  ItemProductName,
  ItemAmountInCart,
  ItemPrice,
  WrapperButtons,
  DecrementButton,
  IncrementButton,
  IconButton,
  Footer,
  WrapperTotal,
  WrapperButtonEnd,
  Total,
  TotalPrice,
} from "./styles";
import { FlatList } from "react-native";
import { Item } from "../Products/Components/ItemListProducts/styles";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
type Props = NativeStackScreenProps<RootStackParamList, "Cart">;

type ProductsType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  amount?: number;
};

const Cart = ({ navigation, route }: Props) => {
  const { list, loadingListCart, removeAll } = useCart();

  const renderItem = ({ item }: { item: ProductsType }) => {
    return (
      <ContainerItem>
        <ContainerImage>
          <ItemImage source={{ uri: item.image }} resizeMode="contain" />
        </ContainerImage>
        <Wrapper>
          <ItemProductName numberOfLines={1}>{item.title}</ItemProductName>
          <WrapperQuantityAndValue>
            <ItemAmountInCart>x{item.amount} </ItemAmountInCart>
            <ItemPrice>${item.price}</ItemPrice>
          </WrapperQuantityAndValue>
        </Wrapper>
        <WrapperButtons>
          <DecrementButton>
            <IconButton name="plus" />
          </DecrementButton>
          <IncrementButton>
            <IconButton name="minus" />
          </IncrementButton>
        </WrapperButtons>
      </ContainerItem>
    );
  };

  return (
    <Container edges={["right", "left", "bottom"]}>
      <Body>
        <Text>Meu Carrinho</Text>
        {!loadingListCart ? (
          <Loading />
        ) : (
          <FlatList
            data={list}
            keyExtractor={(item) => String(item.description)}
            renderItem={renderItem}
          />
        )}
      </Body>

      <Footer>
        <WrapperTotal>
          <Total>Total</Total>
          <TotalPrice>22</TotalPrice>
        </WrapperTotal>
        <WrapperButtonEnd>
          <Button title="Finalizar Compra" onPress={removeAll} />
        </WrapperButtonEnd>
      </Footer>
    </Container>
  );
};

export default Cart;
