import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type StyleProps = {
  isSelected: boolean;
};

export const Container = styled(TouchableOpacity)<StyleProps>`
  min-width: ${RFValue(64)}px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.background};
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;
  margin: ${RFValue(12)}px;
  border: 1px solid ${({theme}) => theme.colors.disabled};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<StyleProps>`
  font-size: ${({ theme }) => theme.sizes.fonts.paragraphXSmall}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.disabled_text};
  margin: 6px  10px;
`;
