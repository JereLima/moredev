import React from "react";
import { Container, Title } from "./styles";

type Props = {
  numberItemsInCart: number;
};
const Badge = ({ numberItemsInCart }: Props) => {
  return (
    <Container>
      <Title>
        {Number(numberItemsInCart) > 10 ? "+10" : numberItemsInCart}
      </Title>
    </Container>
  );
};

export default Badge;
