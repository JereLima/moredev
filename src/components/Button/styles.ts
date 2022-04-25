import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  background-color: red;
  border-radius: ${RFValue(37)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.button}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: ${RFValue(16.5)}px;
  text-align: center;
`;
