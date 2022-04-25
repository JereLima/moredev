import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.screenPadding}px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.sizes.fonts.h1}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-bottom: ${RFValue(29)}px;
`;

export const ContainerItem = styled.View`
  margin-bottom: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_card};
  border-radius: ${RFValue(12)}px;
`;

export const ContainerImage = styled.View`
  width: ${RFValue(38)}px;
  height: ${RFValue(50)}px;
  margin: ${RFValue(11)}px ${RFValue(9)}px;
  background-color: white;
  border-radius: ${RFValue(10)}px;
  padding: 5px;
`;

export const ItemImage = styled.Image`
  flex: 1;
`;

export const Wrapper = styled.View`
  margin: 11px 9px;
  flex: 1;
`;

export const WrapperQuantityAndValue = styled.View`
  flex-direction: row;
`;

export const ItemProductName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.sizes.fonts.paragraph}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const ItemAmountInCart = styled.Text``;

export const ItemPrice = styled.Text``;

export const WrapperButtons = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(9)}px;
`;

export const DecrementButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: ${RFValue(30)}px;
  border-bottom-left-radius: ${RFValue(30)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.gray_medium};
  border-right-width: ${RFValue(1)}px;
`;

export const IncrementButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-right-radius: ${RFValue(30)}px;
  border-bottom-right-radius: ${RFValue(30)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.gray_medium};
`;

export const IconButton = styled(Icon)`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.gray_medium};
  margin: ${RFValue(6)}px ${RFValue(13)}px;
`;

export const Footer = styled.View``;

export const WrapperTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.disabled};
  padding: 12px 12px;
`;

export const WrapperButtonEnd = styled.View`
  background-color: gray;
  padding: ${RFValue(29)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Total = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.sizes.fonts.paragraph}px;
  color: #404040;
`;
export const TotalPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.sizes.fonts.paragraph}px;
  color: #000000;
`;
