import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

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
import { Alert, FlatList } from "react-native";
import { Item } from "../Products/Components/ItemListProducts/styles";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { Store, useStore } from "../../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "Cart">;

type ProductsType = {
  id: number;
  title: string;
  price: string;
  priceTotal: string;
  category: string;
  description: string;
  image: string;
  amount: number;
};

const Cart = ({ navigation, route }: Props) => {
  const {
    cart,
    addToCart,
    resetCart,
    incrementItemCart,
    decrementItemCart,
    removeItemCart,
  } = useStore((state) => state);

  const [totalValue, setTotalValue] = useState();

  const removeItem = (id: number) => {
    removeItemCart(id);
  };

  const incrementItemInCart = (item: ProductsType) => {
    const amountItem = item.amount + 1;
    const price = item.price;
    const priceTotal = Number(item.price) * amountItem;
    incrementItemCart(item, amountItem, price, priceTotal);
  };

  const decrementItemInCart = (item: ProductsType) => {
    if (item.amount === 1) {
      Alert.alert(
        "Remover item",
        "Se deseja remover esse item do carrinho clique em prosseguir",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Prosseguir",
            onPress: () => removeItem(item.id),
            style: "destructive",
          },
        ]
      );
      return;
    }
    const amountItem = item.amount! - 1;
    const priceTotal = amountItem * Number(item.price);
    decrementItemCart(item, amountItem, priceTotal);
  };

  const priceTotalCart = () => {
    const response = cart.reduce((acum: number, product: ProductsType) => {
      return (acum += Number(product.priceTotal));
    }, 0);
    setTotalValue(response.toFixed(2));
    return response;
  };

  const handlePurchase = () => {
    resetCart();
    navigation.reset({
      index: 0,
      routes: [{ name: "Products" }, { name: "SuccessfulPurchase" }],
    });
  };

  useEffect(() => {
    priceTotalCart();
  }, [cart]);

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
            <ItemPrice>${item.priceTotal}</ItemPrice>
          </WrapperQuantityAndValue>
        </Wrapper>
        <WrapperButtons>
          <DecrementButton onPress={() => decrementItemInCart(item)}>
            <IconButton name="minus" />
          </DecrementButton>
          <IncrementButton onPress={() => incrementItemInCart(item)}>
            <IconButton name="plus" />
          </IncrementButton>
        </WrapperButtons>
      </ContainerItem>
    );
  };

  return (
    <Container edges={["right", "left", "bottom"]}>
      <Body>
        <Text>Meu Carrinho</Text>
        <FlatList
          data={cart}
          keyExtractor={(item) => String(item.description)}
          renderItem={renderItem}
        />
      </Body>

      <Footer>
        <WrapperTotal>
          <Total>Total</Total>
          <TotalPrice>${totalValue}</TotalPrice>
        </WrapperTotal>
        <WrapperButtonEnd>
          <Button title="Finalizar Compra" onPress={handlePurchase} />
        </WrapperButtonEnd>
      </Footer>
    </Container>
  );
};

export default Cart;
