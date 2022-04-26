import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, FlatList, ScrollView } from "react-native";

import { RootStackParamList } from "../types";
import { api } from "../../services/api";

import {
  Container,
  Content,
  Title,
  ContainerCart,
  Category,
  FilterWrapper,
  ListOfProducts,
  ListOfNewsProducts,
  GoCard,
  Header,
} from "./styles";

import ItemListProducts from "./Components/ItemListProducts";
import ItemNewProducts from "./Components/ItemNewProducts";
import ButtonFilter from "./Components/ButtonFilter";

import IconCart from "../../assets/icons/iconCartHeader.svg";
import Badge from "../../components/Badge";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { useStore } from "../../store/store";

type Props = NativeStackScreenProps<RootStackParamList, "Products">;

type ProductsType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  amount?: number;
};

const Products = ({ navigation, route }: Props) => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const defaultCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [categories, setCategories] = useState<string[]>(defaultCategories);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [badgeValue, setBadgeValue] = useState(0);

  const { cart, addToCart, resetCart, incrementItemCart } = useStore(
    (state) => state
  );

  const getCategories = async () => {
    const response = await api.get("/products/categories");
    setCategories(response.data);
    try {
    } catch (error) {
      console.log("erro ao listar todos os produtos filtrados", error);
    } finally {
    }
  };

  const getAllProducts = async () => {
    setLoading(true);
    setSelectedFilter("all");
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log("erro ao listar todos os produtos", error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredProducts = async (filter: string) => {
    setLoading(true);
    try {
      const response = await api.get(`/products/category/${filter}`);
      setProducts(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleAddItemInCart = (item: ProductsType) => {
    const findItem = cart.find((el) => el.id === item.id);
    if (findItem) {
      Alert.alert("Ops", "Produto já está no carrinho", [
        { text: "Entendi", style: "destructive" },
        { text: "ir para o carrinho", onPress: navigateFromCart },
      ]);
    }
    addToCart(item);
  };

  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  const calcItemsInCart = () => {
    console.log("alterou");
    const response = cart.reduce((ac, item: ProductsType) => {
      return ac + item.amount;
    }, 0);
    setBadgeValue(response);
    return response;
  };

  const navigateFromCart = () => {
    navigation.navigate("Cart");
  };

  useEffect(() => {
    calcItemsInCart;
  }, [cart]);

  useEffect(() => {
    if (selectedFilter === "all") return;
    getFilteredProducts(selectedFilter);
  }, [selectedFilter]);

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  const renderNewProductsList = () => {
    return (
      <ListOfNewsProducts>
        <Category>Novidades</Category>

        <FlatList
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ItemNewProducts
              item={item}
              addProduct={(product) => handleAddItemInCart(product)}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <Category>Produtos</Category>
      </ListOfNewsProducts>
    );
  };

  return (
    <Container>
      <Content>
        <Header>
          <Title>Produtos</Title>
          <ContainerCart onPress={navigateFromCart}>
            <IconCart width={22} height={22} />
            {cart.length ? <Badge numberItemsInCart={cart.length} /> : null}
          </ContainerCart>
        </Header>
        <FilterWrapper>
          <ScrollView horizontal>
            <ButtonFilter
              isSelected={selectedFilter === "all" ? true : false}
              title="Últimos"
              onPress={getAllProducts}
            />
            {categories.map((item, key) => (
              <ButtonFilter
                key={item}
                isSelected={item === selectedFilter ? true : false}
                title={item}
                onPress={() => handleSelectFilter(item)}
              />
            ))}
          </ScrollView>
        </FilterWrapper>
        {loading ? (
          <Loading />
        ) : (
          <>
            <ListOfProducts>
              <FlatList
                ListHeaderComponent={renderNewProductsList}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <ItemListProducts
                    addProduct={(product) => handleAddItemInCart(product)}
                    item={item}
                  />
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
              />
            </ListOfProducts>
          </>
        )}
      </Content>
      {cart.length ? (
        <GoCard>
          <Button onPress={navigateFromCart} title="IR PARA O CARRINHO" />
        </GoCard>
      ) : null}
    </Container>
  );
};

export default Products;
