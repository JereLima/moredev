import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizes.screenPadding}px;
`;

export const Title = styled.Text``;

export const Category = styled.Text`
    font-size: ${({ theme }) => theme.sizes.fonts.h1}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.text_dark};
`;


export const FilterWrapper = styled.View`
  height: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;


export const ListOfNewsProducts = styled.View`
  flex: 1;
`;

export const ListOfProducts = styled.View`
  flex: 1;
`;

export const GoCard = styled.View`
  height: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

