import React from "react";
import { Container, Title } from "./styles";

const Badge = () => {

  const itemInCart =  1220
  return (
    <Container>
      <Title>{itemInCart > 10 ? '+10' : itemInCart}</Title>
    </Container>
  );
};

export default Badge;
