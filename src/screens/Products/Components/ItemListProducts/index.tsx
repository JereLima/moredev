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

const ItemProducts = ({ item }: { item: ProductsType }) => {
  return (
    <Item>
      <ItemContainerImage style={shadows.primary}>
        <ItemImage source={{ uri: item.image }} resizeMode="contain" />
        <ItemFooterImage>
          <ButtonAddProduct />
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
