import React from "react";
import { ButtonProps } from "react-native";
import { Container, Title } from "./styles";
interface Props extends ButtonProps {
  isSelected: boolean;
  title: string;
}

const ButtonFilter = ({ isSelected, title, ...rest }: Props) => {
  return (
    <Container isSelected={isSelected} {...rest}>
      <Title isSelected={isSelected}>{title}</Title>
    </Container>
  );
};

export default ButtonFilter;
