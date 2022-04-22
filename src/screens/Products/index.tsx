import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types";
import {
  Container,
  Title,
  Category,
  FilterWrapper,
  ListOfProducts,
  ListOfNewsProducts,
  GoCard,
} from "./styles";
import { api } from "../../services/api";
import { FlatList, ScrollView } from "react-native";
import { shadows } from "../../theme/shadows";
import NewProducts from "./Components/ItemNewProducts";
import ItemListProducts from "./Components/ItemListProducts";
import ItemNewProducts from "./Components/ItemNewProducts";
import { Item } from "./Components/ItemNewProducts/styles";
import ButtonFilter from "./Components/ButtonFilter";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

type ProductsType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

const Products = ({ navigation, route }: Props) => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    const response = await api.get("/products/categories");
    setCategories(response.data);
    console.log(response.data);
    try {
    } catch (error) {
    } finally {
    }
  };

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const renderNewProductsList = () => {
    return (
      <ListOfNewsProducts>
        <Category>Novidades</Category>

        <FlatList
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ItemNewProducts item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Category>Produtos</Category>
      </ListOfNewsProducts>
    );
  };

  useEffect(() => {
    getCategories();
    getAllProducts();
  }, []);

  return (
    <Container>
      <Title>Produtos</Title>
      <FilterWrapper>
        <ScrollView horizontal>
          <Title>Últimos</Title>
          {categories.map((item, key) => (
            <ButtonFilter/>
          ))}
        </ScrollView>
      </FilterWrapper>
      <ListOfProducts>
        <FlatList
          ListHeaderComponent={renderNewProductsList}
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ItemListProducts item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </ListOfProducts>
      <GoCard></GoCard>
    </Container>
  );
};

export default Products;
