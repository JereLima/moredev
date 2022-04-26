import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  margin-top: ${RFValue(30)}px;
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: white;
`;

export const Subtitle = styled.Text`
  margin-top: ${RFValue(10)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: white;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WrapperButton = styled.View`
  padding: ${RFValue(29)}px;
`;
