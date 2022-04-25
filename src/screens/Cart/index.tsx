import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../types';
import { View } from 'react-native';

import { Container } from './styles';
type Props = NativeStackScreenProps<RootStackParamList, "Cart">;

const Cart = ({navigation, route}: Props) => {
  return <Container />;
}

export default Cart;