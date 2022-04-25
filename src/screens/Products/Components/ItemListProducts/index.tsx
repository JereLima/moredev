import React from "react";
import { View } from "react-native";
import { shadows } from "../../../../theme/shadows";
import ButtonAddProduct from "../ButtonAddProduct";

import {
  Item,
  ItemContainerImage,
  ItemImage,
  ItemFooterImage,
  ItemDetails,
  ItemCategory,
  ItemNameProduct,
  ItemPrice,
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

const ItemProducts = ({ item, addProduct }: Props) => {
  return (
    <Item>
      <ItemContainerImage style={shadows.primary}>
        <ItemImage source={{ uri: item.image }} resizeMode="contain" />
        <ItemFooterImage>
          <ButtonAddProduct onPress={() => addProduct(item)} />
        </ItemFooterImage>
      </ItemContainerImage>
      <ItemDetails>
        <ItemCategory>{item.category}</ItemCategory>
        <ItemNameProduct numberOfLines={1}>{item.title}</ItemNameProduct>
        <ItemPrice>${item.price}</ItemPrice>
      </ItemDetails>
    </Item>
  );
};

export default ItemProducts;
