import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";
import Cart from "../screens/Cart";
import { ItemPrice } from "../screens/Cart/styles";

export type CartType = {
  id: number;
  title: string;
  price: string;
  priceTotal: string;
  category: string;
  description: string;
  image: string;
  amount: number;
};

export const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item: CartType) =>
        set((state) => {
          if (state.cart.find((el) => el.id === item.id)) {
          } else {
            state.cart.push({
              ...item,
              amount: 1,
              price: item.price,
              priceTotal: item.price,
            });
          }
        }),
      incrementItemCart: (
        product: CartType,
        amount: number,
        price: number,
        priceTotal: number
      ) =>
        set((state) => {
          const array: CartType[] = [...state.cart];
          const index = array.findIndex((el) => el.id === product.id);
          array[index].amount = amount;
          array[index].priceTotal = String(priceTotal);
          set({ cart: array });
        }),
      decrementItemCart: (
        product: CartType,
        amount: number,
        priceTotal: number
      ) =>
        set((state) => {
          const array: CartType[] = [...state.cart];
          const index = array.findIndex((el) => el.id === product.id);
          array[index].amount = amount;
          array[index].priceTotal = String(priceTotal);
          set({ cart: array });
        }),
      removeItemCart: (id) =>
        set((state) => {
          const array: CartType[] = [...state.cart];
          const filter = array.filter((el) => el.id !== id);
          set({ cart: filter });
        }),
      resetCart: () => set((state) => ({ cart: [] })),
    }),
    {
      name: "my-cart",
      getStorage: () => AsyncStorage as never,
    }
  )
);
