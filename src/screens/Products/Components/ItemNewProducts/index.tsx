import React from "react";
import { View } from "react-native";
import { shadows } from "../../../../theme/shadows";
import ButtonAddProduct from "../ButtonAddProduct";

import {
  Item,
  ItemContainerImage,
  ItemImage,
  ItemDetails,
  ItemCategory,
  ItemNameProduct,
  ItemDescription,
  ItemPrice,
  ItemFooter,
} from "./styles";

type ProductsType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

type Props = {
  item: ProductsType;
  addProduct: (item: ProductsType) => void;
};

const ItemNewProducts = ({ addProduct, item}: Props) => {
  return (
    <Item>
      <ItemContainerImage style={shadows.primary}>
        <ItemImage source={{ uri: item.image }} resizeMode="contain" />
      </ItemContainerImage>
      <ItemDetails>
        <ItemCategory>{item.category}</ItemCategory>
        <ItemNameProduct numberOfLines={1}>{item.title}</ItemNameProduct>
        <ItemDescription numberOfLines={2}>{item.description}</ItemDescription>
        <ItemFooter>
          <ItemPrice>${item.price}</ItemPrice>
          <ButtonAddProduct onPress={() => addProduct(item)} />
        </ItemFooter>
      </ItemDetails>
    </Item>
  );
};

export default ItemNewProducts;
