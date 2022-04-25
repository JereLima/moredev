import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  min-width: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${RFValue(7)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.fonts.paragraphXSmall}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
