import React from "react";
import { ButtonProps, View } from "react-native";
import { shadows } from "../../theme/shadows";

import { Container,  Title} from "./styles";

interface Props extends ButtonProps {
  title: string;
}
const Button = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest} style={shadows.button}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
