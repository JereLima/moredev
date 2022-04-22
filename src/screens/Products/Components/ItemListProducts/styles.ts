//Render Item

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Item = styled.View`
  flex: 1;
  margin: 10px;
`;

export const ItemContainerImage = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;
`;

export const ItemImage = styled.Image`
  height:${RFValue(170)}px;
  margin: ${RFValue(8)}px;
`;

export const ItemFooterImage = styled.View`
  height:${RFValue(45)}px;
  width:${RFValue(45)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

export const ItemDetails = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${RFValue(5)}px;
  justify-content: space-between;
`;

export const ItemCategory = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.paragraphXSmall}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ItemNameProduct = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.paragraph}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ItemDescription = styled.Text``;

export const ItemPrice = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.paragraphLarger}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
