import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

const Loading = () => {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Container>
  );
};

export default Loading;
