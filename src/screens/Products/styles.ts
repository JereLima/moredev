import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView, } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.sizes.screenPadding}px;
`;


export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerCart = styled.TouchableOpacity`
  height: 100%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.h3}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Category = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.h1}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const FilterWrapper = styled.View`
  justify-content: center;
`;

export const ListOfNewsProducts = styled.View`
  flex: 1;
`;

export const ListOfProducts = styled.View`
  flex: 1;
`;

export const GoCard = styled.View`
  width: ${({ theme }) => theme.sizes.myWidth}px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${RFValue(29)}px;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px;
`;
