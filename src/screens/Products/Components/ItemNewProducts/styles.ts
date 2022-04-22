//Render Item

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Item = styled.View`
  width: ${({ theme }) => theme.sizes.myWidth / 2}px;
  margin: 10px;
`;

export const ItemContainerImage = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;
`;

export const ItemImage = styled.Image`
  height: 170px;
  margin: ${RFValue(8)}px;
`;

export const ItemDetails = styled.View`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.background};
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

export const ItemDescription = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.paragraphSmall}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const ItemPrice = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.paragraphLarger}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ItemFooter = styled.View`
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
